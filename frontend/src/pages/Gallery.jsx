import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { url: '/assets/gallary1.jpeg', title: 'School Event' },
    { url: '/assets/gallary2.jpeg', title: 'Campus Life' },
    { url: '/assets/gallary3.jpeg', title: 'Academic Excellence' },
    { url: '/assets/gallary4.jpeg', title: 'Sports Highlights' },
    { url: '/assets/gallary5.jpeg', title: 'Creative Arts' },
    { url: '/assets/gallary6.jpeg', title: 'Science Fair' },
    { url: '/assets/gallary7.jpeg', title: 'Annual Celebration' },
    { url: '/assets/gallary8.jpeg', title: 'Morning Assembly' },
    { url: '/assets/gallary9.jpeg', title: 'Cultural Program' },
    { url: '/assets/gallary10.jpeg', title: 'Student Workshop' },
    { url: '/assets/gallary11.jpeg', title: 'Achievement Award' },
    { url: '/assets/gallary12.jpeg', title: 'Interactive Learning' },
    { url: '/assets/gallary13.jpeg', title: 'Infrastructure' },
    { url: '/assets/gallary14.jpeg', title: 'Lab Session' },
    { url: '/assets/gallary15.jpeg', title: 'Group Photo' },
  ];

  return (
    <div className="gallery-page">
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 text-white text-center">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md-text-5xl font-bold"
          >
            Our Gallery
          </motion.h1>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          <p className="mt-6 opacity-80 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold text-accent">Moments that matter at BIPS</p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                onClick={() => setSelectedImage(img)}
                className="group relative overflow-hidden rounded-3xl shadow-xl h-72 cursor-pointer bg-bg-light"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
                  <ZoomIn className="text-white mb-3" size={32} />
                  <h3 className="text-white text-lg font-bold text-center tracking-tight">{img.title}</h3>
                  <div className="w-10 h-0.5 bg-secondary mt-3"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md-p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-8 right-8 text-white hover:text-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={40} />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border-4 border-white/10"
              />
              <div className="mt-8 text-center">
                <h2 className="text-white text-2xl md-text-3xl font-bold mb-2">{selectedImage.title}</h2>
                <div className="w-16 h-1 bg-secondary mx-auto"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
