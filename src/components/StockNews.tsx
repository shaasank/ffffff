import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { subscribeToNews } from '@/lib/api';

const MOCK_NEWS = [
    {
        id: 1,
        title: "Market Rally Continues as Tech Stocks Surge",
        source: "Financial Times",
        time: "2 hours ago",
        summary: "Major indices hit record highs driven by strong earnings from AI sector."
    },
    {
        id: 2,
        title: "Central Bank Signals Rate Cuts",
        source: "Bloomberg",
        time: "4 hours ago",
        summary: "Inflation data supports potential policy easing in the coming quarter."
    },
    {
        id: 3,
        title: "Energy Sector Outlook Improved",
        source: "Reuters",
        time: "6 hours ago",
        summary: "Oil prices stabilize as global demand forecasts are revised upwards."
    }
];

export function StockNews() {
    const [news, setNews] = useState(MOCK_NEWS);
    const [email, setEmail] = useState('');
    const [isSubscribing, setIsSubscribing] = useState(false);

    const handleSubscribe = async () => {
        if (!email) return;
        setIsSubscribing(true);
        try {
            await subscribeToNews(email);
            toast.success('Successfully subscribed to market updates!');
            setEmail('');
        } catch (error) {
            console.error(error);
            toast.error('Failed to subscribe. Check console/network.');
        } finally {
            setIsSubscribing(false);
        }
    };

    return (
        <Card className="glass-card border-white/10">
            <CardHeader className="flex flex-row items-center gap-2">
                <Newspaper className="w-5 h-5 text-primary" />
                <CardTitle>Market News</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[300px] pr-4 mb-4">
                    <div className="space-y-4">
                        {news.map((item) => (
                            <div key={item.id} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <h3 className="font-semibold text-sm mb-1 text-foreground">{item.title}</h3>
                                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                    <span>{item.source}</span>
                                    <span>{item.time}</span>
                                </div>
                                <p className="text-xs text-muted-foreground/80 line-clamp-2">{item.summary}</p>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                <div className="pt-4 border-t border-white/10">
                    <CardDescription className="mb-2">Get weekly updates on your portfolio</CardDescription>
                    <div className="flex gap-2">
                        <Input
                            placeholder="Enter your email"
                            className="bg-white/5 border-white/10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button size="sm" onClick={handleSubscribe} disabled={isSubscribing}>
                            {isSubscribing ? '...' : 'Subscribe'}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
