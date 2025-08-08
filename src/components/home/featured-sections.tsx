import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
      delayChildren: 0
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } }
};

export function FeaturedSections() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-kanteiryuu text-center mb-12">こだわりの料理</h2>
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
                  src="/image/soba.webp"
                  alt="手打ちそば" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-kanteiryuu mb-3">厳選した国産のそば粉</h3>
              <p className="text-gray-600 mb-4 font-kanteiryuu">
                厳選した国産のそば粉を店内で手打する香り高い十割そば。のど越しの良さを追求しています。
              </p>
            </motion.div>

            <motion.div variants={item}>
              <div className="aspect-w-4 aspect-h-3 mb-6 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/image/yakitori.webp"
                  alt="焼き鳥" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-kanteiryuu mb-3">伝統の焼き鳥</h3>
              <p className="text-gray-600 mb-4 font-kanteiryuu">
                代々受け継がれる伝統の調理法で丁寧に焼き上げた焼き鳥。
                厳選した国産鶏を使用し、備長炭で香ばしく焼き上げた
                当店自慢の一品です。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}