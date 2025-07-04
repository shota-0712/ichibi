import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, Bed, Leaf, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export function AccommodationSection() {
  return (
    <div className="bg-stone-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            宿泊のご案内
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Fish className="h-6 w-6 text-blue-800" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">釣り客様向けプラン</h3>
                  <p className="text-gray-600">早朝出発に対応</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">
                  早朝4時からチェックアウト可能。
                  朝食おにぎりをご用意いたします。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" aria-hidden="true" />
                    <span>素泊まり ¥2,800～</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" aria-hidden="true" />
                    <span>朝食おにぎり付き ¥3,300～</span>
                  </li>
                </ul>
              </div>
              <Button asChild variant="outline" className="text-japanese-indigo hover:text-japanese-indigo/90">
                <Link to="/ryokan" className="flex items-center gap-2" aria-label="釣り客様向けプランの詳細を見る">
                  <span>詳しく見る</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-50 p-3 rounded-full">
                  <Bed className="h-6 w-6 text-green-800" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">一般宿泊プラン</h3>
                  <p className="text-gray-600">ゆっくりとお寛ぎください</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">
                  静かな環境で心安らぐひとときを。
                  夕食は当店の創作料理をお楽しみください。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" aria-hidden="true" />
                    <span>素泊まり ¥2,800～</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" aria-hidden="true" />
                    <span>朝食付き ¥3,800～</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" aria-hidden="true" />
                    <span>2食付き ¥7,700～</span>
                  </li>
                </ul>
              </div>
              <Button asChild variant="outline" className="text-japanese-indigo hover:text-japanese-indigo/90">
                <Link to="/ryokan" className="flex items-center gap-2" aria-label="一般宿泊プランの詳細を見る">
                  <span>詳しく見る</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}