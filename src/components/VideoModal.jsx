import React from "react";
import { FaTimes } from "react-icons/fa";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
      {/* Backdrop (Background Blur) */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 scale-up-animation">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all duration-300 z-20"
        >
          <FaTimes size={18} />
        </button>

        {/* Video Element */}
        <video 
          src={videoSrc} 
          controls 
          autoPlay 
          className="w-full h-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Simple Inline CSS for Animation */}
      <style>{`
        .scale-up-animation {
          animation: scaleUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }
        @keyframes scaleUp {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default VideoModal;