import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, deleteContact, updateContactStatus } from "../../features/contact/contactThunk";
import { resetStatus } from "../../features/contact/contactSlice";
import { Mail, Trash2, Eye, X, Loader2, CheckCircle2, Clock, MessageSquareQuote } from "lucide-react";

const AllContact = () => {
  const dispatch = useDispatch();
  const { contacts, loading, success } = useSelector((state) => state.contact);

  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      dispatch(resetStatus());
    }
  }, [success, dispatch]);

  const openDetails = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedContact(null);
  };

  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "resolved" ? "pending" : "resolved";
    dispatch(updateContactStatus({ id, status: newStatus }));
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this inquiry permanently?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 lg:p-10">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <span className="p-2 bg-rose-500 rounded-lg text-white shadow-lg shadow-rose-100">
                <Mail size={20}/>
              </span>
              Inquiries
            </h1>
            <p className="text-slate-500 text-sm mt-1">Manage messages and contact requests from users.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 shadow-sm">
            Total: {contacts.length}
          </div>
        </header>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 text-[11px] uppercase tracking-widest font-bold border-b border-slate-100">
                  <th className="px-6 py-4">Sender</th>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading && contacts.length === 0 ? (
                   [...Array(3)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="5" className="px-6 py-6"><div className="h-5 bg-slate-100 rounded w-full"></div></td>
                    </tr>
                  ))
                ) : contacts.length === 0 ? (
                  <tr><td colSpan="5" className="py-20 text-center text-slate-400">No messages found.</td></tr>
                ) : (
                  contacts.map((c) => (
                    <tr key={c._id} className={`hover:bg-slate-50 transition-colors ${c.status === 'pending' ? 'bg-blue-50/20' : ''}`}>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-700">{c.name}</span>
                          <span className="text-xs text-slate-400">{c.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 max-w-[200px] truncate">
                        {c.subject || "No Subject"}
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => handleToggleStatus(c._id, c.status)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter transition-all ${
                            c.status === 'resolved' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {c.status === 'resolved' ? <CheckCircle2 size={12}/> : <Clock size={12}/>}
                          {c.status || 'pending'}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-400">
                        {new Date(c.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-2">
                          <button onClick={() => openDetails(c)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"><Eye size={18} /></button>
                          <button onClick={() => handleDelete(c._id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={18} /></button>
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

      {/* DETAIL VIEW MODAL */}
      {isModalOpen && selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[28px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center gap-2">
                <MessageSquareQuote className="text-rose-500" size={20} />
                <h3 className="text-lg font-bold text-slate-800 tracking-tight">Message Details</h3>
              </div>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 p-2"><X size={20} /></button>
            </div>

            <div className="p-8">
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">From</p>
                    <p className="font-bold text-slate-700">{selectedContact.name}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Email</p>
                    <p className="font-bold text-slate-700 truncate">{selectedContact.email}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Subject</p>
                  <p className="px-4 py-3 bg-slate-50 rounded-xl font-semibold text-slate-800">
                    {selectedContact.subject || "No Subject"}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Message Body</p>
                  <div className="p-5 bg-slate-50 rounded-[20px] text-slate-600 text-sm leading-relaxed border border-slate-100 whitespace-pre-wrap min-h-[120px]">
                    {selectedContact.message}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button 
                  onClick={closeModal} 
                  className="flex-1 py-4 font-bold text-slate-500 hover:bg-slate-50 rounded-2xl transition-colors"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    handleToggleStatus(selectedContact._id, selectedContact.status);
                    closeModal();
                  }}
                  className={`flex-[2] py-4 rounded-2xl font-bold text-white shadow-lg transition-all ${
                    selectedContact.status === 'resolved' 
                    ? 'bg-amber-500 shadow-amber-100' 
                    : 'bg-emerald-600 shadow-emerald-100'
                  }`}
                >
                  Mark as {selectedContact.status === 'resolved' ? 'Pending' : 'Resolved'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllContact;