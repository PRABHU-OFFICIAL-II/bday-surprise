import React from 'react';
import { motion } from 'framer-motion';

const Step3 = ({ onNext }) => {
    const memories = [
        {
            title: "The First Date",
            text: "I was so nervous, but your smile made it easy.",
            color: "bg-blue-50",
            image: "src/assets/Image_1.jpg"
        },
        {
            title: "Our Road Trip",
            text: "The wind, the bike, and you. Perfect.",
            color: "bg-rose-50",
            image: "src/assets/Image_2.jpg"
        },
        {
            title: "That One Night",
            text: "When we laughed until our stomachs hurt.",
            color: "bg-amber-50",
            image: "src/assets/Image_3.jpg"
        },
    ];

    return (
        <div className="text-center max-w-2xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 italic tracking-tight">
                Some small reminders...
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {memories.map((m, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }} // Lift up on hover instead of rotating
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        /* Using a clean white border with a soft shadow for an elegant look */
                        className="bg-white p-3 pb-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100"
                    >
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                            <img
                                src={m.image}
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        <h3 className="font-bold text-slate-800 text-sm mb-1 tracking-tight">
                            {m.title}
                        </h3>
                        <p className="text-slate-400 text-[11px] font-medium leading-relaxed">
                            {m.text}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="px-8 py-4 bg-rose-500 text-white rounded-2xl font-black text-lg shadow-lg shadow-rose-200 hover:bg-rose-600 transition-all"
            >
                I have one more thing to ask...
            </motion.button>
        </div>
    );
};

export default Step3;