import { motion } from 'framer-motion';

const techItems = [
    'AI-Powered Analysis',
    'Real-time Market Data',
    'Advanced Stock Screener',
    'Automated Portfolio Tracking',
    'Predictive Analytics',
    'Custom Dividend Alerts',
    'Market Sentiment Analysis',
    'Expert Investment Insights',
    'Multi-Asset Support',
    'Institutional-Grade Research',
];

export function MarqueeTech() {
    return (
        <div className="relative w-full overflow-hidden bg-black/50 border-y border-white/5 py-3 backdrop-blur-sm z-20">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-12 items-center px-6"
                >
                    {[...techItems, ...techItems].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-white/40 uppercase">
                                {item}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Side Fades */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
    );
}
