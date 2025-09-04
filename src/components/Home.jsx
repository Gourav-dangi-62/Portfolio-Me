import React from 'react';
import { motion } from "framer-motion";
import mypic from "../../public/mypic.jpg";


const Home = () => {
  return (
    <div name="Home" className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 overflow-hidden">
      
     
      <motion.div
        className="absolute w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -120, 120, 0], y: [0, 80, -80, 0], scale: [1, 1.3, 1, 1.1] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
      />

      
      <div className="relative grid md:grid-cols-2 gap-10 items-center max-w-6xl px-6">
     
        <motion.img 
          src={mypic} 
          alt="Profile" 
          className="rounded-2xl shadow-2xl w-80 h-80 object-cover"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Hi, I’m <span className="text-blue-600">Gourav Dangi</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">
            I’m a passionate developer who loves building modern, responsive, and
            functional web applications. Explore my projects and skills below.
          </p>

          
          
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
