import React from 'react';
import { motion } from 'framer-motion';

// Imports aligned with your actual asset folder structure
import image1 from '../assets/Image_1.jpg';
import image2 from '../assets/Image_2.jpg';
import image3 from '../assets/Image_3.jpg';

const Step3 = ({ onNext }) => {
  const memories = [
    { 
      title: "The First Date", 
      text: "I was so nervous, but your smile made it easy.", 
      img: image1 
    },
    { 
      title: "Our First Trip", 
      text: "Our first trip together, I know I made you little uncomfortable but ignore please 😅.", 
      img: image2 
    },
    { 
      title: "That One Night", 
      text: "The night I'll never forget because you are still looking cute and dancing in my eyes.", 
      img: image3 
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 bg-[#fff0f3]">
      
      {/* 1. Header with subtle red glow */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black text-rose-600 mb-16 md:mb-24 italic text-center drop-shadow-sm"
      >
        Some small reminders...
      </motion.h2>
      
      {/* 2. Widened Horizontal Gallery 
          - max-w-7xl ensures it spreads out on desktop
          - grid-cols-3 keeps them side-by-side
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full max-w-7xl mb-24">
        {memories.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -15, scale: 1.02 }}
            /* Glassmorphism Design: Ultra-wide look with soft red shadows */
            className="group bg-white/60 backdrop-blur-xl p-5 pb-10 rounded-[3rem] shadow-[0_20px_50px_rgba(255,100,100,0.15)] border border-white/80 flex flex-col items-center transition-all duration-500"
          >
            {/* WIDER IMAGE CONTAINER: aspect-[4/3] instead of vertical pillars */}
            <div className="w-full aspect-[4/3] overflow-hidden rounded-[2.5rem] mb-8 shadow-inner border-[6px] border-white">
              <img 
                src={m.img} 
                alt={m.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
            
            <h3 className="font-black text-slate-800 text-xl md:text-2xl mb-4 uppercase tracking-tighter">
              {m.title}
            </h3>
            
            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed text-center px-4 italic">
              "{m.text}"
            </p>
          </motion.div>
        ))}
      </div>

      {/* 3. High-End Floating Button */}
      <motion.button 
        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(225, 29, 72, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-16 py-6 bg-rose-500 text-white rounded-[2rem] font-black text-2xl shadow-xl shadow-rose-200 hover:bg-rose-600 transition-all"
      >
        I have one more thing to ask...
      </motion.button>
    </div>
  );
};

export default Step3;