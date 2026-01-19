import { motion } from 'framer-motion';
import { PhilosophyLayout } from './PhilosophyLayout';

export function DailyCraft() {
    return (
        <PhilosophyLayout
            heroImage="/image/teuchi_tekiri.png"
            heroAlt="日々の蕎麦打ち"
            title="日々の蕎麦打ち"
            subtitle="— 積み重ねの技 —"
            prevPage={{ path: "/dining-philosophy/tsuyu", label: "そばつゆについて" }}
            nextPage={{ path: "/dining-philosophy/health", label: "健康と美味しさ" }}
        >
            {/* Main Content */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <p className="text-xl md:text-2xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                蕎麦打ちは、<br />
                                毎日同じ条件ではできません。
                            </p>
                        </div>

                        {/* Variables Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
                        >
                            {["湿度", "温度", "粉の状態", "水回し", "延ばし", "切り"].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-4 shadow-lg text-center"
                                >
                                    <span className="font-kanteiryuu text-lg text-[#2a2a2a]">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                その日の蕎麦の様子を見ながら、<br />
                                一つひとつ調整しています。
                            </p>
                        </motion.div>

                        {/* Divider */}
                        <div className="flex justify-center py-4">
                            <div className="w-16 h-[1px] bg-[#c9a96e]" />
                        </div>

                        {/* Philosophy */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#2a2a2a]/5 p-8 md:p-12 rounded-lg border-l-4 border-japanese-gold text-center space-y-8"
                        >
                            <p className="text-lg md:text-xl text-[#2a2a2a] font-kanteiryuu leading-loose tracking-wide">
                                一期一美では、現状に満足することなく、<br />
                                <span className="text-japanese-red font-bold">より良い蕎麦を打つための工夫と改善</span>を<br />
                                日々重ねています。
                            </p>
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                お客さんの反応を大切に受け取り、<br />
                                次の一杯に生かしていく。<br />
                                <br />
                                その積み重ねを、何よりも大切にしています。
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </PhilosophyLayout>
    );
}

export default DailyCraft;
