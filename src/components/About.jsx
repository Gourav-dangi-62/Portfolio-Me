import React from "react";
import { motion } from "framer-motion";
import mypic from "../../public/mypic.jpg";

function About() {
  return (
    <div
      name="About"
      className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        
        <motion.img

          src= {mypic }
          alt="About Me"
          className="rounded-2xl shadow-2xl w-full h-96 object-cover mt-5 "
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 70, duration: 1 }}
          viewport={{ once: true }}
        />

          
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-800"
          >
            About <span className="text-blue-500">Me</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-600"
          >
            Hi, I’m <span className="font-semibold text-blue-4  00">Gourav Dangi</span>.  
            I’m a passionate web developer who loves creating modern, responsive,  
            and user-friendly applications. My goal is to design clean interfaces  
            and build full-stack apps that solve real-world problems.
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-600"
          >
            I specialize in technologies like <span className="text-blue-500"> JavaScript, React, Node.js, Express, MongoDB and SQl</span>.  
            I also enjoy working with tools like Tailwind CSS, GitHub, and Figma  
            to bring ideas to life.
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-600"
          >
            Outside of coding, I enjoy learning new technologies, collaborating on projects,  
            and constantly improving my skills to grow as a developer.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
