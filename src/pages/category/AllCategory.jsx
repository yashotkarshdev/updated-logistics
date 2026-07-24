import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  createCategory as addCategory,
  updateCategory,
  deleteCategory,
} from "../../features/category/categoryThunk";
import { resetStatus } from "../../features/category/categorySlice";
import { Pencil, Trash2, Plus, X, LayoutGrid, Loader2, PackageOpen, Search } from "lucide-react";

const AllCategory = () => {
  const dispatch = useDispatch();
  const { categories, loading, success } = useSelector((state) => state.category);

  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      closeModal();
      dispatch(resetStatus());
    }
  }, [success, dispatch]);

  const openModal = (cat = null) => {
    if (cat) {
      setName(cat.name);
      setEditId(cat._id);
    } else {
      setName("");
      setEditId(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (loading) return; // Prevent closing during submission
    setIsModalOpen(false);
    setName("");
    setEditId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (editId) {
      dispatch(updateCategory({ id: editId, data: { name } }));
    } else {
      dispatch(addCategory({ name }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this category?")) {
      dispatch(deleteCategory(id));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 lg:p-10 text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <LayoutGrid size={24} />
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-800">Categories</h1>
            </div>
            <p className="text-slate-500 text-sm">Organize and manage your product catalog structure.</p>
          </div>
          
          <button
            onClick={() => openModal()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all transform active:scale-95 shadow-lg shadow-blue-200"
          >
            <Plus size={20} strokeWidth={3} />
            <span>Add Category</span>
          </button>
        </header>

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          
          {/* SEARCH/FILTER PLACEHOLDER */}
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
             <Search size={18} className="text-slate-400" />
             <input 
                type="text" 
                placeholder="Search categories..." 
                className="bg-transparent border-none focus:ring-0 text-sm w-full"
             />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[13px] uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold w-16">#</th>
                  <th className="px-6 py-4 font-semibold">Category Name</th>
                  <th className="px-6 py-4 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* SKELETON LOADING STATE */}
                {loading && categories.length === 0 ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-6 py-5"><div className="h-4 w-4 bg-slate-200 rounded"></div></td>
                      <td className="px-6 py-5"><div className="h-4 w-48 bg-slate-200 rounded"></div></td>
                      <td className="px-6 py-5"><div className="h-8 w-20 bg-slate-200 rounded mx-auto"></div></td>
                    </tr>
                  ))
                ) : categories.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="py-20">
                      <div className="flex flex-col items-center justify-center text-slate-400">
                        <PackageOpen size={48} strokeWidth={1} className="mb-4 text-slate-300" />
                        <p className="text-lg font-medium">No categories yet</p>
                        <p className="text-sm">Click "Add Category" to get started.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  categories.map((cat, index) => (
                    <tr key={cat._id} className="group hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4 text-slate-400 font-mono text-sm">{index + 1}</td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-slate-700">{cat.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-3">
                          <button 
                            onClick={() => openModal(cat)}
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                            title="Edit"
                          >
                            <Pencil size={18} />
                          </button>
                          <button 
                            onClick={() => handleDelete(cat._id)}
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
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

      {/* REFINED MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-md rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">
                {editId ? "Edit Category" : "New Category"}
              </h3>
              <button 
                onClick={closeModal}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  Category Name
                </label>
                <input
                  type="text"
                  autoFocus
                  placeholder="Enter name (e.g. Smartphones)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-4 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <div className="flex gap-3">
                <button 
                  type="button" 
                  onClick={closeModal}
                  disabled={loading}
                  className="flex-1 px-4 py-3.5 text-slate-600 font-bold hover:bg-slate-50 rounded-xl transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-[2] px-4 py-3.5 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <span>{editId ? "Update Category" : "Create Category"}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCategory;