import { Instagram, Mail, TrendingUp } from 'lucide-react';

const footerLinks = [
  { label: 'Terms & Conditions', href: 'http://stonkzz.com/terms-conditions' },
  { label: 'Privacy Policy', href: 'http://stonkzz.com/privacy-policy' },
  { label: 'Refund Policy', href: 'http://stonkzz.com/refund-policy' },
  { label: 'Disclaimer', href: 'http://stonkzz.com/disclaimer' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/stonkzz._/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:thestonkzz@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-lg">Stonkzz</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all border border-transparent hover:border-primary/30"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stonkzz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
