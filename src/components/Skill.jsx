import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMysql, SiMongodb,
  SiExpress, SiBootstrap, SiTailwindcss, SiGit,
  SiGithub, SiPostman,
} from "react-icons/si";

function Skill() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-6xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-6xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-6xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-6xl" /> },
    { name: "React", icon: <SiReact className="text-cyan-400 text-6xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-6xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-700 text-6xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-6xl" /> },
    { name: "SQL (MySQL)", icon: <SiMysql className="text-blue-600 text-6xl" /> },
    { name: "Git", icon: <SiGit className="text-red-500 text-6xl" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-900 text-6xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400 text-6xl" /> },
  
    
  ];

 
  const float = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div name="Skill" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      

      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-indigo-300 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />


      <motion.h1
        className="text-5xl font-extrabold text-gray-800 mb-14 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          My Skills
        </span>
      </motion.h1>

      
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center group"
            variants={{
              hidden: { opacity: 0, scale: 0.5, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0 }
            }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{
              scale: 1.2,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
          >
          
            <motion.div
              variants={float}
              animate="animate"
              className="transition-all group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.8)]"
            >
              {skill.icon}
            </motion.div>
            <p className="mt-3 text-gray-700 font-semibold text-lg group-hover:text-indigo-600 transition">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skill;
