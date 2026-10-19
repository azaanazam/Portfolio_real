import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Download, ArrowDown, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import profilePic from '../assets/Azan-Portfolio-pic.png';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Stats data
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '80+', label: 'Projects' },
    { value: '100%', label: 'Happy Clients' },
  ];

  // Social links
  const socials = [
    { icon: <GithubIcon size={20} />, link: personalInfo.github, label: 'GitHub' },
    { icon: <LinkedinIcon size={20} />, link: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={20} />, link: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: <Phone size={20} />, link: `tel:${personalInfo.phone}`, label: 'Phone' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ==================== LEFT SIDE - TEXT CONTENT ==================== */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-cyan-300">Available for work</span>
            </motion.div>

            {/* Greeting Text */}
            <motion.p
              variants={itemVariants}
              className="text-cyan-400 font-medium mb-3 text-lg"
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {personalInfo.name.split(' ')[1]}
              </span>
            </motion.h1>

            {/* Role / Title */}
            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-12"
            >
              <span className="text-cyan-400">&lt;/&gt;</span>{' '}
              {personalInfo.title}
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              {/* Hire Me Button */}
              <a
                href="#contact"
                className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </a>

              {/* ✅ Download CV Button - FIXED */}
              <a
                href="/Azan-Azam-CV.pdf"
                download="Azan-Azam-CV.pdf"
                className="group px-8 py-3 border-2 border-cyan-500 rounded-full font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center bg-gray-800/50 border border-gray-700 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center lg:text-left border-l-2 border-cyan-500/30 pl-3"
                >
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ==================== RIGHT SIDE - PROFILE IMAGE ==================== */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Rotating Gradient Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              ></motion.div>

              {/* Profile Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={profilePic}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge - Top Right */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-gray-900 border border-cyan-500/50 rounded-2xl px-4 py-3 shadow-lg shadow-cyan-500/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚛️</span>
                  <div>
                    <div className="text-xs text-gray-400">Specialist</div>
                    <div className="text-sm font-bold text-cyan-400">React.js</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom Left */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-gray-900 border border-blue-500/50 rounded-2xl px-4 py-3 shadow-lg shadow-blue-500/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <div className="text-xs text-gray-400">MERN</div>
                    <div className="text-sm font-bold text-blue-400">Stack Dev</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Top Left */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 -left-8 bg-gray-900 border border-green-500/50 rounded-2xl px-3 py-2 shadow-lg shadow-green-500/20 backdrop-blur-sm hidden md:block"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs font-semibold text-green-400">Open to Work</span>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom Right */}
              <motion.div
                animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-10 -right-8 bg-gray-900 border border-purple-500/50 rounded-2xl px-3 py-2 shadow-lg shadow-purple-500/20 backdrop-blur-sm hidden md:block"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">💻</span>
                  <span className="text-xs font-semibold text-purple-400">3+ Years Exp</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ==================== SCROLL DOWN INDICATOR ==================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-600 group-hover:border-cyan-400 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;