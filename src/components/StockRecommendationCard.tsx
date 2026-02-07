import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Award, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';

interface StockRecommendationCardProps {
    name: string;
    ticker: string;
    price: string;
    change: string;
    changeValue: string;
    volume: string;
    sentiment: 'Buy' | 'Hold' | 'Sell';
    rank: number;
    pros: string[];
    cons: string[];
    investmentLink?: string;
    index: number;
}

const rankColors = {
    1: 'from-yellow-500 to-amber-600',
    2: 'from-gray-400 to-gray-500',
    3: 'from-orange-600 to-orange-700',
};

const rankLabels = {
    1: '1st',
    2: '2nd',
    3: '3rd',
};

// Rank and Colors...
export function StockRecommendationCard({
    name,
    ticker,
    price,
    change,
    changeValue,
    volume,
    sentiment,
    rank,
    pros,
    cons,
    investmentLink,
    index,
}: StockRecommendationCardProps) {
    const isPositive = change.startsWith('+');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                {/* Rank Badge remains same */}
                {rank <= 3 && (
                    <div className="absolute top-4 right-4 z-10">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${rankColors[rank as 1 | 2 | 3]} flex items-center justify-center shadow-lg`}>
                            <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-background px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap">
                            {rankLabels[rank as 1 | 2 | 3]}
                        </div>
                    </div>
                )}

                <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-xl shrink-0 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                {name.charAt(0)}
                            </div>
                            <div>
                                <CardTitle className="text-xl text-white">{name}</CardTitle>
                                <p className="text-sm text-white/50">{ticker}</p>
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4 flex-grow">
                    {/* Price Information */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                        <div>
                            <p className="text-sm text-white/40 mb-1">Current Price</p>
                            <p className="text-2xl font-bold text-white">{price}</p>
                        </div>
                        <div className="text-right">
                            <p className={`text-lg font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                                {change}
                            </p>
                            <p className="text-sm text-white/40">{changeValue}</p>
                        </div>
                    </div>

                    {/* Volume and Sentiment */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 p-3 rounded-lg bg-white/5 border border-white/10">
                            <p className="text-xs text-white/40 mb-1">Volume</p>
                            <p className="font-semibold text-white/80">{volume}</p>
                        </div>
                        <Badge
                            className={`px-4 py-2 text-sm font-semibold ${sentiment === 'Buy'
                                ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                : sentiment === 'Hold'
                                    ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                    : 'bg-red-500/20 text-red-400 border-red-500/30'
                                }`}
                        >
                            {sentiment === 'Buy' ? '📈' : sentiment === 'Hold' ? '⏸️' : '📉'} {sentiment}
                        </Badge>
                    </div>

                    {/* Pros/Cons Section remains same */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold text-sm flex items-center gap-2 text-green-400">
                                <CheckCircle className="w-4 h-4" /> Pros
                            </h4>
                            <ul className="space-y-1.5">
                                {pros.map((pro, idx) => (
                                    <li key={idx} className="text-sm text-white/60 flex items-start gap-2">
                                        <span className="text-green-400 mt-1">✓</span>
                                        <span>{pro}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-sm flex items-center gap-2 text-red-400">
                                <AlertCircle className="w-4 h-4" /> Cons
                            </h4>
                            <ul className="space-y-1.5">
                                {cons.map((con, idx) => (
                                    <li key={idx} className="text-sm text-white/60 flex items-start gap-2">
                                        <span className="text-red-400 mt-1">✗</span>
                                        <span>{con}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>

                {/* Groww Link Button */}
                {investmentLink && (
                    <div className="p-4 pt-0">
                        <a
                            href={investmentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <Button
                                className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold h-11 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] group flex items-center justify-center gap-2"
                            >
                                <TrendingUp className="w-4 h-4 text-green-400" />
                                View on Groww
                                <TrendingUp className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Button>
                        </a>
                    </div>
                )}
            </Card>
        </motion.div>
    );
}
