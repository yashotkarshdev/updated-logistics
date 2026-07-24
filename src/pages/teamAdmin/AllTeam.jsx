import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, createTeam, updateTeam, deleteTeam } from "../../features/team/teamThunk";
import { getCategories } from "../../features/category/categoryThunk";
import { resetStatus } from "../../features/team/teamSlice";
import { Users, Pencil, Trash2, Plus, X, Loader2, Image as ImageIcon, Camera } from "lucide-react";

const AllTeam = () => {
  const dispatch = useDispatch();
  const { teams, loading, success } = useSelector((state) => state.team);
  const { categories } = useSelector((state) => state.category);

  // Form States
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null); // File object
  const [preview, setPreview] = useState(""); // Preview URL
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getTeams());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      closeModal();
      dispatch(resetStatus());
    }
  }, [success, dispatch]);

  const openModal = (team = null) => {
    if (team) {
      setName(team.name);
      setPosition(team.position || "");
      setCategoryId(team.category?._id || team.category || "");
      setPreview(team.image || ""); // Existing Cloudinary URL
      setEditId(team._id);
    } else {
      setName("");
      setPosition("");
      setCategoryId("");
      setImage(null);
      setPreview("");
      setEditId(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (loading) return;
    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Local preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !categoryId) return alert("Required fields missing");

    // Use FormData for file uploads
    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("category", categoryId);
    if (image) formData.append("image", image);

    if (editId) {
      dispatch(updateTeam({ id: editId, data: formData }));
    } else {
      dispatch(createTeam(formData));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 lg:p-10">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <span className="p-2 bg-indigo-600 rounded-lg text-white"><Users size={20}/></span>
              Team Roster
            </h1>
            <p className="text-slate-500 text-sm mt-1">Manage profiles and images.</p>
          </div>
          <button onClick={() => openModal()} className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-100">
            <Plus size={20} strokeWidth={3} /> Add Member
          </button>
        </header>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 text-[12px] uppercase font-bold border-b border-slate-100">
                  <th className="px-6 py-4">Member</th>
                  <th className="px-6 py-4">Position</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {teams.map((t) => (
                  <tr key={t._id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                          {t.image ? (
                            <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center text-slate-400 bg-slate-50"><ImageIcon size={16}/></div>
                          )}
                        </div>
                        <span className="font-bold text-slate-700">{t.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-sm">{t.position}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold">
                        {t.category?.name || "General"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button onClick={() => openModal(t)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg"><Pencil size={18} /></button>
                        <button onClick={() => dispatch(deleteTeam(t._id))} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-md rounded-[28px] shadow-2xl overflow-hidden p-8 animate-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">{editId ? "Edit" : "Add"} Team Member</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* IMAGE UPLOAD SECTION */}
              <div className="flex flex-col items-center mb-4">
                <div className="relative h-24 w-24 rounded-2xl overflow-hidden bg-slate-50 border-2 border-dashed border-slate-200 group transition-all hover:border-indigo-400">
                  {preview ? (
                    <img src={preview} alt="Preview" className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-slate-300"><ImageIcon size={32}/></div>
                  )}
                  <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity">
                    <Camera className="text-white" size={24} />
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                  </label>
                </div>
                <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-wider">Click to upload photo</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Position</label>
                <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Category</label>
                <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer">
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="button" onClick={closeModal} className="flex-1 py-3.5 font-bold text-slate-500 rounded-2xl hover:bg-slate-50">Cancel</button>
                <button type="submit" disabled={loading} className="flex-[2] py-3.5 bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-100">
                  {loading ? <Loader2 className="animate-spin" /> : "Save Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTeam;