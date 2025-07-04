import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <motion.section
      className="my-28 px-4 sm:px-12 md:px-28 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-2">
        Generate Stunning AI Images
      </h2>
      <p className="text-gray-500 mb-12 max-w-2xl">
        Transform your imagination into visuals with powerful AI — no design experience required.
      </p>

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        {/* Image */}
        <motion.img
          src={assets.sample_img_1}
          alt="AI Sample"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-xl"
          whileHover={{ scale: 1.03 }}
        />

        {/* Description */}
        <div className="text-left max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Visualize Your Ideas with AI
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            With our text-to-image AI, you can turn your thoughts into rich visuals effortlessly. Whether it’s a concept, mockup, or fantasy, just type it out — and let AI do the rest.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Save hours of design work. Get creative with ease and produce artwork, designs, or content instantly using advanced generative models.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Description;

