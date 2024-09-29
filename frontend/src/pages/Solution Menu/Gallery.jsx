
import g1 from '../../images/gallery/1.jpg'
import g2 from '../../images/gallery/2.jpg'
import g3 from '../../images/gallery/3.jpg'
import g4 from '../../images/gallery/4.jpg'
import g5 from '../../images/gallery/5.jpg'
import g6 from '../../images/gallery/6.jpg'
import g7 from '../../images/gallery/7.jpg'
import g8 from '../../images/gallery/8.jpg'
import g9 from '../../images/gallery/9.jpg'
import g10 from '../../images/gallery/10.jpg'
import g11 from '../../images/gallery/11.jpg'
import g12 from '../../images/gallery/12.jpg'
import g13 from '../../images/gallery/13.jpg'

import g16 from '../../images/gallery/16.jpeg'
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalleryItem from './GalleryItem';

gsap.registerPlugin(ScrollTrigger);

const galleryData = [
  { id: 1,  imageUrl: g1,},
  { id: 2,  imageUrl: g2,},
  { id: 3,  imageUrl: g3,},
  { id: 4,  imageUrl: g4,},
  { id: 5,  imageUrl: g5,},
  { id: 6,  imageUrl: g6,},
  { id: 7,  imageUrl: g7,},
  { id: 8,  imageUrl: g8,},
  { id: 9,  imageUrl: g9,},
  { id: 10,  imageUrl: g10,},
  { id: 11,  imageUrl: g11,},
  { id: 12,  imageUrl: g12,},
  { id: 13,  imageUrl: g13,},
  
 
];

function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (gallery) {
      gsap.fromTo(
        gallery.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gallery,
            start: "top bottom-=100",
            end: "bottom top+=100",
            scrub: 1,
          },
        }
      );
    }
  }, []);
  return (
   <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Conferences and Publications</h2>
        <motion.div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryData.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Gallery