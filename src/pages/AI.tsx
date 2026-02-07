import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { StockNews } from '@/components/StockNews';
import { analyzeInvestment, AnalysisParams, AnalysisResult } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, TrendingUp, AlertCircle, Brain, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { LoadingAnimation } from '@/components/LoadingAnimation';
import { StockRecommendationCard } from '@/components/StockRecommendationCard';

export default function AIPage() {
    const [assetType, setAssetType] = useState<'Stock' | 'Mutual Fund'>('Stock');
    const [budget, setBudget] = useState('');
    const [investmentType, setInvestmentType] = useState<'Long Term' | 'Short Term'>('Long Term');
    const [investmentMode, setInvestmentMode] = useState<'SIP' | 'One-time'>('One-time');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleAnalyze = async () => {
        setIsLoading(true);
        setError(null);
        setResult(null);
        try {
            const data = await analyzeInvestment({
                assetType,
                budget: Number(budget),
                investmentType,
                investmentMode
            });
            setResult(data);
        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Failed to analyze. Ensure Edge Function is deployed.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {/* Input Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                                AI Investment Analysis
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Get personalized market insights powered by Claude AI & Grow API.
                            </p>
                        </div>

                        <Card className="glass-card border-white/10">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-primary" />
                                    Configuration
                                </CardTitle>
                                <CardDescription>Enter your investment preferences</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label>Asset Type</Label>
                                        <Select value={assetType} onValueChange={(v: any) => setAssetType(v)}>
                                            <SelectTrigger className="bg-white/5 border-white/10">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Stock">Stocks</SelectItem>
                                                <SelectItem value="Mutual Fund">Mutual Funds</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Budget (₹)</Label>
                                        <Input
                                            type="number"
                                            placeholder="50000"
                                            value={budget}
                                            onChange={(e) => setBudget(e.target.value)}
                                            className="bg-white/5 border-white/10"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Investment Horizon</Label>
                                        <Select value={investmentType} onValueChange={(v: any) => setInvestmentType(v)}>
                                            <SelectTrigger className="bg-white/5 border-white/10">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Long Term">Long Term (&gt; 1 Year)</SelectItem>
                                                <SelectItem value="Short Term">Short Term (&lt; 1 Year)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Investment Mode</Label>
                                        <div className="flex items-center gap-4 h-10">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id="sip"
                                                    checked={investmentMode === 'SIP'}
                                                    onCheckedChange={(checked) => setInvestmentMode(checked ? 'SIP' : 'One-time')}
                                                    className="border-white/20"
                                                />
                                                <label
                                                    htmlFor="sip"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                                >
                                                    SIP (Systematic Investment Plan)
                                                </label>
                                            </div>
                                            {investmentMode === 'One-time' && (
                                                <span className="text-sm text-muted-foreground">One-time Investment</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    onClick={handleAnalyze}
                                    disabled={isLoading || !budget}
                                    className="w-full bg-primary hover:bg-primary/90 glow-effect h-12 text-lg"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing...
                                        </>
                                    ) : (
                                        'Run Analysis Engine'
                                    )}
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Loading Animation */}
                        {isLoading && <LoadingAnimation />}

                        {/* Results Section */}
                        {error && (
                            <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        {result && !isLoading && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-6"
                            >
                                {/* Summary Card */}
                                <Card className="glass-card active-border bg-gradient-to-br from-primary/5 to-transparent">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-2xl">
                                            <TrendingUp className="w-6 h-6 text-green-400" />
                                            AI Recommendation Summary
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                                <span className="text-sm text-muted-foreground block mb-1">Projected Returns</span>
                                                <span className="text-2xl font-bold text-green-400">{result.returns}</span>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                                <span className="text-sm text-muted-foreground block mb-1">Risk Assessment</span>
                                                <span className="text-2xl font-bold text-yellow-400">{result.risk || "Moderate"}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3 pt-2">
                                            <h3 className="font-semibold text-lg flex items-center gap-2">
                                                <Brain className="w-5 h-5 text-purple-400" />
                                                Analysis & Reasoning
                                            </h3>
                                            <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-100/90 leading-relaxed text-sm">
                                                {result.reasoning}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Budget Explanation */}
                                <Card className="glass-card border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-xl">
                                            <Lightbulb className="w-5 h-5 text-blue-400" />
                                            Why This Recommendation Fits Your Budget
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {result.budgetExplanation}
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Ranked Recommendations */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold">Top Recommendations</h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        {result.recommendations.map((item, idx) => (
                                            <StockRecommendationCard
                                                key={idx}
                                                {...item}
                                                index={idx}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <StockNews />
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
