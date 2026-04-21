import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Step2 = ({ onNext }) => {
  const [val, setVal] = useState("");
  const [isError, setIsError] = useState(false);
  
  const question = "Where was the first place we traveled together (Only You and Me)?";

  const handleCheck = () => {
    const userInput = val.toLowerCase().trim();
    
    // This logic checks if the input contains 'hampi' OR 'badami'
    // It will pass for "Hampi", "Badami", "Hampi & Badami", or "hampi and badami"
    if (userInput.includes("hampi") || userInput.includes("badami")) {
      onNext();
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 500);
    }
  };

  return (
    <motion.div 
      animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.4 }}
      className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-teal-100 text-center max-w-sm mx-auto"
    >
      <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
        <MapPin className={isError ? "text-red-500" : "text-teal-500"} size={28} />
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-6 italic">
        Testing your memory...
      </h2>
      
      <p className="text-slate-700 mb-8 text-lg font-medium leading-relaxed">
        {question}
      </p>
      
      <div className="relative mb-4">
        <input 
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
            if (isError) setIsError(false);
          }}
          className={`w-full p-4 bg-teal-50/30 border-2 rounded-2xl focus:outline-none text-center text-lg font-semibold text-slate-800 transition-all ${
            isError ? "border-red-400" : "border-teal-100 focus:border-teal-400"
          }`}
          placeholder="Type your answer..."
        />
      </div>

      {/* Playful Error Message */}
      <div className="h-6 mb-2"> 
        {isError && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 font-bold text-sm"
          >
            Wrong! Think harder... 😒
          </motion.p>
        )}
      </div>
      
      <button 
        onClick={handleCheck}
        className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        Submit Answer
      </button>
    </motion.div>
  );
};

export default Step2;