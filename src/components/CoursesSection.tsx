import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, BarChart3, Target, Clock, Users, ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    icon: BookOpen,
    title: 'Stock Market Basics',
    description: 'Learn the fundamentals of stock markets, how they work, and basic terminology every investor should know.',
    duration: '4 hours',
    students: '2,500+',
    level: 'Beginner',
  },
  {
    icon: TrendingUp,
    title: 'Technical Analysis Mastery',
    description: 'Master candlestick patterns, chart analysis, support & resistance, and key technical indicators.',
    duration: '8 hours',
    students: '1,800+',
    level: 'Intermediate',
  },
  {
    icon: BarChart3,
    title: 'Options Trading Pro',
    description: 'Deep dive into options strategies, Greeks, risk management, and advanced trading techniques.',
    duration: '12 hours',
    students: '950+',
    level: 'Advanced',
  },
  {
    icon: Target,
    title: 'Intraday Trading Strategies',
    description: 'Learn proven intraday strategies, entry/exit points, and money management for day traders.',
    duration: '6 hours',
    students: '1,200+',
    level: 'Intermediate',
  },
];

const levelColors = {
  Beginner: 'bg-primary/20 text-primary border-primary/30',
  Intermediate: 'bg-neutral/20 text-neutral border-neutral/30',
  Advanced: 'bg-loss/20 text-loss border-loss/30',
};

export function CoursesSection() {
  return (
    <section id="courses" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Learning Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Level Up Your <span className="gradient-text">Trading Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive courses designed by market experts to help you become a confident and profitable trader.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <course.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-display font-semibold">{course.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full border ${levelColors[course.level as keyof typeof levelColors]}`}>
                      {course.level}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-primary" />
                      {course.students}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[var(--shadow-button)] glow-effect group"
          >
            Explore All Courses
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            All courses include lifetime access and certificate of completion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
