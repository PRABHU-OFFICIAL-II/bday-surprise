// src/App.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Step0 from './components/Step0';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import FinalChoice from './components/FinalChoice';
import Celebration from './components/Celebration';

function App() {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep((prev) => prev + 1);

  const steps = [
    <Step0 onNext={nextStep} />,
    <Step1 onNext={nextStep} />,
    <Step2 onNext={nextStep} />,
    <Step3 onNext={nextStep} />,
    <FinalChoice onNext={nextStep} />,
    <Celebration />
  ];

  return (
    /* Use min-h-[100dvh] for mobile browsers to account for address bars */
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-gradient-to-br from-rose-100 to-teal-50 p-4 md:p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          /* Ensure the motion div doesn't restrict the width */
          className="w-full max-w-md flex justify-center"
        >
          {steps[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;