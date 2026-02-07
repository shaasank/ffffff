import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const stocks = [
    { name: 'RELIANCE', change: '+1.45%', positive: true },
    { name: 'TCS', change: '+0.82%', positive: true },
    { name: 'HDFCBANK', change: '-0.34%', positive: false },
    { name: 'INFY', change: '+1.12%', positive: true },
    { name: 'ICICIBANK', change: '+0.65%', positive: true },
    { name: 'HUL', change: '-0.12%', positive: false },
    { name: 'BHARTIARTL', change: '+2.45%', positive: true },
    { name: 'SBIN', change: '+0.34%', positive: true },
    { name: 'ITC', change: '-0.88%', positive: false },
    { name: 'KOTAKBANK', change: '+0.44%', positive: true },
    { name: 'LT', change: '+1.56%', positive: true },
    { name: 'AXISBANK', change: '-0.21%', positive: false },
];

export function MarqueeStocks() {
    return (
        <div className="relative w-full overflow-hidden py-4 z-20 bg-black/40 backdrop-blur-lg border-y border-white/5 shadow-2xl">
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
                    className="flex gap-16 items-center px-8"
                >
                    {[...stocks, ...stocks].map((stock, index) => (
                        <div key={index} className="flex items-center gap-3 group cursor-default">
                            <div className={`p-1 rounded-lg bg-white/5 border border-white/5 group-hover:border-purple-500/30 transition-colors`}>
                                {stock.positive ? (
                                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                                ) : (
                                    <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                                )}
                            </div>
                            <div className="flex flex-col -space-y-0.5">
                                <span className={`text-[12px] font-bold tracking-wider group-hover:text-purple-400 transition-colors ${stock.positive ? 'text-white' : 'text-white/90'}`}>
                                    {stock.name}
                                </span>
                                <span className={`text-[9px] font-mono font-bold ${stock.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {stock.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Side Fades - adjusted for frosted effect */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-10" />
        </div>
    );
}
