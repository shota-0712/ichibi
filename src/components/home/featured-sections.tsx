import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function FeaturedSections() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">こだわりの料理</h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={item}>
              <div className="aspect-w-4 aspect-h-3 mb-6 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/DmCpYJ1/soba.webp?auto=format&fit=crop&w=800&h=600&q=75"
                  alt="手打ちそば" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                  srcSet="
                    https://i.ibb.co/DmCpYJ1/soba.webp?auto=format&fit=crop&w=400&h=300&q=75 400w,
                    https://i.ibb.co/DmCpYJ1/soba.webp?auto=format&fit=crop&w=800&h=600&q=75 800w,
                    https://i.ibb.co/DmCpYJ1/soba.webp?auto=format&fit=crop&w=1200&h=900&q=75 1200w
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">厳選した国産のそば粉</h3>
              <p className="text-gray-600 mb-4">
                厳選した国産のそば粉を店内で手打する香り高い十割そば。のど越しの良さを追求しています。
              </p>
            </motion.div>

            <motion.div variants={item}>
              <div className="aspect-w-4 aspect-h-3 mb-6 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://i.ibb.co/ycFvZqrF/unagi.webp?auto=format&fit=crop&w=800&h=600&q=75"
                  alt="うなぎ" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                  srcSet="
                    https://i.ibb.co/ycFvZqrF/unagi.webp?auto=format&fit=crop&w=400&h=300&q=75 400w,
                    https://i.ibb.co/ycFvZqrF/unagi.webp?auto=format&fit=crop&w=800&h=600&q=75 800w,
                    https://i.ibb.co/ycFvZqrF/unagi.webp?auto=format&fit=crop&w=1200&h=900&q=75 1200w
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">秘伝のたれ</h3>
              <p className="text-gray-600 mb-4">
                先代から受け継いだ40年の歴史を持つ秘伝のたれ。
                国産うなぎを丁寧に焼き上げた
                うな重は、当店の看板メニューの一つです。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}