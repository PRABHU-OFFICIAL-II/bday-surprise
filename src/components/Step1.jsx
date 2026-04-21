import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Step1 = ({ onNext }) => {
    const [input, setInput] = useState("");
    const [isError, setIsError] = useState(false);
    const correctSecret = "mansi";

    const checkSecret = () => {
        if (input.toLowerCase().trim() === correctSecret) {
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
            className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-rose-200 text-center max-w-sm mx-auto"
        >
            <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Lock className={isError ? "text-red-500" : "text-rose-500"} size={28} />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-800 mb-2">
                Verification Required
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                To proceed, please enter the secret password <br />
                <span className="text-rose-400 italic">known only to us.</span>
            </p>

            <div className="relative mb-4">
                <input
                    type="password"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        if (isError) setIsError(false);
                    }}
                    className={`w-full p-4 bg-rose-50/50 border-2 rounded-2xl focus:outline-none text-center text-lg font-semibold text-slate-800 transition-all ${isError ? "border-red-400" : "border-rose-100 focus:border-rose-400"
                        }`}
                    placeholder="Enter Secret Code..."
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
                        sorry not correct 😒
                    </motion.p>
                )}
            </div>

            <button
                onClick={checkSecret}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
                Unlock the Journey
            </button>
        </motion.div>
    );
};

export default Step1;