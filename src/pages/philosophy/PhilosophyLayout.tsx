import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PhilosophyLayoutProps {
    children: ReactNode;
    heroImage: string;
    heroAlt: string;
    title: string;
    subtitle?: string;
    prevPage?: { path: string; label: string };
    nextPage?: { path: string; label: string };
}

export function PhilosophyLayout({
    children,
    heroImage,
    heroAlt,
    title,
    subtitle,
    prevPage,
    nextPage
}: PhilosophyLayoutProps) {
    return (
        <div className="bg-[#F5F0E8] min-h-screen">
            {/* Fixed Home Button */}
            <Link
                to="/"
                className="fixed bottom-6 left-6 bg-japanese-red hover:bg-red-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 transform hover:scale-105"
                aria-label="ホームに戻る"
            >
                <Home className="h-6 w-6" />
            </Link>

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt={heroAlt}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                </div>

                <div className="relative h-full flex flex-col items-center justify-center">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="absolute top-8 left-0 right-0 px-6"
                    >
                        <div className="container mx-auto">
                            <Link
                                to="/dining-philosophy"
                                className="text-white/80 hover:text-japanese-gold font-kanteiryuu text-sm tracking-wider flex items-center gap-2 transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                一期一美のこだわり
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-center px-4 flex flex-col items-center"
                    >
                        <h1
                            className="text-white font-kanteiryuu text-3xl md:text-4xl lg:text-5xl tracking-widest"
                            style={{
                                writingMode: 'vertical-rl',
                                textOrientation: 'upright',
                                letterSpacing: '0.2em',
                                height: 'auto',
                                maxHeight: '50vh'
                            }}
                        >
                            {title}
                        </h1>
                    </motion.div>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-japanese-gold font-kanteiryuu text-lg md:text-xl tracking-[0.3em] mt-6"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </section>

            {/* Content */}
            {children}

            {/* Navigation */}
            <section className="py-16 bg-[#2a2a2a]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {prevPage ? (
                            <Link
                                to={prevPage.path}
                                className="flex items-center gap-3 text-white/80 hover:text-japanese-gold transition-colors group"
                            >
                                <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                                <div className="text-right md:text-left">
                                    <span className="text-xs text-white/50 block">前のページ</span>
                                    <span className="font-kanteiryuu text-lg">{prevPage.label}</span>
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}

                        <Link
                            to="/dining-philosophy"
                            className="font-kanteiryuu text-japanese-gold hover:text-white transition-colors border border-japanese-gold hover:border-white px-6 py-2 rounded"
                        >
                            こだわり一覧へ
                        </Link>

                        {nextPage ? (
                            <Link
                                to={nextPage.path}
                                className="flex items-center gap-3 text-white/80 hover:text-japanese-gold transition-colors group"
                            >
                                <div className="text-left md:text-right">
                                    <span className="text-xs text-white/50 block">次のページ</span>
                                    <span className="font-kanteiryuu text-lg">{nextPage.label}</span>
                                </div>
                                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PhilosophyLayout;
