import { motion } from 'framer-motion';
import { Check, Star, Shield, Zap, TrendingUp, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Half-yearly',
    icon: TrendingUp,
    originalPrice: 900,
    price: 499,
    period: '6 months',
    savings: 'Save ₹401',
    description: 'Perfect for growing portfolios',
    popular: false,
  },
  {
    name: 'Monthly',
    icon: Zap,
    originalPrice: 300,
    price: 149,
    period: 'month',
    savings: 'Save ₹151',
    discount: '50% OFF',
    description: 'Just Rs. 5 per day - Best value',
    subDescription: 'Best for Learners',
    popular: true,
  },
  {
    name: 'Annual',
    icon: Rocket,
    originalPrice: 1800,
    price: 999,
    period: '12 months',
    savings: 'Save ₹801',
    description: 'Best value for serious investors',
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Plans & <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple, transparent pricing. No auto-renewals. 5-day refund window.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass-card p-6 transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'border-primary ring-2 ring-primary/20 shadow-[var(--shadow-glow)]' : 'hover:border-primary/30'
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="text-center">
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <plan.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-display font-semibold mb-2">
                  {plan.name}
                </h3>

                {/* Savings Badge */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-sm text-primary font-medium">{plan.savings}</span>
                  {plan.discount && (
                    <span className="px-2 py-0.5 bg-loss/20 text-loss text-xs font-semibold rounded">
                      {plan.discount}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl text-muted-foreground line-through">₹{plan.originalPrice}</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-display font-bold text-primary">₹{plan.price}</span>
                    <span className="text-muted-foreground">/ {plan.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-2">{plan.description}</p>
                {plan.subDescription && (
                  <p className="text-primary text-sm font-medium mb-4">{plan.subDescription}</p>
                )}

                <Button
                  className={`w-full ${plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-button)] glow-effect'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground hover:border-primary/50'
                    } font-semibold transition-all duration-300`}
                >
                  Get {plan.name} Plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-6 text-center border-primary/30 neon-border">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-display font-semibold">100% Money-Back Guarantee</h3>
            </div>
            <p className="text-muted-foreground">
              Not satisfied in 5 days? Get your money back, no questions asked. We're confident you'll love it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
