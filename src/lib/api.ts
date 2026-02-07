import { supabase } from './supabase';

export interface AnalysisParams {
    assetType: 'Stock' | 'Mutual Fund';
    budget: number;
    investmentType: 'Long Term' | 'Short Term';
    investmentMode: 'SIP' | 'One-time';
}

export interface RecommendationItem {
    name: string;
    ticker: string;
    price: string;
    change: string; // e.g., "+2.91%"
    changeValue: string; // e.g., "116.70"
    volume: string; // e.g., "28,04,761"
    sentiment: 'Buy' | 'Hold' | 'Sell';
    rank: number;
    pros: string[];
    cons: string[];
    investmentLink?: string;
}

export interface AnalysisResult {
    recommendations: RecommendationItem[];
    returns: string;
    reasoning: string;
    risk: string;
    budgetExplanation: string;
}

export const analyzeInvestment = async (params: AnalysisParams): Promise<AnalysisResult> => {
    try {
        const { data, error } = await supabase.functions.invoke('analyze-stock', {
            body: params,
        });

        if (error) throw error;
        return data;
    } catch (error) {
        console.warn('Edge Function call failed, falling back to mock data:', error);
        return new Promise((resolve) => {
            setTimeout(() => {
                let recs: RecommendationItem[] = [];
                let why = "";
                let ret = "";
                let risk = "";
                let budgetExp = "";

                const allStocks: RecommendationItem[] = [
                    {
                        name: "Reliance Industries", ticker: "RELIANCE", price: "₹2,988.00",
                        change: "+1.5%", changeValue: "+44.50", volume: "45,20,100",
                        sentiment: "Buy", rank: 1,
                        pros: ["Strong retail growth", "Market leader"],
                        cons: ["High valuation", "Telecom competition"],
                        investmentLink: "https://groww.in/stocks/reliance-industries-ltd"
                    },
                    {
                        name: "ICICI Bank", ticker: "ICICIBANK", price: "₹1,090.25",
                        change: "+0.8%", changeValue: "+8.65", volume: "12,15,300",
                        sentiment: "Buy", rank: 2,
                        pros: ["Proven track record", "Digital leadership"],
                        cons: ["Interest rate risk"],
                        investmentLink: "https://groww.in/stocks/icici-bank-ltd"
                    },
                    {
                        name: "Tata Motors", ticker: "TATAMOTORS", price: "₹912.00",
                        change: "+3.4%", changeValue: "+33.20", volume: "1,10,50,000",
                        sentiment: "Buy", rank: 3,
                        pros: ["EV segment growth", "JLR turnaround"],
                        cons: ["High volatility"],
                        investmentLink: "https://groww.in/stocks/tata-motors-ltd"
                    },
                    {
                        name: "ITC Limited", ticker: "ITC", price: "₹450.30",
                        change: "+1.2%", changeValue: "+5.40", volume: "2,15,300",
                        sentiment: "Buy", rank: 4,
                        pros: ["Strong cash flow", "High dividend yield"],
                        cons: ["Regulatory pressure on tobacco"],
                        investmentLink: "https://groww.in/stocks/itc-ltd"
                    },
                    {
                        name: "Zomato", ticker: "ZOMATO", price: "₹260.50",
                        change: "+5.1%", changeValue: "+12.60", volume: "8,20,00,000",
                        sentiment: "Buy", rank: 5,
                        pros: ["Quick commerce leadership", "Improving margins"],
                        cons: ["Valuation", "Competition"],
                        investmentLink: "https://groww.in/stocks/zomato-ltd"
                    },
                    {
                        name: "Yes Bank", ticker: "YESBANK", price: "₹25.40",
                        change: "-0.5%", changeValue: "-0.15", volume: "15,20,00,000",
                        sentiment: "Hold", rank: 6,
                        pros: ["Inexpensive", "Stabilizing assets"],
                        cons: ["High supply of shares"],
                        investmentLink: "https://groww.in/stocks/yes-bank-ltd"
                    }
                ];

                const allFunds: RecommendationItem[] = [
                    {
                        name: "Quant Small Cap", ticker: "Direct-Growth", price: "₹245.3",
                        change: "+1.2%", changeValue: "+2.91", volume: "AUM: 20k Cr",
                        sentiment: "Buy", rank: 1,
                        pros: ["High alpha", "Dynamic management"],
                        cons: ["Small cap risk"],
                        investmentLink: "https://groww.in/mutual-funds/quant-small-cap-fund-direct-plan-growth"
                    },
                    {
                        name: "Parag Parikh Flexi", ticker: "Direct-Growth", price: "₹78.5",
                        change: "+0.5%", changeValue: "+0.39", volume: "AUM: 55k Cr",
                        sentiment: "Buy", rank: 2,
                        pros: ["Global exposure", "Conservative approach"],
                        cons: ["Moderate growth"],
                        investmentLink: "https://groww.in/mutual-funds/parag-parikh-long-term-equity-fund-direct-growth"
                    }
                ];

                const userBudget = params.budget;

                if (params.assetType === 'Stock') {
                    recs = allStocks.filter(stock => {
                        const priceNum = parseFloat(stock.price.replace(/[₹,]/g, ''));
                        return priceNum <= userBudget;
                    });

                    if (recs.length === 0) {
                        budgetExp = `Your budget of ₹${userBudget.toLocaleString('en-IN')} is currently below the price of the top-tier stocks in our list. Consider increasing your budget or looking at Penny stocks/ETFs.`;
                        why = "No stocks found within the specified budget constraint.";
                        ret = "N/A";
                        risk = "N/A";
                    } else {
                        ret = params.investmentType === 'Long Term' ? "18-24% CAGR" : "8-12% (3m)";
                        risk = params.investmentType === 'Long Term' ? "Moderate" : "High";
                        why = `Optimized for a ₹${userBudget.toLocaleString('en-IN')} budget. ${recs.length} quality stocks identified that you can afford directly.`;
                        budgetExp = `With ₹${userBudget.toLocaleString('en-IN')}, you can afford ${recs.map(r => r.name).join(', ')}. These fits perfectly within your constraint.`;
                    }
                } else {
                    recs = allFunds.filter(fund => {
                        const navNum = parseFloat(fund.price.replace(/[₹,]/g, ''));
                        return navNum <= userBudget || params.investmentMode === 'SIP';
                    });

                    ret = "15-20% XIRR";
                    risk = "Moderate";
                    why = "Managed portfolio suitable for consistent wealth generation.";
                    budgetExp = `Mutual funds are ideal for ₹${userBudget.toLocaleString('en-IN')} budgets as they allow fractional units.`;
                }

                resolve({
                    recommendations: recs.slice(0, 3),
                    returns: ret,
                    reasoning: why,
                    risk: risk,
                    budgetExplanation: budgetExp
                });
            }, 1000);
        });
    }
};

export const subscribeToNews = async (email: string) => {
    try {
        const { data, error } = await supabase.functions.invoke('subscribe-news', {
            body: { email },
        });

        if (error) throw error;
        return data;
    } catch (error) {
        console.warn('Edge Function call failed, falling back to mock success:', error);
        return { success: true, message: "Mock subscription successful" };
    }
};
