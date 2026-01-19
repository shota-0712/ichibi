import { motion } from 'framer-motion';
import { PhilosophyLayout } from './PhilosophyLayout';

export function Juwari() {
    return (
        <PhilosophyLayout
            heroImage="/image/seiro.webp"
            heroAlt="十割蕎麦にこだわる理由"
            title="十割蕎麦にこだわる理由"
            subtitle="— 先入観を超えて —"
            prevPage={{ path: "/dining-philosophy/health", label: "健康と美味しさ" }}
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
                        {/* Common Impressions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide mb-8">
                                十割蕎麦には、
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="bg-white px-6 py-3 rounded-full shadow-md font-kanteiryuu text-[#6a6a6a]">
                                    「切れやすい」
                                </span>
                                <span className="bg-white px-6 py-3 rounded-full shadow-md font-kanteiryuu text-[#6a6a6a]">
                                    「ぼそぼそする」
                                </span>
                            </div>
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide mt-8">
                                といった印象を持たれることもあります。
                            </p>
                        </motion.div>

                        {/* Divider */}
                        <div className="flex justify-center py-8">
                            <div className="w-[1px] h-16 bg-[#c9a96e]" />
                        </div>

                        {/* Our Goal */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#2a2a2a] rounded-lg p-8 md:p-12 text-center mb-16"
                        >
                            <p className="text-lg md:text-xl text-white/80 font-kanteiryuu leading-loose tracking-wide mb-6">
                                私たちが目指しているのは、
                            </p>
                            <p className="text-2xl md:text-3xl text-white font-kanteiryuu leading-loose tracking-wide">
                                そうした先入観にとらわれない、<br />
                                <span className="text-japanese-gold">純粋に美味しい十割蕎麦</span>
                            </p>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 text-center mb-16"
                        >
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                二八蕎麦のように食べやすく、<br />
                                それでいて、十割ならではの香りと余韻を<br />
                                しっかり感じられる。
                            </p>
                        </motion.div>

                        {/* Closing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#2a2a2a]/5 p-8 md:p-12 rounded-lg border-l-4 border-japanese-red text-center"
                        >
                            <p className="text-xl md:text-2xl text-[#2a2a2a] font-kanteiryuu leading-loose tracking-wide">
                                これまでの十割蕎麦のイメージを、<br />
                                少しずつでも変えていけたらと考えています。
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </PhilosophyLayout>
    );
}

export default Juwari;
