// ==================== PROJECT IMAGES IMPORT ====================
import signupSystemImg from '../assets/Login.png';
import calculatorImg from '../assets/calculator.png';
import aiAssistantImg from '../assets/Ai.png';
import crudApiImg from '../assets/crud.png'
import chatImg from '../assets/chat.png'
import taskflowImg from '../assets/taskflow.png'

// ==================== PERSONAL INFO ====================
export const personalInfo = {
  name: "Azan Azam",
  title: "MERN Stack Developer",
  tagline: "I build high-impact animated websites that don't just look good — they convert, impress and leave a mark.",
  email: "azamazan91@gmail.com",
  phone: "+92 370 0365884",
  location: "Karachi, Pakistan",
  github: "https://github.com/azaanazam",
  linkedin: "https://linkedin.com/in/azan-azam-5b65342bb/",
  portfolio: "https://my-portfolio-rho-nine-26.vercel.app",
};

// ==================== SKILLS ====================
export const skills = {
  frontend: [
    "HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap",
    "Tailwind CSS", "Next.js", "Responsive Design", "Media Queries"
  ],
  backend: [
    "Node.js", "Express.js", "REST APIs", "JWT",
    "Authentication", "MongoDB", "Mongoose"
  ],
  tools: [
    "Git", "GitHub", "VS Code", "Postman", "Thunder Client",
    "npm", "Redux Toolkit", "Firebase", "Supabase"
  ],
};

// ==================== PROJECTS ====================
export const projects = [
  {
    title: "Signup System",
    description: "Full-stack signup system with smooth animations and modern UI.",
    image: signupSystemImg,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "https://login-signup-animaition.vercel.app/",
  },
  {
    title: "Calculator",
    description: "Fully functional calculator with clean UI and keyboard support.",
    image: calculatorImg,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "https://complete-calculator-ten.vercel.app/",
  },
  
  {
    title: "AI Assistant",
    description: "Responsive AI assistant web app with interactive UI and voice-oriented functionality.",
    image: aiAssistantImg,
    tech: ["Express.js", "MongoDB", "Mongoose", "Node.js"],
    github: "#",
    demo: "https://ai-model-odne.vercel.app/",
  },
  {
    title: "Basic CRUD API",
    description: "Express CRUD API covering create, read, update and delete operations.",
    image: crudApiImg,
    tech: ["React", "AI Integration"],
    github: "#",
    demo: "https://github.com/azaanazam/Basic-CRUD-API-Completed",
    
  },
  {
    title: "Frontend Chat App",
    description: "Interactive chat application with a responsive frontend interface.",
    image: chatImg,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    demo: "https://frontend-chat-app-beta.vercel.app",
  },

  {
    title: "TaskFlow — Productivity Dashboard",
    description: "A modern and responsive task management application that helps users organize daily activities, track progress, manage priorities, and stay productive with persistent browser storage.",
    image: taskflowImg,
    tech: ["HTML5","CSS3","JavaScript","LocalStorage","Responsive Design"],
    github: "#",
    demo: "https://taskflow1-vert.vercel.app/",
  },
  
];