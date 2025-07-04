import React from 'react';
import { motion } from 'framer-motion';
import { stepsData } from '../assets/assets';

const Steps = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center my-32 px-4"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Section Header */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">How It Works</h2>
      <p className="text-gray-600 text-base sm:text-lg mb-10 text-center">
        Turn simple prompts into AI-crafted visuals in just a few clicks.
      </p>

      {/* Steps List */}
      <div className="w-full max-w-3xl space-y-6">
        {stepsData.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-5 bg-white/30 backdrop-blur border border-gray-200 rounded-xl shadow hover:scale-[1.02] transition-transform"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={step.icon}
              alt={step.title}
              width={40}
              className="shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold mb-1 text-neutral-800">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Steps;
