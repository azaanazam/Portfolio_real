import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Heart, ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const Footer = () => {
  // Current year
  const currentYear = new Date().getFullYear();

  // Quick links
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Social links
  const socials = [
    {
      icon: <GithubIcon size={18} />,
      link: personalInfo.github,
      label: 'GitHub',
    },
    {
      icon: <LinkedinIcon size={18} />,
      link: personalInfo.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={18} />,
      link: `mailto:${personalInfo.email}`,
      label: 'Email',
    },
    {
      icon: <Phone size={18} />,
      link: `tel:${personalInfo.phone}`,
      label: 'Phone',
    },
  ];

  // Back to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-950 text-white border-t border-gray-800 overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* ==================== MAIN FOOTER CONTENT ==================== */}
      <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* ==================== COLUMN 1 - BRAND / ABOUT ==================== */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 text-2xl font-bold mb-4 group"
            >
              <Code2 className="text-cyan-400 group-hover:rotate-12 transition-transform" size={28} />
              <span>
                {personalInfo.name.split(' ')[0]}
                <span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {personalInfo.title} passionate about building modern, interactive, and
              user-friendly web applications. Let's turn ideas into reality through code.
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <MapPin size={16} className="text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ==================== COLUMN 2 - QUICK LINKS ==================== */}
          <div className="md:pl-10">
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-cyan-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ==================== COLUMN 3 - CONTACT ==================== */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-cyan-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 text-sm transition-colors group"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg group-hover:border-cyan-500 transition-colors">
                    <Mail size={14} className="text-cyan-400" />
                  </span>
                  <span className="break-all">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 text-sm transition-colors group"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg group-hover:border-cyan-500 transition-colors">
                    <Phone size={14} className="text-cyan-400" />
                  </span>
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 text-sm transition-colors group"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg group-hover:border-cyan-500 transition-colors">
                    <GithubIcon size={14} className="text-cyan-400" />
                  </span>
                  <span>github.com/azaanazam</span>
                </a>
              </li>
            </ul>

            {/* Availability Badge */}
            <div className="mt-5 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs text-green-400 font-medium">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== BOTTOM BAR ==================== */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left flex items-center gap-1.5 flex-wrap justify-center">
            © {currentYear} {personalInfo.name}. Made with
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            using React & Tailwind
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to Top</span>
            <span className="w-8 h-8 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg group-hover:border-cyan-500 group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp size={16} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;