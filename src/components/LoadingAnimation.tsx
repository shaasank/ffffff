import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const slogans = [
    "Fetching perfect stocks for you",
    "Invest early, invest wisely",
    "Analyzing market trends",
    "Finding best opportunities",
    "Calculating optimal returns",
    "Building your portfolio"
];

export function LoadingAnimation() {
    const [currentSlogan, setCurrentSlogan] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlogan((prev) => (prev + 1) % slogans.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 px-4"
        >
            {/* Animated Chart Visualization */}
            <div className="relative w-32 h-32 mb-8">
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-purple-500/40 blur-xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <div className="relative w-full h-full rounded-full glass-card border-2 border-primary/30 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-primary" />
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                        <Loader2 className="w-full h-full text-primary/30" />
                    </motion.div>
                </div>
            </div>

            {/* Rotating Slogans */}
            <div className="h-16 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlogan}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                            {slogans[currentSlogan]}
                        </h3>
                        <div className="flex items-center justify-center gap-1 mt-3">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-primary"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
