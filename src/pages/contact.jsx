// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import MapSection from "../components/MapSection";
// import { createContact } from "../features/contact/contactThunk";

// const InputField = ({ name, placeholder, type = "text", formData, handleChange, errors }) => (
//   <div className="w-full space-y-1">
//     <input
//       type={type}
//       name={name}
//       placeholder={placeholder}
//       value={formData[name]}
//       onChange={handleChange}
//       className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50/50 border-2 border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:border-orange-500 focus:bg-white transition-all font-semibold text-sm sm:text-base"
//     />
//     {errors[name] && (
//       <p className="text-[10px] font-bold text-red-500 uppercase">{errors[name]}</p>
//     )}
//   </div>
// );

// const Contact = () => {
//   const dispatch = useDispatch();
//   // Access state from your Redux store
//   const { loading, error } = useSelector((state) => state.contact);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState("");

//   const validate = () => {
//     let newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = "Invalid email";
//     }
//     if (!formData.phone) {
//       newErrors.phone = "Phone required";
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = "Invalid phone";
//     }
//     if (!formData.subject.trim()) newErrors.subject = "Required";
//     if (!formData.message.trim()) newErrors.message = "Required";
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     // Reset local success state
//     setSuccess("");
    
//     // Dispatch the thunk
//     const result = await dispatch(createContact(formData));

//     if (createContact.fulfilled.match(result)) {
//       setSuccess("Message dispatched successfully! 🚚");
//       setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//       setErrors({});
//     } else if (createContact.rejected.match(result)) {
//       // Logic to handle the API error format
//       const apiErrorMessage = result.payload?.message || result.error?.message || "Something went wrong";
      
//       // If the API message contains specific field errors, try to map them
//       if (apiErrorMessage.includes("message:")) {
//         setErrors({ message: apiErrorMessage.split("message:")[1].trim() });
//       } else {
//         setErrors({ api: apiErrorMessage });
//       }
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden">
//         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[120px] -z-10"></div>

//         <div className="max-w-7xl w-full bg-white/70 backdrop-blur-xl border border-white rounded-[3rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
//           {/* LEFT PANEL */}
//           <div className="lg:col-span-5 bg-slate-900 p-16 text-white flex flex-col justify-between">
//             <div className="space-y-10">
//               <h1 className="text-5xl font-black leading-tight">
//                 LET'S <br /> <span className="text-orange-500 italic">CONNECT</span>
//               </h1>
//               <div className="space-y-6">
//                 <p className="text-sm font-semibold">+91 7014980454</p>
//                 <p className="text-sm font-semibold">hr.aden@adenlogistics.co.in</p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <div className="lg:col-span-7 p-16">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid grid-cols-2 gap-6">
//                 <InputField name="name" placeholder="Full Name" formData={formData} handleChange={handleChange} errors={errors} />
//                 <InputField name="email" placeholder="Email Address" type="email" formData={formData} handleChange={handleChange} errors={errors} />
//               </div>
//               <div className="grid grid-cols-2 gap-6">
//                 <InputField name="phone" placeholder="Phone" type="tel" formData={formData} handleChange={handleChange} errors={errors} />
//                 <InputField name="subject" placeholder="Subject" formData={formData} handleChange={handleChange} errors={errors} />
//               </div>
//               <textarea
//                 name="message"
//                 placeholder="Your message..."
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-500 outline-none"
//               />
              
//               {/* API Status Messages */}
//               {success && <div className="text-green-600 font-bold text-sm">{success}</div>}
//               {error && <div className="text-red-600 font-bold text-sm">{error}</div>}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-500 transition-all disabled:opacity-50"
//               >
//                 {loading ? "Processing..." : "Send Message"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <MapSection />
//     </>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MapSection from "../components/MapSection";
import { createContact } from "../features/contact/contactThunk";

const InputField = ({ name, placeholder, type = "text", formData, handleChange, errors }) => (
  <div className="w-full space-y-1">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={formData[name]}
      onChange={handleChange}
      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50/50 border-2 border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:border-orange-500 focus:bg-white transition-all font-semibold text-sm sm:text-base"
    />
    {errors[name] && (
      <p className="text-[10px] font-bold text-red-500 uppercase">{errors[name]}</p>
    )}
  </div>
);

const Contact = () => {
  const dispatch = useDispatch();
  // Access state from your Redux store
  const { loading, error } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone";
    }
    if (!formData.subject.trim()) newErrors.subject = "Required";
    if (!formData.message.trim()) newErrors.message = "Required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset local success state
    setSuccess("");
    
    // Dispatch the thunk
    const result = await dispatch(createContact(formData));

    if (createContact.fulfilled.match(result)) {
      setSuccess("Message dispatched successfully! 🚚");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } else if (createContact.rejected.match(result)) {
      // Logic to handle the API error format
      const apiErrorMessage = result.payload?.message || result.error?.message || "Something went wrong";
      
      // If the API message contains specific field errors, try to map them
      if (apiErrorMessage.includes("message:")) {
        setErrors({ message: apiErrorMessage.split("message:")[1].trim() });
      } else {
        setErrors({ api: apiErrorMessage });
      }
    }
  };

  return (
    <>
      <div className="bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%]  bg-orange-100/50 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl w-full bg-white/70 backdrop-blur-xl border border-white rounded-[3rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT PANEL */}
          <div className="lg:col-span-5 bg-slate-900 p-16 text-white flex flex-col justify-between">
            <div className="space-y-10">
              <h1 className="text-5xl font-black leading-tight">
                LET'S <br /> <span className="text-orange-500 italic">CONNECT</span>
              </h1>
              <div className="space-y-6">
                <p className="text-sm font-semibold">+91 7014980454</p>
                <p className="text-sm font-semibold">hr.aden@adenlogistics.co.in</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7 p-8 md:p-16">
            {/* Changed class from space-y-8 to space-y-6 for consistent spacing */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Removed grid layout, fields are now vertical */}
              <InputField name="name" placeholder="Full Name" formData={formData} handleChange={handleChange} errors={errors} />
              <InputField name="email" placeholder="Email Address" type="email" formData={formData} handleChange={handleChange} errors={errors} />
              <InputField name="phone" placeholder="Phone" type="tel" formData={formData} handleChange={handleChange} errors={errors} />
              <InputField name="subject" placeholder="Subject" formData={formData} handleChange={handleChange} errors={errors} />
              
              <textarea
                name="message"
                placeholder="Your message..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-orange-500 outline-none"
              />
              
              {/* API Status Messages */}
              {success && <div className="text-green-600 font-bold text-sm">{success}</div>}
              {error && <div className="text-red-600 font-bold text-sm">{error}</div>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-500 transition-all disabled:opacity-50"
              >
                {loading ? "Processing..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <MapSection />
    </>
  );
};

export default Contact;