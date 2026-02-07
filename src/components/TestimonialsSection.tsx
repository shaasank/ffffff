import { motion } from 'framer-motion';
import { Quote, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    quote: "Stonkzz simplified technical analysis for me. I never thought I'd feel this confident reading candlestick patterns!",
    name: 'Rahul M.',
    role: 'College Student & Beginner Trader',
    initial: 'R',
  },
  {
    quote: "The daily insights and charts feel like having a personal market analyst in my pocket. Love how clean and powerful the UI is.",
    name: 'Samantha D.',
    role: 'Fintech Product Manager',
    initial: 'S',
  },
  {
    quote: "In just 2 weeks, I've made smarter trades thanks to their analysis. Their NIFTY50 trends are on point!",
    name: 'Ajay K.',
    role: 'Freelance Designer & Swing Trader',
    initial: 'A',
  },
  {
    quote: "I finally understand market sentiment. The way Stonkzz explains it with visuals and real data is just brilliant.",
    name: 'Deepika S.',
    role: 'Homemaker & New Investor',
    initial: 'D',
  },
  {
    quote: "I stopped following 5 different apps. Now I just check Stonkzz once in the morning—everything I need is there.",
    name: 'Naveen R.',
    role: 'Software Engineer',
    initial: 'N',
  },
  {
    quote: "Stonkzz gave me the confidence to invest in my first stock. Their charts and analysis are beginner-friendly but powerful.",
    name: 'Aisha T.',
    role: 'Digital Marketer',
    initial: 'A',
  },
  {
    quote: "The design is fire! It makes finance feel exciting. Finally, a trading platform that isn't boring!",
    name: 'Karan M.',
    role: 'Content Creator & Crypto Enthusiast',
    initial: 'K',
  },
  {
    quote: "Their refund policy gave me the confidence to try it—and now I'm hooked. Worth every rupee!",
    name: 'Priya G.',
    role: 'Entrepreneur',
    initial: 'P',
  },
  {
    quote: "I used to get overwhelmed by too many numbers. Stonkzz breaks things down so clearly, it's addictive.",
    name: 'Manoj P.',
    role: 'Retired Banker',
    initial: 'M',
  },
  {
    quote: "I made back my subscription fee with one smart trade. That's how actionable their data is.",
    name: 'Shweta N.',
    role: 'Part-Time Trader & Blogger',
    initial: 'S',
  },
];

export function TestimonialsSection() {
  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            What Traders <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Building smart market tools is rewarding — but what truly drives us is hearing how Stonkzz helps traders grow their wealth and make informed decisions.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-6 w-80 shrink-0 hover:border-primary/30 transition-all duration-300 group"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <span className="font-semibold text-primary">{testimonial.initial}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drag indicator */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          ← Hover to pause →
        </p>
      </div>
    </section>
  );
}
