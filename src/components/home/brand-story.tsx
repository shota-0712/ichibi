import React from 'react';
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
              2025年10月13日、君津の地にグランドオープンする「一期一美」。10月6日からプレオープンを予定しています。
              様々なジャンルで技を磨いたシェフが、一品一品心を込めてお作りするお料理でおもてなしいたします。
            </p>
          </div>
          {/* リクエストにより「料理へのこだわりを詳しく見る」リンクは削除 */}
        </motion.div>
      </div>
    </div>
  );
}
