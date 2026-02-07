import { motion } from 'framer-motion';
import { Search, PenTool, Zap, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Exploration',
    description: 'We dive deep into 50+ trusted sources including NSE, BSE, and global news to capture every market heartbeat.',
    icon: Search,
  },
  {
    number: '2',
    title: 'Strategic Synthesis',
    description: 'Our AI engines process massive datasets to identify high-conviction trends and actionable stock insights.',
    icon: PenTool,
  },
  {
    number: '3',
    title: 'Precision Implementation',
    description: 'Data is transformed into beautiful, institutional-grade visual reports that are easy to digest.',
    icon: Zap,
  },
  {
    number: '4',
    title: 'Impactful Results',
    description: 'Every morning at 8:00 AM IST, your personalized PDF arrives on WhatsApp, ready for the market open.',
    icon: TrendingUp,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-black">
      {/* Background visual elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 font-mono text-[10px] tracking-[0.2em] uppercase text-purple-400">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Our Protocol
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            It's not as chaotic <br /> as you <span className="text-purple-500 italic">think.</span>
          </h2>
          <p className="text-white/40 max-w-2xl text-lg font-medium leading-relaxed">
            We've distilled complex market analysis into a razor-sharp 4-step execution model.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full flex flex-col items-start border-white/5 hover:border-purple-500/30 transition-all duration-500">
                {/* Large Background Number */}
                <span className="absolute top-4 right-6 text-9xl font-bold text-white/[0.02] select-none transition-colors group-hover:text-purple-500/[0.05]">
                  {step.number}
                </span>

                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-black transition-all duration-500">
                  <step.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                  {step.description}
                </p>

                {/* Bottom Line Decoration */}
                <div className="mt-auto pt-8 w-full">
                  <div className="h-px w-0 bg-purple-500/50 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Stat / Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex flex-col sm:flex-row items-center gap-8 justify-between p-8 rounded-3xl border border-white/5 bg-white/[0.01]"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-purple-500/20 flex items-center justify-center text-purple-500">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-mono text-purple-400 tracking-wider">UP-TIME GUARANTEED</p>
              <p className="text-white font-bold text-lg">Daily Briefing at 08:00 AM IST</p>
            </div>
          </div>

          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-purple-900/40 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold">
                U{i}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-black bg-white/5 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold">
              +2k
            </div>
          </div>

          <p className="text-white/40 text-sm font-medium">
            Join <span className="text-white">2,400+</span> traders already optimized.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
