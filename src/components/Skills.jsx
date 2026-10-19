import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
  // Skill icons mapping
  const skillIcons = {
    'HTML5': { slug: 'html5', color: 'E34F26' },
    'CSS3': { slug: 'css3', color: '1572B6' },
    'JavaScript': { slug: 'javascript', color: 'F7DF1E' },
    'React.js': { slug: 'react', color: '61DAFB' },
    'Bootstrap': { slug: 'bootstrap', color: '7952B3' },
    'Tailwind CSS': { slug: 'tailwindcss', color: '06B6D4' },
    'Next.js': { slug: 'nextdotjs', color: 'FFFFFF' },
    'Responsive Design': { slug: 'css3', color: '06B6D4' },
    'Media Queries': { slug: 'css3', color: '38BDF8' },

    'Node.js': { slug: 'nodedotjs', color: '5FA04E' },
    'Express.js': { slug: 'express', color: 'FFFFFF' },
    'REST APIs': { slug: 'postman', color: 'FF6C37' },
    'JWT': { slug: 'jsonwebtokens', color: 'FFFFFF' },
    'Authentication': { slug: 'auth0', color: 'EB5424' },
    'MongoDB': { slug: 'mongodb', color: '47A248' },
    'Mongoose': { slug: 'mongoose', color: '880000' },

    'Git': { slug: 'git', color: 'F05032' },
    'GitHub': { slug: 'github', color: 'FFFFFF' },
    'VS Code': { slug: 'visualstudiocode', color: '007ACC' },
    'Postman': { slug: 'postman', color: 'FF6C37' },
    'Thunder Client': { slug: 'thunderclient', color: '8B5CF6' },
    'npm': { slug: 'npm', color: 'CB3837' },
    'Redux Toolkit': { slug: 'redux', color: '764ABC' },
    'Firebase': { slug: 'firebase', color: 'FFCA28' },
    'Supabase': { slug: 'supabase', color: '3ECF8E' },
  };

  // Category metadata
  const categories = [
    {
      key: 'frontend',
      title: 'Frontend / Web',
      subtitle: 'UI & Client-side Development',
      emoji: '🎨',
      gradient: 'from-cyan-500 to-blue-500',
      accent: 'text-cyan-400',
      dot: 'bg-cyan-400',
      border: 'border-cyan-500/30',
    },
    {
      key: 'backend',
      title: 'Backend / API',
      subtitle: 'Server & Database Management',
      emoji: '⚙️',
      gradient: 'from-green-500 to-emerald-500',
      accent: 'text-green-400',
      dot: 'bg-green-400',
      border: 'border-green-500/30',
    },
    {
      key: 'tools',
      title: 'Tools / State',
      subtitle: 'Development & Management',
      emoji: '🛠️',
      gradient: 'from-purple-500 to-pink-500',
      accent: 'text-purple-400',
      dot: 'bg-purple-400',
      border: 'border-purple-500/30',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Skill Card Component
  const SkillCard = ({ skill, accent }) => {
    const iconData = skillIcons[skill] || {
      slug: 'javascript',
      color: 'F7DF1E',
    };

    const iconUrl = `https://cdn.simpleicons.org/${iconData.slug}/${iconData.color}`;

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8, scale: 1.05 }}
        className="group relative flex flex-col items-center justify-center gap-3 sm:gap-4
          bg-gray-800/40 border border-gray-700/50 rounded-2xl p-3 sm:p-4 md:p-6
          hover:bg-gray-800 hover:border-cyan-500/60
          transition-all duration-300 cursor-default overflow-hidden
          aspect-square w-full min-w-0"
      >
        {/* Glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Inner icon container */}
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-900 border-2 border-gray-700/80 rounded-xl sm:rounded-2xl group-hover:border-cyan-500/60 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300 flex-shrink-0">
          <img
            src={iconUrl}
            alt={skill}
            loading="lazy"
            className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<span class="text-cyan-400 font-bold text-2xl">${skill.charAt(0)}</span>`;
            }}
          />
        </div>

        {/* Skill name */}
        <span
          className={`relative text-xs sm:text-sm md:text-lg font-bold text-center ${accent} group-hover:text-white transition-colors leading-tight break-words max-w-full`}
        >
          {skill}
        </span>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section heading */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-4"></div>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Technologies, tools and frameworks I use to bring ideas to life. 🚀
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12 sm:space-y-16">
          {categories.map((category) => (
            <motion.div key={category.key} variants={itemVariants}>
              {/* Category heading */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 min-w-0">
                <div
                  className={`w-11 h-11 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${category.gradient} rounded-xl sm:rounded-2xl shadow-lg text-xl sm:text-2xl`}
                >
                  {category.emoji}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-0.5">
                    {category.subtitle}
                  </p>
                </div>

                <div
                  className={`ml-auto flex-shrink-0 hidden md:block w-3 h-3 rounded-full ${category.dot} animate-pulse`}
                ></div>
              </div>

              {/* Responsive skill cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 md:gap-8 lg:gap-10">
                {skills[category.key].map((skill) => (
                  <SkillCard
                    key={skill}
                    skill={skill}
                    accent={category.accent}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5"
        >
          {[
            { value: '14+', label: 'Technologies', icon: '⚡' },
            { value: '3+', label: 'Years Coding', icon: '📅' },
            { value: '80+', label: 'Projects Done', icon: '🎯' },
            { value: '100%', label: 'Dedication', icon: '🔥' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-4 sm:p-6 text-center hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 min-w-0"
            >
              <div className="text-2xl sm:text-3xl mb-3">{stat.icon}</div>

              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                {stat.value}
              </div>

              <div className="text-xs sm:text-sm text-gray-400 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
