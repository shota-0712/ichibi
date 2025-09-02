import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function BrandStory() {
  return (
    <div className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
                      <h2 className="text-3xl font-kanteiryuu mb-8">一期一美のこだわり</h2>
          <div className="prose max-w-none text-lg text-gray-700 font-kanteiryuu">
            <p className="mb-6">
              2025年10月13日、君津の地にグランドオープンする「一期一美」。10月1日からプレオープンを予定しています。
              様々なジャンルで技を磨いたシェフが、一品一品心を込めてお作りするお料理でおもてなしいたします。
            </p>
          </div>
          <div className="mt-12">
            <Link 
              to="/dining-philosophy" 
              className="inline-flex items-center gap-2 text-japanese-red hover:text-red-900 transition font-kanteiryuu"
              aria-label="料理へのこだわりを詳しく見る"
            >
              <span>料理へのこだわりを詳しく見る</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}