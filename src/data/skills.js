import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiPostman,
  SiCloudinary,
  SiMysql,
  SiGooglegemini,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc"

export const skillCategories = [
  {
    title: "Frontend",
    description: "Responsive and interactive user interfaces",
    icon: FaReact,
    skills: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },

  {
    title: "Backend",
    description: "Secure APIs and scalable server architecture",
    icon: FaNodeJs,
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: FaDatabase },
      { name: "JWT", icon: FaDatabase },
    ],
  },

  {
    title: "Database",
    description: "Efficient data storage and modeling",
    icon: SiMongodb,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    title: "AI & Tools",
    description: "Modern development workflow",
    icon: SiGooglegemini,
    skills: [
      { name: "Gemini AI", icon: SiGooglegemini },
      { name: "Groq AI", icon: SiGooglegemini },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "AWS", icon: SiCloudinary},
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscode },
    ],
  },
];