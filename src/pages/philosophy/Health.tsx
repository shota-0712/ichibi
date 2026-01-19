import { motion } from 'framer-motion';
import { PhilosophyLayout } from './PhilosophyLayout';

export function Health() {
    return (
        <PhilosophyLayout
            heroImage="/image/seiro2.webp"
            heroAlt="健康と美味しさ"
            title="健康と美味しさ"
            subtitle="— その両立 —"
            prevPage={{ path: "/dining-philosophy/daily-craft", label: "日々の蕎麦打ち" }}
            nextPage={{ path: "/dining-philosophy/juwari", label: "十割蕎麦にこだわる理由" }}
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
                        <div className="text-center mb-16 space-y-6">
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                近年、健康志向やグルテンフリーに<br />
                                関心を持つ方も増えています。
                            </p>
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                一方で、<br />
                                「美味しい十割蕎麦」をまだ知らない方も<br />
                                多いと感じています。
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="flex justify-center py-8">
                            <div className="w-[1px] h-16 bg-[#c9a96e]" />
                        </div>

                        {/* Main Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-lg p-8 md:p-12 shadow-xl text-center mb-16"
                        >
                            <p className="text-xl md:text-2xl text-[#2a2a2a] font-kanteiryuu leading-loose tracking-wide">
                                一期一美では、<br />
                                <span className="line-through text-[#8a8a8a]">健康のために我慢して食べる蕎麦</span><br />
                                ではなく、<br />
                                <span className="text-japanese-red font-bold text-2xl md:text-3xl">美味しさをきちんと感じられる十割蕎麦</span><br />
                                をお出ししたいと考えています。
                            </p>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-6 mb-16"
                        >
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                香りが立ち、<br />
                                噛むほどに蕎麦の風味が広がる。
                            </p>
                        </motion.div>

                        {/* Closing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#2a2a2a] rounded-lg p-8 md:p-12 text-center"
                        >
                            <p className="text-lg md:text-xl text-white/90 font-kanteiryuu leading-loose tracking-wide">
                                その結果として、<br />
                                体にもやさしく、安心して召し上がっていただける<br />
                                一杯になるなら、<br />
                                <span className="text-japanese-gold">それは私たちにとっても大きな喜びです。</span>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </PhilosophyLayout>
    );
}

export default Health;
