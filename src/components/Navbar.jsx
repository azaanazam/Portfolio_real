import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation links
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Social links
  const socials = [
    { icon: <GithubIcon size={18} />, link: personalInfo.github, label: 'GitHub' },
    { icon: <LinkedinIcon size={18} />, link: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={18} />, link: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  // ==================== SCROLL EFFECT ====================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ==================== LOCK BODY SCROLL ====================
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ==================== SMOOTH SCROLL ====================
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 100; // Navbar offset badha diya
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/90 backdrop-blur-xl border-b border-gray-800 shadow-lg shadow-black/30 py-4'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* ==================== LOGO ==================== */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white group"
          >
            <span className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
              <Code2 size={26} className="text-white" />
            </span>
            <span>
              {personalInfo.name.split(' ')[0]}
              <span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* ==================== DESKTOP NAVIGATION ==================== */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative px-5 py-3 text-base font-semibold transition-colors duration-300 rounded-xl ${
                      isActive
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {link.label}
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/40 rounded-xl -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ==================== RIGHT SIDE ACTIONS ==================== */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Icons */}
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-800 border border-transparent hover:border-gray-700 rounded-xl transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}

            {/* Hire Me Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="ml-3 px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-base font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* ==================== MOBILE MENU BUTTON ==================== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden w-12 h-12 flex items-center justify-center text-white bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* ==================== MOBILE MENU ==================== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gray-900 border-l border-gray-800 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-7">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-800">
                  <div className="flex items-center gap-3 text-xl font-bold text-white">
                    <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                      <Code2 size={20} />
                    </span>
                    <span>
                      {personalInfo.name.split(' ')[0]}
                      <span className="text-cyan-400">.</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white bg-gray-800 border border-gray-700 rounded-xl transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <ul className="space-y-2 mb-10">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className={`flex items-center justify-between px-5 py-4 rounded-xl font-semibold text-base transition-all duration-300 group ${
                            isActive
                              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                              : 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                          }`}
                        >
                          <span>{link.label}</span>
                          <span
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              isActive
                                ? 'bg-cyan-400'
                                : 'bg-gray-600 group-hover:bg-cyan-400'
                            }`}
                          ></span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Hire Me Button */}
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 mb-10"
                >
                  Hire Me
                </a>

                {/* Social Icons */}
                <div className="pt-7 border-t border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 flex items-center justify-center text-gray-400 bg-gray-800 border border-gray-700 rounded-xl hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-9 pt-7 border-t border-gray-800">
                  <p className="text-xs text-gray-500 mb-3">Email me at</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base text-cyan-400 hover:underline break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;