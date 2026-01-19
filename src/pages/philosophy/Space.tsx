import { motion } from 'framer-motion';
import { PhilosophyLayout } from './PhilosophyLayout';

export function Space() {
    return (
        <PhilosophyLayout
            heroImage="/image/soba_ko.png"
            heroAlt="空間と過ごし方"
            title="空間と過ごし方"
            subtitle="— 無理のない距離感 —"
            prevPage={{ path: "/dining-philosophy/vision", label: "一期一美が目指すもの" }}
            nextPage={{ path: "/dining-philosophy/tsuyu", label: "そばつゆについて" }}
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
                                一期一美は、一人でも安心して入れる店で<br />
                                ありたいと考えています。
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {[
                                { text: "入りやすい佇まい" },
                                { text: "清潔感のある店内" },
                                { text: "心地よい室温と空気" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className="bg-white rounded-lg p-6 shadow-lg text-center"
                                >
                                    <p className="font-kanteiryuu text-lg text-[#2a2a2a]">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="flex justify-center py-8">
                            <div className="w-[1px] h-16 bg-[#c9a96e]" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-8"
                        >
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                会話を楽しむ時間もあれば、<br />
                                一杯の蕎麦に静かに向き合う時間もある。
                            </p>

                            <div className="bg-[#2a2a2a]/5 p-8 rounded-lg border-l-4 border-japanese-gold">
                                <p className="text-lg md:text-xl text-[#2a2a2a] font-kanteiryuu leading-loose tracking-wide">
                                    それぞれのお客さんにとって、<br />
                                    <span className="text-japanese-red font-bold">無理のない距離感</span>を大切にしています。
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </PhilosophyLayout>
    );
}

export default Space;
