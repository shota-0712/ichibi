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
                {/*
                  TODO: To optimize image loading, create resized versions of soba.webp.
                  For example: soba-400.webp (400px wide), soba-800.webp (800px wide), etc.
                  The browser will then choose the most appropriate image based on the user's screen size.
                */}
                <img 
                  src="/image/soba.webp"
                  alt="手打ちそば" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  srcSet="/image/soba-400.webp 400w, /image/soba-800.webp 800w, /image/soba-1200.webp 1200w"
                />
              </div>
              <h3 className="text-2xl font-kanteiryuu mb-3">厳選した国産のそば粉</h3>
              <p className="text-gray-600 mb-4 font-kanteiryuu">
                厳選した国産のそば粉を店内で手打する香り高い十割そば。のど越しの良さを追求しています。
              </p>
            </motion.div>

            <motion.div variants={item}>
              <div className="aspect-w-4 aspect-h-3 mb-6 rounded-lg shadow-lg overflow-hidden">
                {/*
                  TODO: To optimize image loading, create resized versions of yakitori.webp.
                  For example: yakitori-400.webp (400px wide), yakitori-800.webp (800px wide), etc.
                */}
                <img 
                  src="/image/yakitori.webp"
                  alt="焼き鳥" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  srcSet="/image/yakitori-400.webp 400w, /image/yakitori-800.webp 800w, /image/yakitori-1200.webp 1200w"
                />
              </div>
              <h3 className="text-2xl font-kanteiryuu mb-3">自慢の焼き鳥</h3>
              <p className="text-gray-600 mb-4 font-kanteiryuu">
                代々受け継がれる<strong>秘伝のたれ</strong>。
                厳選した国産鶏を一本一本丁寧に焼き上げる、
                当店ならではの味わいをお楽しみください。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}