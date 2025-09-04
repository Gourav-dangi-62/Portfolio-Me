import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Gourav-dangi-62",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    Icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "dangigourav75@gmail.com",
    Icon: HiOutlineMail,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/gouravdangi_",
    Icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-100 to-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"
        >
          Let’s Connect
        </motion.h2>

        {/* Social Links */}
        <div className="flex gap-8 mb-8">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.3, y: -5, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white rounded-full shadow-md border border-gray-300 hover:shadow-xl transition"
            >
              <s.Icon className="text-3xl text-gray-800" />
            </motion.a>
          ))}
        </div>

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 1 }}
          className="h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full mb-6"
        />

        {/* Bottom text */}
        <p className="text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} Gourav Dangi — Built with ❤️ using React & Tailwind
        </p>
      </div>
    </footer>
  );
}
  