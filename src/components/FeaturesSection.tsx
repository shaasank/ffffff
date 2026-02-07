import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, BarChart3, Newspaper, ArrowRight, Sparkles, DollarSign, LineChart, Globe, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const heatmapStocks = [
  { name: 'RIL', change: '+1.2%', positive: true },
  { name: 'TCS', change: '+0.8%', positive: true },
  { name: 'ITC', change: '-0.5%', positive: false },
  { name: 'INFY', change: '-1.5%', positive: false },
  { name: 'HAL', change: '+0.3%', positive: true },
  { name: 'IOCL', change: '-2.1%', positive: false },
];

const newsBulletin = [
  'RBI maintains repo rate at 6.5%, signals cautious stance',
  'IT sector shows strong Q3 earnings, TCS leads the pack',
  'Auto stocks rally on improved rural demand outlook',
  'Banking sector faces headwinds amid asset quality concerns',
];

const niftyChartPlaceholder = "https://images.unsplash.com/photo-1611974717482-9828d282435c?auto=format&fit=crop&q=80&w=1200&h=800";

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
            Intelligence Suite
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Bitten by <span className="text-purple-500">AI.</span> <br />
            Powered by <span className="italic">Data.</span>
          </h2>
          <p className="text-white/40 max-w-2xl text-lg font-medium leading-relaxed">
            Struck by lightning-fast market insights to elevate your portfolio.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* AI Investment Analysis - Large Square Featured Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 lg:col-span-6 row-span-2 glass-card p-10 flex flex-col justify-between overflow-hidden relative group border border-purple-500/20"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                  <Brain className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight">AI Investment <br /> Analysis Engine</h3>
                <p className="text-white/50 font-medium mb-8 max-w-sm leading-relaxed">
                  Personalized market insights powered by Claude AI. Get ranked recommendations tailored to your budget, horizon, and risk profile.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/40 block mb-1 uppercase tracking-widest font-bold">Accuracy</span>
                    <span className="text-xl font-bold text-emerald-500">89.4%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/40 block mb-1 uppercase tracking-widest font-bold">Insights</span>
                    <span className="text-xl font-bold text-purple-500">Real-time</span>
                  </div>
                </div>
              </div>

              <Link to="/ai" className="block w-fit group/btn">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl text-white font-bold transition-all border border-white/20 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] overflow-hidden"
                >
                  {/* Glass Shimmer Effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />

                  <span className="relative z-10 text-sm">Launch Analysis Engine</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />

                </motion.div>
              </Link>
            </div>

            {/* Background Pattern */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-500/5 blur-[80px] rounded-full group-hover:bg-purple-500/10 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* NIFTY50 Heatmap - Horizontal Wide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-6 glass-card p-8 group overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white tracking-tight">NIFTY50 Pulse</h3>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-500">Live Heatmap</span>
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {heatmapStocks.map((stock, i) => (
                <div
                  key={stock.name}
                  className={`aspect-square rounded-xl p-2 flex flex-col items-center justify-center border transition-all duration-500 hover:scale-105 ${stock.positive
                    ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-500'
                    : 'bg-rose-500/5 border-rose-500/10 text-rose-500'
                    }`}
                >
                  <span className="text-xs font-bold leading-none mb-1">{stock.name}</span>
                  <span className="text-[10px] font-mono opacity-80">{stock.change}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gold & Silver - Small Square */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-3 glass-card p-8 flex flex-col justify-between"
          >
            <Sparkles className="w-8 h-8 text-amber-500/50 mb-6" />
            <div>
              <h3 className="font-bold text-white mb-1">Bullion Track</h3>
              <p className="text-white/40 text-xs mb-4">Daily precious metal shifts.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-xs font-bold font-mono">GOLD</span>
                  <span className="text-emerald-500 text-xs font-bold">+0.8%</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="text-xs font-bold font-mono">SILVER</span>
                  <span className="text-rose-500 text-xs font-bold">-0.3%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FII/DII - Small Square */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-3 glass-card p-8 flex flex-col justify-between"
          >
            <Globe className="w-8 h-8 text-blue-500/50 mb-6" />
            <div>
              <h3 className="font-bold text-white mb-1">Institutional Flow</h3>
              <p className="text-white/40 text-xs mb-4">Foreign & Domestic movement.</p>
              <div className="pt-2">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-2xl font-black text-emerald-500">₹2.3k</span>
                  <span className="text-[10px] font-bold text-white/20 pb-1">CR</span>
                </div>
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest italic">Net Institutional Buy</p>
              </div>
            </div>
          </motion.div>

          {/* News Feed - Column Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-12 glass-card p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Newspaper className="w-5 h-5 text-purple-500" />
                  <h3 className="text-xl font-bold text-white tracking-tight">Intelligence Bulletin</h3>
                </div>
                <span className="font-mono text-[10px] text-white/20">LATEST UPDATES</span>
              </div>

              <div className="space-y-4">
                {newsBulletin.map((news, i) => (
                  <div key={i} className="flex gap-4 group/item">
                    <span className="font-mono text-[10px] text-purple-500 pt-1 group-hover/item:translate-x-1 transition-transform">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm font-medium text-white/60 group-hover/item:text-white transition-colors">{news}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5">
              <p className="text-[10px] text-white/40 font-mono italic">Compiled from 50+ global sources</p>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-purple-500" />
                <div className="w-1 h-1 rounded-full bg-purple-500/50" />
                <div className="w-1 h-1 rounded-full bg-purple-500/20" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Global CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-[1px] rounded-3xl bg-gradient-to-r from-purple-500/50 via-transparent to-purple-500/50">
            <div className="bg-black/80 backdrop-blur-xl px-12 py-10 rounded-3xl border border-white/5 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to elevate?</h3>
              <p className="text-white/40 font-medium mb-8">Stop guessing. Start executing with data-driven precision.</p>
              <button className="h-14 px-10 rounded-full bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 font-bold transition-all hover:scale-105 active:scale-95 border border-white/20 shadow-2xl shadow-purple-500/20 flex items-center gap-2 mx-auto">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
