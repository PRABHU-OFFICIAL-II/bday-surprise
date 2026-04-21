import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift } from 'lucide-react';

const Celebration = () => {
  const [showRealSurprise, setShowRealSurprise] = useState(false);

  useEffect(() => {
    const end = Date.now() + 3 * 1000;
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff0055', '#fb7185'] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff0055', '#fb7185'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  }, []);

  return (
    <div className="w-full max-w-md mx-auto px-4"> 
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center bg-white/90 backdrop-blur-xl p-6 md:p-10 rounded-[2rem] shadow-xl border border-rose-100 relative"
      >
        <h1 className="text-3xl md:text-4xl font-black text-rose-600 mb-4 tracking-tight">
          HBD MANSI! 🎂
        </h1>

        <div className="space-y-4 text-sm md:text-base text-slate-600 font-medium leading-relaxed">
          <p>"You are the most beautiful part of my life—my home and my greatest adventure."</p>
          <p>"Every moment with you, from the long rides to the quiet ones, is a memory I treasure."</p>
        </div>

        <div className="mt-8 pt-6 border-t border-rose-50">
          <p className="text-rose-500 font-bold text-xl md:text-2xl italic mb-6">
            Always & Forever, Prabhu ❤️
          </p>

          <AnimatePresence mode="wait">
            {!showRealSurprise ? (
              <motion.button
                key="btn"
                whileTap={{ scale: 0.95 }}
                onClick={() => { setShowRealSurprise(true); confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); }}
                className="w-full flex items-center justify-center gap-2 py-4 bg-rose-500 text-white rounded-xl font-bold text-base shadow-lg shadow-rose-100 hover:bg-rose-600 transition-all"
              >
                <Gift size={18} />
                <span>Tap for a surprise 🎁</span>
              </motion.button>
            ) : (
              <motion.div
                key="reveal"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-rose-50/50 rounded-xl border border-dashed border-rose-200"
              >
                <p className="text-slate-800 font-bold">Come back to BLR fast... I need a hug! 🥹</p>
                <p className="text-rose-400 text-xs mt-1">I love you more than words can say.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      
      <p className="text-center mt-4 text-rose-300 text-[10px] font-mono uppercase tracking-widest opacity-60">
        built_with_pyaar_from_litu.js
      </p>
    </div>
  );
};

export default Celebration;