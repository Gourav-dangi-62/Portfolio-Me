import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skill" },
    { id: 5, text: "Contacts" },
  ];

  return (
    <>
      
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white"
      >
        <div className="flex justify-between items-center h-16">
       
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex space-x-2 items-center"
          >
            <img src={pic} className="h-12 w-12 rounded-full shadow-md" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Gourav<span className="text-green-500 text-2xl">l</span>
              <p className="text-sm text-gray-600">Web Developer</p>
            </h1>
          </motion.div>

          
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }, index) => (
                <motion.li
                  key={id}
                  whileHover={{ scale: 1.2, color: "#10b981" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer font-medium text-gray-700 hover:text-green-500"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>

            
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
            </div>
          </div>
        </div>

     
        {menu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white shadow-md"
          >
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-6 text-2xl font-semibold">
              {navItems.map(({ id, text }) => (
                <motion.li
                  key={id}
                  whileHover={{ scale: 1.1, color: "#10b981" }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default Navbar;
