// import React, { useEffect, useState } from "react";

// const images = [
//   "/1.png",
//   "/2.png",
//   "/3.png"
// ];

// export default function HeroSlider() {
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextSlide = () => {
//     setCurrentImage((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentImage((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative overflow-hidden">
//       {/* SLIDER TRACK */}
//       <div
//         className="flex h-full transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${currentImage * 100}%)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="min-w-full h-full">
//             <img
//               src={image}
//               alt={`Hero slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* BOTTOM FADE */}
//       <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-[4px]" />

//     </section>
//   );
// }

// import React, { useEffect, useState, useRef } from "react";

// const originalImages = [
//   "/1.png",
//   "/2.png",
//   "/3.png"
// ];

// // Continuous loop ke liye first slide ko end me duplicate karte hain
// const images = [...originalImages, originalImages[0]];

// export default function HeroSlider() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);

//   const nextSlide = () => {
//     setCurrentImage((prev) => prev + 1);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Duplicate slide tak pahunchne ke baad quietly reset karna
//   const handleTransitionEnd = () => {
//     if (currentImage === images.length - 1) {
//       setIsTransitioning(false); // Transition off karein (no animation)
//       setCurrentImage(0); // Instantly 1st slide par le aayein
//     }
//   };

//   // Switch animation back on after instant reset
//   useEffect(() => {
//     if (currentImage === 0 && !isTransitioning) {
//       // Small delay to ensure state update completes before re-enabling transition
//       const timer = setTimeout(() => {
//         setIsTransitioning(true);
//       }, 50);
//       return () => clearTimeout(timer);
//     }
//   }, [currentImage, isTransitioning]);

//   return (
//     <section className="relative overflow-hidden w-fit lg:w-full lg:h-[90vh] h-[30vh]">
//       {/* SLIDER TRACK */}
//       <div
//         className={`flex h-full ${
//           isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
//         }`}
//         style={{
//           transform: `translateX(-${currentImage * 100}%)`,
//         }}
//         onTransitionEnd={handleTransitionEnd}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="min-w-full h-full flex-shrink-0">
//             <img
//               src={image}
//               alt={`Hero slide ${(index % originalImages.length) + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/10 pointer-events-none" />

//       {/* BOTTOM FADE */}
//       <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-[4px] pointer-events-none" />
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";

const originalImages = [
  "/1.png",
  "/2.png",
  "/3.png"
];

const images = [...originalImages, originalImages[0]];

export default function HeroSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    setCurrentImage((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (currentImage === images.length - 1) {
      setIsTransitioning(false);
      setCurrentImage(0);
    }
  };

  useEffect(() => {
    if (currentImage === 0 && !isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentImage, isTransitioning]);

  return (
    /* 
      Fix 1: `max-w-full` aur `box-border` ensure karta hai ki section mobile view me border/padding ki wajah se stretch na ho
    */
    <section className="relative overflow-hidden w-full max-w-full h-[35vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] box-border">
      
      {/* SLIDER TRACK */}
      <div
        className={`flex h-full w-full ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          /* 
            Fix 2: Pixel-perfect shift ke liye -100% translation
          */
          transform: `translateX(-${currentImage * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          /* 
            Fix 3: `w-full min-w-full max-w-full flex-shrink-0`
            Isse har slide EXACT screen ki width ke barabar block ho jati hai.
          */
          <div 
            key={index} 
            className="w-full min-w-full max-w-full h-full flex-shrink-0 relative flex items-center justify-center bg-black/5"
          >
            <img
              src={image}
              alt={`Hero slide ${(index % originalImages.length) + 1}`}
              className="w-full h-full object-contain md:object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white via-white/70 to-transparent backdrop-blur-[4px] pointer-events-none" />
    </section>
  );
}