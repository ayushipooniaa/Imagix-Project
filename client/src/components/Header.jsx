import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = () => {
    user ? navigate('/result') : setShowLogin(true);
  };

  return (
    <motion.header
      className="flex flex-col items-center text-center pt-24 pb-16 px-6"
      initial={{ opacity: 0.2, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Badge */}
      <motion.div
        className="bg-white text-blue-600 font-medium text-sm inline-flex items-center gap-2 px-5 py-1 border border-blue-200 rounded-full shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p>Top-rated AI Image Generator</p>
        <img src={assets.star_icon} alt="Star Icon" className="w-4 h-4" />
      </motion.div>

      {/* Main Title */}
      <motion.h1
        className="mt-10 text-4xl sm:text-6xl font-bold leading-tight max-w-3xl text-neutral-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
      >
        Instantly turn your <span className="text-blue-600">text</span> into <span className="text-blue-600">art</span> with AI.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Describe what you want and let AI convert it into stunning images — fast, easy, and magical.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={handleClick}
        className="mt-8 bg-black text-white px-10 py-3 text-sm sm:text-base rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Generate Image
        <img src={assets.star_group} alt="star" className="h-6" />
      </motion.button>

      {/* Sample Images Row */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6).fill('').map((_, index) => (
          <motion.img
            key={index}
            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
            alt="Sample"
            width={70}
            className="rounded hover:scale-105 transition duration-300 cursor-pointer max-sm:w-10"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </motion.div>

      {/* Footer Text */}
      <motion.p
        className="mt-4 text-neutral-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Made with 💡 using <strong>Imagify</strong>
      </motion.p>
    </motion.header>
  );
};

export default Header;
