import { motion } from 'framer-motion';
import { HelpCircle, TrendingUp, Smartphone, XCircle, RefreshCw, Search, Target, Sparkles, Clock } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    icon: TrendingUp,
    question: 'What is Stonkzz, and who is it for?',
    answer: 'Stonkzz is India\'s simplest daily stock market report delivered to your WhatsApp every morning. It\'s designed for traders, investors, and anyone who wants to stay informed about the market without spending hours researching. Whether you\'re a beginner or an experienced trader, our reports help you start your day with all the insights you need.',
  },
  {
    icon: Smartphone,
    question: 'How will I receive the daily PDF report?',
    answer: 'Once you subscribe, you\'ll receive a beautifully designed PDF report directly on WhatsApp every morning at 8:00 AM IST, before the market opens. The report is optimized for mobile viewing but works great on any device.',
  },
  {
    icon: XCircle,
    question: 'Does the report include stock tips or buy/sell calls?',
    answer: 'No, Stonkzz does not provide buy/sell recommendations or stock tips. We provide data-driven insights, market analysis, and key metrics to help you make your own informed decisions. We believe in empowering traders with information, not creating dependency.',
  },
  {
    icon: RefreshCw,
    question: 'Can I request a refund if I change my mind?',
    answer: 'Absolutely! We offer a 5-day money-back guarantee. If you\'re not satisfied with our service within the first 5 days of your subscription, simply reach out to us and we\'ll process a full refund, no questions asked.',
  },
  {
    icon: Search,
    question: 'Where do you source your market data from?',
    answer: 'We aggregate data from 50+ trusted sources including NSE, BSE, RBI, and leading financial news outlets. Our AI-powered system cross-verifies data to ensure accuracy before including it in your daily report.',
  },
  {
    icon: Target,
    question: 'How accurate are your predictions or insights?',
    answer: 'We don\'t make predictions. Instead, we provide factual market data, technical analysis, and sentiment indicators. Our Stonkzz Score is derived from multiple market indicators and historical patterns, giving you an objective view of market conditions.',
  },
  {
    icon: Sparkles,
    question: 'How is Stonkzz different from other platforms?',
    answer: 'Unlike apps that require you to navigate through multiple screens, Stonkzz delivers everything you need in a single, beautifully designed PDF. No ads, no distractions—just clean, actionable insights delivered to your WhatsApp every morning.',
  },
  {
    icon: Clock,
    question: 'When is the report updated?',
    answer: 'Reports are generated fresh every morning and delivered by 8:00 AM IST, ensuring you have the latest market data before the market opens. Weekend reports include global market updates and week-ahead previews.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our support team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-all duration-300 hover:border-primary/20"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5 group">
                  <div className="flex items-center gap-3">
                    <faq.icon className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
