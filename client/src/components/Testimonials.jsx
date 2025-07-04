import React from 'react';
import { motion } from 'framer-motion';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center my-24 px-4 py-12"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">What Our Users Say</h2>
      <p className="text-gray-500 text-base mb-12 text-center max-w-xl">
        Hear directly from creators and professionals using Imagify to bring their ideas to life.
      </p>

      {/* Testimonials Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white/40 backdrop-blur border border-gray-200 rounded-xl p-8 shadow-lg hover:scale-[1.02] transition-transform duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <h3 className="text-lg font-semibold text-neutral-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>

              <div className="flex mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <img key={i} src={assets.rating_star} alt="star" className="w-4 h-4" />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">{testimonial.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
