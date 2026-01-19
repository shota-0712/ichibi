import { motion } from 'framer-motion';
import { PhilosophyLayout } from './PhilosophyLayout';

export function Tsuyu() {
    return (
        <PhilosophyLayout
            heroImage="/image/seiro.webp"
            heroAlt="そばつゆについて"
            title="そばつゆについて"
            subtitle="— 江戸前の味わい —"
            prevPage={{ path: "/dining-philosophy/space", label: "空間と過ごし方" }}
            nextPage={{ path: "/dining-philosophy/daily-craft", label: "日々の蕎麦打ち" }}
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
                                一期一美のそばつゆは、<br />
                                江戸前の、少し濃いめの味わいを<br />
                                大切にしています。
                            </p>
                        </div>

                        {/* Ingredients Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-lg p-8 md:p-12 shadow-xl mb-16"
                        >
                            <h3 className="font-kanteiryuu text-xl text-japanese-red mb-6 text-center">素材へのこだわり</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="text-center p-4 border border-[#e0d8cc] rounded-lg">
                                    <span className="block font-kanteiryuu text-sm text-[#6a6a6a] mb-2">だし</span>
                                    <span className="font-kanteiryuu text-lg text-[#2a2a2a]">鰹節・鯖節</span>
                                </div>
                                <div className="text-center p-4 border border-[#e0d8cc] rounded-lg">
                                    <span className="block font-kanteiryuu text-sm text-[#6a6a6a] mb-2">返し</span>
                                    <span className="font-kanteiryuu text-lg text-[#2a2a2a]">氷砂糖・ざらめ・みりん・醤油</span>
                                </div>
                            </div>
                            <p className="text-center font-kanteiryuu text-[#4a4a4a] mt-6">
                                江戸前の熟成した返しを使っています。
                            </p>
                        </motion.div>

                        {/* Divider */}
                        <div className="flex justify-center py-4">
                            <div className="w-16 h-[1px] bg-[#c9a96e]" />
                        </div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8 text-center"
                        >
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                十割蕎麦の香りに負けない、<br />
                                輪郭のはっきりした味わい。
                            </p>
                            <p className="text-lg md:text-xl text-[#3a3a3a] font-kanteiryuu leading-loose tracking-wide">
                                ぺらっとしたつゆではなく、<br />
                                <span className="text-japanese-red font-bold">深みがあり、印象に残るつゆ</span>を目指しています。
                            </p>
                        </motion.div>

                        {/* Divider */}
                        <div className="flex justify-center py-12">
                            <div className="w-[1px] h-16 bg-[#c9a96e]" />
                        </div>

                        {/* How to Enjoy */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#2a2a2a] rounded-lg p-8 md:p-12 text-center"
                        >
                            <h3 className="font-kanteiryuu text-xl text-japanese-gold mb-8">おすすめの楽しみ方</h3>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                                <div className="flex items-center gap-3">
                                    <span className="text-japanese-gold font-kanteiryuu text-2xl">一</span>
                                    <span className="text-white font-kanteiryuu text-lg">蕎麦そのもの</span>
                                </div>
                                <span className="text-white/50 hidden md:block">→</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-japanese-gold font-kanteiryuu text-2xl">二</span>
                                    <span className="text-white font-kanteiryuu text-lg">塩で</span>
                                </div>
                                <span className="text-white/50 hidden md:block">→</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-japanese-gold font-kanteiryuu text-2xl">三</span>
                                    <span className="text-white font-kanteiryuu text-lg">つゆで</span>
                                </div>
                            </div>
                            <p className="text-white/80 font-kanteiryuu mt-8 leading-loose">
                                そば湯を注いだとき、<br />
                                さらに美味しさが広がり、<br />
                                最後まで楽しめるつゆであることも大切にしています。
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </PhilosophyLayout>
    );
}

export default Tsuyu;
