import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { AuthModal } from './AuthModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import logo from '@/assets/stonkz-logo.svg';

const navLinks = [
  { label: 'How it Works', href: 'how-it-works' },
  { label: 'Features', href: 'features' },
  { label: 'Courses', href: 'courses' },
  { label: 'Pricing', href: 'pricing' },
  { label: 'Contact', href: 'contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Auth temporarily disabled per user request
  // const [user, setUser] = useState<User | null>(null);

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setUser(session?.user ?? null);
  //   });

  //   return () => subscription.unsubscribe();
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/?scrollTo=${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/70 backdrop-blur-xl border-b border-white/5'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20 lg:h-24'}`}>
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 group shrink-0">
            <img
              src={logo}
              alt="Stonkzz Logo"
              className="h-9 lg:h-10 w-auto filter brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                initial="initial"
                whileHover="hover"
                className="relative text-[15px] font-medium text-white/70 hover:text-white transition-all duration-200 opacity-80 hover:opacity-100 py-1"
              >
                <motion.span
                  variants={{
                    initial: { textShadow: "0 0 0px rgba(168, 85, 247, 0)", scale: 1 },
                    hover: { textShadow: "0 0 8px rgb(168, 85, 247)", scale: 1.05 }
                  }}
                >
                  {link.label}
                </motion.span>
                <motion.div
                  variants={{
                    initial: { width: "0%", opacity: 0 },
                    hover: { width: "100%", opacity: 1 }
                  }}
                  className="absolute bottom-0 left-0 h-[2px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-white text-black hover:bg-white/90 px-7 h-10 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Join Stonkzz
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[60px] bg-black z-40 lg:hidden px-10 pt-10"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-white/5 pb-4">
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    initial="initial"
                    whileHover="hover"
                    className="relative text-2xl font-semibold text-white/90 hover:text-white transition-all duration-200 w-full text-left py-1"
                  >
                    <motion.span
                      variants={{
                        initial: { textShadow: "0 0 0px rgba(168, 85, 247, 0)", scale: 1 },
                        hover: { textShadow: "0 0 8px rgb(168, 85, 247)", scale: 1.02 }
                      }}
                    >
                      {link.label}
                    </motion.span>
                    <motion.div
                      variants={{
                        initial: { width: "0%", opacity: 0 },
                        hover: { width: "100%", opacity: 1 }
                      }}
                      className="absolute bottom-0 left-0 h-[3px] bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                    />
                  </motion.button>
                </div>
              ))}
              <Button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-full bg-white text-black h-12 rounded-full font-bold text-lg mt-8"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </motion.nav>
  );
}
