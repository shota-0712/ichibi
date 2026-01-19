import { motion } from 'framer-motion';
import { PhilosophyLayout } from './PhilosophyLayout';

export function Vision() {
    return (
        <PhilosophyLayout
            heroImage="/image/ichigo_ichibi_set.webp"
            heroAlt="一期一美が目指すもの"
            title="一期一美が目指すもの"
            subtitle="— 想い出される店 —"
            prevPage={{ path: "/dining-philosophy/soba-types", label: "十割蕎麦と二八蕎麦" }}
            nextPage={{ path: "/dining-philosophy/space", label: "空間と過ごし方" }}
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
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-center"
                            >
                                <p className="text-xl md:text-2xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                    一期一美が目指しているのは、
                                </p>
                                <p className="text-2xl md:text-3xl text-[#2a2a2a] font-kanteiryuu leading-loose tracking-wide mt-4 border-l-4 border-japanese-gold pl-6 text-left">
                                    「蕎麦を食べるなら、一期一美に行きたい」<br />
                                    と思い出してもらえる店であること。
                                </p>
                            </motion.div>

                            {/* Divider */}
                            <div className="flex justify-center py-4">
                                <div className="w-16 h-[1px] bg-[#c9a96e]" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-[#2a2a2a] rounded-lg p-8 md:p-12 text-center"
                            >
                                <p className="text-lg md:text-xl text-white/90 font-kanteiryuu leading-loose tracking-wide">
                                    そして、<br />
                                    十割蕎麦が特別な存在ではなく、<br />
                                    <span className="text-japanese-gold">もっと身近な選択肢</span>になることに<br />
                                    少しでも貢献できたらと考えています。
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-center pt-8"
                            >
                                <h3 className="font-kanteiryuu text-3xl md:text-4xl text-[#2a2a2a] tracking-wider">
                                    君津の地から、<br />
                                    本当に美味しい十割蕎麦を。
                                </h3>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PhilosophyLayout>
    );
}

export default Vision;
