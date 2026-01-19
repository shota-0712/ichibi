import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function BrandStory() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-kanteiryuu mb-6 text-[#2a2a2a]">
            一期一美のこだわり
          </h2>

          <p className="text-lg text-gray-700 font-kanteiryuu mb-8 leading-relaxed">
            君津の地で、様々なジャンルで技を磨いたシェフが<br className="hidden md:block" />
            一品一品心を込めてお作りするお料理でおもてなしいたします。
          </p>

          {/* 詳細ページへの導線 */}
          <Link
            to="/dining-philosophy"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B315E] text-white font-kanteiryuu text-lg rounded-full hover:bg-[#2a4275] transition-all duration-300 group"
          >
            <span>料理へのこだわりを見る</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
