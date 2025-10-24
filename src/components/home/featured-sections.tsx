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
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={item}>
              <div className="aspect-w-4 aspect-h-3 mb-6 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/image/ichigo_ichibi_set.webp"
                  alt="蕎麦と小鉢の膳"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-kanteiryuu mb-3">産地にこだわった手打ち蕎麦</h3>
              <p className="text-gray-600 mb-4 font-kanteiryuu">
                北海道、栃木、茨城など、時期により最良の産地を選び抜いた蕎麦粉を使用。香り高い「十割蕎麦」と、江戸前の喉越しを堪能できる「二八蕎麦」の二種類を、毎日手打ちでご提供します。昔ながらの製法で仕込むかえしに、鰹節とサバ節を効かせた風味豊かな自家製つゆも自慢です。
              </p>
            </motion.div>

            <motion.div variants={item}>
              <div className="aspect-w-4 aspect-h-3 mb-6 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/image/chikin_nanban.webp"
                  alt="チキン南蛮と副菜"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-kanteiryuu mb-3">定食で味わう季節の一品</h3>
              <p className="text-gray-600 mb-4 font-kanteiryuu">
                季節の食材や人気の定番料理を、副菜や小鉢とともに定食スタイルでご用意。ボリュームと栄養のバランスにこだわり、ランチでも夜でもお楽しみいただけます。
              </p>
            </motion.div>
            <motion.div variants={item}>
              <div className="aspect-w-4 aspect-h-3 mb-6 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/image/tenjuu.webp"
                  alt="天重"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-kanteiryuu mb-3">職人技が光る天ぷら</h3>
              <p className="text-gray-600 mb-4 font-kanteiryuu">
                揚げる技術以上に重要とされるのが、丁寧な下処理。食材の魅力を最大限に引き出すための仕込みを施し、薄い衣をまとわせてサクッと揚げます。熱々の天ぷらからフワッと立ちのぼる、食材そのものの香りをお楽しみください。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
