import { motion } from 'framer-motion';
import { PhilosophyLayout } from './PhilosophyLayout';

export function SobaTypes() {
    return (
        <PhilosophyLayout
            heroImage="/image/seiro.webp"
            heroAlt="十割蕎麦と二八蕎麦"
            title="十割蕎麦と二八蕎麦"
            subtitle="— それぞれの良さを —"
            nextPage={{ path: "/dining-philosophy/vision", label: "一期一美が目指すもの" }}
        >
            {/* Introduction */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                            一期一美では、<br />
                            <span className="text-japanese-red font-bold">十割蕎麦</span> と <span className="text-japanese-red font-bold">二八蕎麦</span> の二種類をご用意しています。
                        </p>
                        <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide mt-6">
                            どちらも、<br className="md:hidden" />
                            蕎麦の良さをそれぞれのかたちで<br className="md:hidden" />
                            楽しんでいただくためのものです。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="flex justify-center">
                <div className="w-[1px] h-20 bg-[#c9a96e]" />
            </div>

            {/* Juwari Soba Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="/image/seiro.webp"
                                    alt="十割蕎麦"
                                    className="w-full h-[350px] md:h-[450px] object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col"
                        >
                            <span className="text-japanese-red text-sm tracking-[0.5em] mb-4 font-medium">十割蕎麦</span>

                            <h2 className="font-kanteiryuu text-2xl md:text-3xl text-[#2a2a2a] mb-8 border-b border-japanese-gold pb-4">
                                蕎麦粉と浄水のみで打つ蕎麦
                            </h2>

                            <div className="space-y-6">
                                <p className="text-[#4a4a4a] font-kanteiryuu text-lg leading-relaxed tracking-wide">
                                    十割蕎麦は、蕎麦粉と浄水のみで打った蕎麦です。
                                </p>
                                <p className="text-[#4a4a4a] font-kanteiryuu text-lg leading-relaxed tracking-wide">
                                    噛んだ瞬間に立つ香り、噛むほどに広がる蕎麦の風味が特徴です。
                                </p>
                                <p className="text-[#4a4a4a] font-kanteiryuu text-lg leading-relaxed tracking-wide">
                                    一方で、切れやすい、ぼそぼそする、といった印象を持たれることも少なくありません。
                                </p>
                                <div className="bg-[#2a2a2a]/5 p-6 rounded-lg border-l-4 border-japanese-gold">
                                    <p className="text-[#3a3a3a] font-kanteiryuu text-lg leading-relaxed tracking-wide">
                                        一期一美では、十割蕎麦に真剣に向き合い、そうした印象をできるだけ抑え、<strong>二八蕎麦のように食べやすく、それでいて印象に残る一杯</strong>を目指しています。
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="flex justify-center">
                <div className="w-[1px] h-20 bg-[#c9a96e]" />
            </div>

            {/* Nihachi Soba Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col order-2 lg:order-1"
                        >
                            <span className="text-japanese-red text-sm tracking-[0.5em] mb-4 font-medium">二八蕎麦</span>

                            <h2 className="font-kanteiryuu text-2xl md:text-3xl text-[#2a2a2a] mb-8 border-b border-japanese-gold pb-4">
                                蕎麦粉八割、小麦粉二割
                            </h2>

                            <div className="space-y-6">
                                <p className="text-[#4a4a4a] font-kanteiryuu text-lg leading-relaxed tracking-wide">
                                    二八蕎麦は、蕎麦粉八割、小麦粉二割で打った蕎麦です。
                                </p>
                                <p className="text-[#4a4a4a] font-kanteiryuu text-lg leading-relaxed tracking-wide">
                                    小麦粉を加えることで、麺がまとまりやすく、のどごしの良さが生まれます。
                                </p>
                                <p className="text-[#4a4a4a] font-kanteiryuu text-lg leading-relaxed tracking-wide">
                                    つゆとの一体感があり、すっと食べやすいのも特徴です。
                                </p>
                                <p className="text-[#4a4a4a] font-kanteiryuu text-lg leading-relaxed tracking-wide">
                                    昔から親しまれてきた、安心感のある蕎麦と言えるかもしれません。
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="/image/seiro2.webp"
                                    alt="二八蕎麦"
                                    className="w-full h-[350px] md:h-[450px] object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </PhilosophyLayout>
    );
}

export default SobaTypes;
