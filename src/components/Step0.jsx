import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Step0 = ({ onNext }) => {
  return (
    <div className="text-center bg-white/95 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl border-2 border-rose-100 max-w-sm mx-auto">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex justify-center mb-8"
      >
        <div className="relative">
           <Heart size={80} className="text-rose-500 fill-rose-500" />
           {/* Decorative smaller heart */}
           <Heart size={24} className="text-pink-400 fill-pink-400 absolute -top-2 -right-4 rotate-12" />
        </div>
      </motion.div>

      {/* Header - Forced Dark Color */}
      <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
        Hey Mansu! <span className="text-rose-500">❤️</span>
      </h1>

      <p className="text-slate-700 text-lg mb-10 leading-relaxed font-medium italic">
        "Since today is a special day, I built something special just for you."
      </p>

      <button
        onClick={onNext}
        className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-rose-200 hover:shadow-rose-400 hover:scale-[1.03] transition-all active:scale-95"
      >
        Click to Start
      </button>
    </div>
  );
};

export default Step0;