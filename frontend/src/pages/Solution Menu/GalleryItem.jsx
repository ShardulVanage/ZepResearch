import React from 'react';
import { motion } from 'framer-motion';

function GalleryItem({ item }) {
  return (
    <motion.div
      className="overflow-hidden rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={item.imageUrl} 
          alt={item.alt} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </motion.div>
  );
}

export default GalleryItem;