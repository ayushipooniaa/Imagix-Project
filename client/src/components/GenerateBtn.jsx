import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    user ? navigate('/result') : setShowLogin(true);
  };

  return (
    <motion.div
      className="text-center py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* CTA Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 mb-10">
        Try it yourself. Let the AI do the magic.
      </h2>

      {/* Generate Button */}
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 bg-black text-white px-10 py-3 rounded-full text-base sm:text-lg hover:scale-105 transition-transform duration-300 shadow-md"
      >
        Generate Image
        <img src={assets.star_group} alt="star icon" className="w-6 h-6" />
      </button>
    </motion.div>
  );
};

export default GenerateBtn;
