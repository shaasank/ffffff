import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function CandlestickChart({ isHovered = false }: { isHovered?: boolean }) {
    // Generate a simulated price path (bullish trend: low to high profit)
    const candles = useMemo(() => {
        let lastClose = 550; // Start lower on the screen (High Y)
        return Array.from({ length: 25 }).map((_, i) => {
            const open = lastClose;
            // Bias the random walk to go upwards (subtract from Y)
            const drift = -15; // Average upward movement per step
            const volatility = 80;
            const close = open + drift + (Math.random() - 0.5) * volatility;

            const high = Math.min(open, close) - Math.random() * 30; // High price = Low Y
            const low = Math.max(open, close) + Math.random() * 30;  // Low price = High Y
            const isUp = close < open; // In SVG Y coordinates, "Up" (bullish) means lower Y value
            lastClose = close;
            return { open, close, high, low, isUp, x: i * 35 };
        });
    }, []);

    return (
        <div className={`absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 w-[350px] md:w-[900px] h-[400px] md:h-[700px] pointer-events-none opacity-20 filter transition-all duration-700 ${isHovered ? 'blur-none' : 'blur-[3px] sm:blur-[5px]'} z-10 overflow-hidden`}>
            <svg viewBox="0 0 900 700" className="w-full h-full preserve-aspect-ratio" preserveAspectRatio="xMidYMid slice">
                {candles.map((candle, i) => (
                    <g key={i} transform={`translate(${candle.x}, 0)`}>
                        {/* High-Low Wick */}
                        <line
                            x1="10"
                            y1={candle.high}
                            x2="10"
                            y2={candle.low}
                            stroke={candle.isUp ? '#c084fc' : '#ffffff'}
                            strokeWidth="1.5"
                            opacity="0.4"
                        />
                        {/* Open-Close Body */}
                        <rect
                            x="2.5"
                            y={Math.min(candle.open, candle.close)}
                            width="15"
                            height={Math.max(2, Math.abs(candle.close - candle.open))}
                            fill={candle.isUp ? '#a855f7' : '#ffffff'}
                            fillOpacity={candle.isUp ? "0.6" : "0.2"}
                            stroke={candle.isUp ? '#a855f7' : '#ffffff'}
                            strokeWidth="1"
                            strokeOpacity="0.5"
                            rx="1"
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
}
