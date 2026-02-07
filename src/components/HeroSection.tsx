import { useState, useEffect } from 'react';
import { motion, animate, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MarqueeTech } from './MarqueeTech';
import { MarqueeStocks } from './MarqueeStocks';
import { CandlestickChart } from './CandlestickChart';
import logo from '@/assets/STONKZZ.svg';
import prasanaImg from '@/assets/prasana.svg';



function RotatingSlogan() {
    const slogans = [
        "Stop Guessing",
        "Start Understanding",
        "Read the Market Like a Pro",
        "Learn Before You Earn"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slogans.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center z-25 pointer-events-none mb-8 w-full"
        >
            <div className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight flex flex-col items-center gap-2">
                <span className="text-purple-400 whitespace-nowrap">" Invest With Clarity "</span>
                <div className="h-[1.2em] relative w-full flex justify-center items-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="text-white/90 absolute"
                        >
                            {slogans[currentIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}


export function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-12 overflow-hidden bg-black">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#1a1a1a_0%,_transparent_70%)] opacity-50" />

            {/* Prasana Asset Integration - Left Aligned and Large */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1
                }}
                className="absolute inset-0 pointer-events-none z-60"
            >
                <div className="relative w-full h-full">
                    {/* Seamless gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black z-10" />
                    <img
                        src={prasanaImg}
                        alt=""
                        className="h-full w-auto object-cover object-left md:object-left filter grayscale brightness-[0.7] contrast-[1.1] blur-none relative z-10 opacity-40 md:opacity-100"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
            >
                <CandlestickChart />
            </motion.div>

            <div className="container relative z-30 mx-auto px-6 text-center flex-grow flex flex-col items-center justify-center pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-7xl mx-auto flex flex-col items-center"
                >
                    {/* Brand Logo - Center Content with High Contrast */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2
                        }}
                        className="mb-8 relative group z-35"
                    >
                        {/* High Contrast Glow Layers */}
                        <div className="absolute inset-0 bg-purple-500/600 blur-[1500px] rounded-full transition-all duration-1000 group-hover:bg-purple-500/80 z-0" />
                        <div className="absolute inset-0 bg-white8 blur-[90px] rounded-full z-0" />

                        <div
                            className="relative w-[300px] sm:w-[800px] lg:w-[1600px] h-[120px] sm:h-[280px] lg:h-[450px] bg-white transition-all duration-500"
                            style={{
                                maskImage: `url(${logo})`,
                                WebkitMaskImage: `url(${logo})`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center',
                                filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.1))',
                            }}
                        />
                    </motion.div>

                    {/* Rotating Slogan - Now centered and below logo */}
                    <RotatingSlogan />




                    {/* CTA Section */}
                    <div className="flex flex-col items-center gap-12 mt-10 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                        >
                            <Button
                                size="lg"
                                className="bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 font-bold text-xl px-12 h-16 rounded-full border border-white/20 shadow-2xl shadow-purple-500/10 transition-all hover:scale-105 active:scale-95 group"
                            >
                                <span className="flex items-center gap-3">
                                    Join Now
                                    <div className="relative flex items-center justify-center">
                                        <div className="absolute w-4 h-4 rounded-full bg-purple-500/50 blur-[6px] animate-pulse" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,0.4)] relative z-10" />
                                    </div>
                                </span>
                            </Button>

                        </motion.div>

                    </div>
                </motion.div>
            </div>

            {/* Bottom Marquees */}
            <div className="w-full mt-auto space-y-0 relative z-50">
                <MarqueeStocks />
                <MarqueeTech />
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
    );
}
