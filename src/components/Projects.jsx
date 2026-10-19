import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const Projects = () => {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* ==================== SECTION HEADING ==================== */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've built — from full-stack apps to frontend
            experiments. Each one taught me something new. 🚀
          </p>
        </motion.div>

        {/* ==================== PROJECTS GRID ==================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 flex flex-col"
            >
              {/* ==================== PROJECT IMAGE ==================== */}
              <div className="relative h-52 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.tech[0]}
                </div>
              </div>

              {/* ==================== PROJECT DETAILS ==================== */}
              <div className="p-6 flex flex-col flex-1">
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ==================== ACTION BUTTONS ==================== */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-white hover:border-cyan-500 hover:bg-gray-800 transition-all duration-300"
                    >
                      <GithubIcon size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==================== BOTTOM CTA ==================== */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of my work? Check out my GitHub profile.
          </p>
          <a
            href="https://github.com/azaanazam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <GithubIcon size={18} />
            Visit My GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;