// src/components/FinalChoice.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FinalChoice = ({ onNext }) => {
  const [dodgeCount, setDodgeCount] = useState(0);

  const options = [
    { label: "💎 A Diamond Ring", correct: false },
    { label: "🏎️ A Luxury Car", correct: false },
    { label: "👧 The Girl in Front of the Screen", correct: true },
    { label: "🏖️ A Maldives Trip", correct: false },
  ];

  const handleIncorrect = () => {
    setDodgeCount(prev => prev + 1);
    alert("Nice try! But that's not the most valuable thing in my life.");
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-rose-600 mb-8">One Final Question...</h2>
      <p className="text-lg text-gray-700 mb-10">Out of all these, what is the most precious thing to me?</p>
      
      <div className="grid grid-cols-1 gap-4">
        {options.map((opt, idx) => (
          <motion.button
            key={idx}
            whileHover={opt.correct ? { scale: 1.05 } : { x: [0, -10, 10, -10, 0] }}
            onClick={opt.correct ? onNext : handleIncorrect}
            className={`p-4 rounded-2xl font-bold shadow-md transition-all ${
              opt.correct 
                ? "bg-rose-500 text-white text-xl" 
                : "bg-white text-gray-800 border-2 border-rose-100"
            }`}
          >
            {opt.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FinalChoice;