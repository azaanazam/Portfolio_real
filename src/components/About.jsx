import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Code2, Rocket, Target, Sparkles } from 'lucide-react';
import profilePic from '../assets/Azan-Portfolio-pic.png';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  // Highlight cards data
  const highlights = [
    {
      icon: <Code2 className="text-cyan-400" size={28} />,
      title: 'Full Stack Developer',
      description: 'Frontend aur backend dono par kaam karta hoon',
    },
    {
      icon: <Rocket className="text-cyan-400" size={28} />,
      title: 'Modern Tech Stack',
      description: 'React, Next.js, Node.js, Express, MongoDB',
    },
    {
      icon: <Target className="text-cyan-400" size={28} />,
      title: 'Problem Solver',
      description: 'Complex tasks ko chhote steps mein todta hoon',
    },
    {
      icon: <Sparkles className="text-cyan-400" size={28} />,
      title: 'Continuous Learner',
      description: 'Naye tools aur techniques seekhta rehta hoon',
    },
  ];

  // Tech stack badges
  const techStack = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
    'Bootstrap',
    'Git',
    'GitHub',
    'REST APIs',
    'npm',
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know the developer behind the code
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Side - Profile Card (2 columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 sticky top-24">
              
              {/* ✅ Profile Image - Hero wali image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                {/* Rotating glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-md opacity-50"></div>
                
                {/* Image */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/30">
                  <img
                    src={profilePic}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-1">
                {personalInfo.name}
              </h3>
              <p className="text-cyan-400 text-center text-sm mb-6">
                {personalInfo.title}
              </p>

              {/* Quick Info */}
              <div className="space-y-3 border-t border-gray-700 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Experience</span>
                  <span className="font-semibold">3+ Years</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Projects</span>
                  <span className="font-semibold">80+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Location</span>
                  <span className="font-semibold">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Status</span>
                  <span className="font-semibold text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content (3 columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
            
            {/* Intro */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors">
              <p className="text-gray-300 leading-relaxed">
                Hello! I'm a passionate and aspiring{' '}
                <span className="text-cyan-400 font-semibold">Full Stack Developer</span> who
                enjoys transforming ideas into modern, interactive, and user-friendly web
                applications. I have a strong interest in web development and technology, and I am
                continuously working to improve my programming skills, explore new tools, and build
                meaningful digital experiences.
              </p>
            </div>

            {/* Journey */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors">
              <p className="text-gray-300 leading-relaxed">
                My journey in web development has introduced me to both frontend and backend
                technologies, allowing me to understand how websites and web applications are
                designed, developed, and maintained. I enjoy creating clean user interfaces,
                developing responsive layouts, implementing application functionality, and
                connecting frontend applications with backend services to build complete web
                solutions.
              </p>
            </div>

            {/* Problem Solving */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors">
              <p className="text-gray-300 leading-relaxed">
                One of the things I enjoy most about development is{' '}
                <span className="text-cyan-400 font-semibold">solving problems</span>. I like
                breaking complex tasks into smaller, manageable steps, understanding how different
                components work together, and finding practical solutions to technical challenges.
                For me, programming is not just about writing code; it is about understanding a
                problem, thinking logically, and creating something useful that provides value to
                its users.
              </p>
            </div>

            {/* Growth Mindset */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors">
              <p className="text-gray-300 leading-relaxed">
                I am continuously strengthening my skills through hands-on practice, personal
                projects, and learning modern development techniques. Beyond technical skills, I
                believe that{' '}
                <span className="text-cyan-400 font-semibold">
                  consistency, creativity, communication, teamwork, and a willingness to learn
                </span>{' '}
                are important qualities for success in the software development industry.
              </p>
            </div>

            {/* Goal */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-6">
              <p className="text-gray-200 leading-relaxed italic">
                "For me, every project is an opportunity to learn something new, solve a problem,
                and take another step forward in my development journey."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          variants={itemVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Technologies I <span className="text-cyan-400">Work With</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;