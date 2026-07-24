import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  getBlogs, 
  deleteBlog, 
  toggleBlogStatus, 
  updateBlog, 
  createBlog 
} from "../../features/blog/blogThunk";
import { resetStatus } from "../../features/blog/blogSlice";
import { 
  FileText, Pencil, Trash2, Plus, X, Loader2, 
  Camera, User, CheckCircle, XCircle, Search, AlertCircle
} from "lucide-react";
import RichTextEditor from "../../components/RichTextEditor";

const AllBlogs = () => {
  const dispatch = useDispatch();
  const { blogs, loading, success, error } = useSelector((state) => state.blog);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    status: "Active"
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  // Close modal only on successful API completion
  useEffect(() => {
    if (success) {
      closeModal();
      dispatch(resetStatus());
    }
  }, [success, dispatch]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const openModal = (blog = null) => {
    if (blog) {
      setFormData({
        title: blog.title,
        author: blog.author,
        description: blog.description,
        status: blog.status
      });
      setImagePreview(blog.imageUrl);
      setEditId(blog._id);
    } else {
      setFormData({ title: "", author: "", description: "", status: "Active" });
      setImagePreview("");
      setImageFile(null);
      setEditId(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (loading) return; // Block closing if API is in progress
    setIsModalOpen(false);
    setImageFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim()) {
      return alert("Title and Content are required");
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("description", formData.description); 
    data.append("status", formData.status);
    
    // Key "image" must match backend upload.single("image")
    if (imageFile) {
      data.append("image", imageFile); 
    } else if (!editId) {
      return alert("Please upload a cover image");
    }

    try {
      if (editId) {
        await dispatch(updateBlog({ id: editId, data })).unwrap();
      } else {
        await dispatch(createBlog(data)).unwrap();
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  // Fixed: useCallback ensures editor doesn't re-render parent state into a loop
  const handleEditorChange = useCallback((val) => {
    setFormData((prev) => ({ ...prev, description: val }));
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 lg:p-10 relative">
      
      {/* BACKGROUND LOADER (For background status toggles) */}
      {loading && !isModalOpen && (
        <div className="fixed inset-0 z-[60] bg-white/40 backdrop-blur-[1px] flex items-center justify-center">
          <div className="bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-100">
            <Loader2 className="text-orange-500 animate-spin" size={28} />
            <span className="font-bold text-slate-600 text-sm tracking-tight">Syncing...</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-800 flex items-center gap-3">
              <span className="p-2 bg-orange-500 rounded-xl text-white shadow-lg shadow-orange-200">
                <FileText size={24}/>
              </span>
              Blog Management
            </h1>
            <p className="text-slate-500 text-sm mt-1">Create, edit, and manage your rich-text articles.</p>
          </div>
          <button 
            onClick={() => openModal()}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95"
          >
            <Plus size={20} strokeWidth={3} />
            <span>Add New Post</span>
          </button>
        </header>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-3">
            <AlertCircle size={20} />
            <span className="text-sm font-semibold">{error}</span>
          </div>
        )}

        {/* DATA TABLE */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-widest font-black border-b border-slate-100">
                  <th className="px-8 py-5">Article details</th>
                  <th className="px-6 py-5">Author</th>
                  <th className="px-6 py-5 text-center">Status</th>
                  <th className="px-8 py-5 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {blogs.length === 0 && !loading ? (
                  <tr>
                    <td colSpan="4" className="py-20 text-center text-slate-400">
                      <Search size={40} className="mx-auto mb-2 opacity-20" />
                      <p className="font-medium">No posts found.</p>
                    </td>
                  </tr>
                ) : (
                  blogs.map((blog) => (
                    <tr key={blog._id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-5">
                          <img src={blog.imageUrl} alt="" className="h-14 w-24 rounded-xl object-cover bg-slate-100 border border-slate-200 shadow-sm shrink-0" />
                          <div className="flex flex-col min-w-0">
                            <span className="font-bold text-slate-800 truncate text-base">{blog.title}</span>
                            <div className="text-xs text-slate-400 line-clamp-1 mt-0.5" dangerouslySetInnerHTML={{ __html: blog.description }} />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-semibold text-slate-600">{blog.author}</td>
                      <td className="px-6 py-5 text-center">
                        <button 
                          onClick={() => dispatch(toggleBlogStatus(blog._id))}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all ${
                            blog.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {blog.status === 'Active' ? <CheckCircle size={12}/> : <XCircle size={12}/>}
                          {blog.status}
                        </button>
                      </td>
                      <td className="px-8 py-5 text-center">
                        <div className="flex justify-center gap-2">
                           <button onClick={() => openModal(blog)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"><Pencil size={18} /></button>
                           <button onClick={() => { if(window.confirm("Delete permanently?")) dispatch(deleteBlog(blog._id)) }} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-5xl max-h-[92vh] rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95">
            
            <div className="sticky top-0 z-20 flex items-center justify-between p-6 border-b bg-white">
              <h3 className="text-xl font-bold text-slate-800">{editId ? "Edit Post" : "Compose New Post"}</h3>
              <button onClick={closeModal} className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-all"><X size={20} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              <form onSubmit={handleSubmit} id="blogForm" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Title</label>
                      <input required type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-bold" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Author</label>
                        <input required type="text" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl focus:border-orange-500 outline-none transition-all font-semibold" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Visibility</label>
                        <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl outline-none focus:border-orange-500 appearance-none font-semibold">
                          <option value="Active">Published</option>
                          <option value="Inactive">Draft</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Cover</label>
                    <div className="relative h-[162px] w-full rounded-2xl overflow-hidden bg-slate-50 border-2 border-dashed border-slate-200 group flex items-center justify-center">
                      {imagePreview ? <img src={imagePreview} className="h-full w-full object-cover" alt="Preview" /> : <div className="text-slate-300 flex flex-col items-center gap-1 font-bold"><Camera size={32} /> <span className="text-[10px]">SELECT IMAGE</span></div>}
                      <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity">
                        <Plus className="text-white" size={32} />
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Content</label>
                  <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-inner min-h-[400px]">
                    <RichTextEditor value={formData.description} onChange={handleEditorChange} />
                  </div>
                </div>
              </form>
            </div>

            <div className="p-6 border-t bg-slate-50/50 flex gap-3">
              <button type="button" onClick={closeModal} className="flex-1 py-4 font-bold text-slate-500 hover:bg-slate-200 rounded-2xl">Discard</button>
              <button form="blogForm" type="submit" disabled={loading} className="flex-[2] py-4 bg-orange-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-orange-100 hover:bg-orange-600 disabled:opacity-50 transition-all active:scale-95">
                {loading ? <Loader2 className="animate-spin" /> : (editId ? "Save Changes" : "Publish Post")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;