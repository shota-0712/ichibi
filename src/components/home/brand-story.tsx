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
          <h2 className="text-3xl font-bold mb-8">いち美のこだわり</h2>
          <div className="prose max-w-none text-lg text-gray-700">
            <p className="mb-6">
              2025年5月、君津の地に新たに誕生する「いち美」。
              手打ちそばと創作料理の技を磨いてきたシェフが、
              房総の豊かな食材を活かした料理の数々をお届けいたします。
            </p>
            <p className="mb-6">
              地元の契約農家から直接仕入れる新鮮な野菜、
              近海で獲れる旬の魚介類。
              四季折々の食材を活かした料理でおもてなしいたします。
            </p>
            <p>
              宿泊のお客様には、静かな田園風景に囲まれた
              くつろぎの空間で、心安らぐひとときをお過ごしいただけます。
            </p>
          </div>
          <div className="mt-12">
            <Link 
              to="/dining-philosophy" 
              className="inline-flex items-center gap-2 text-japanese-red hover:text-red-900 transition"
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