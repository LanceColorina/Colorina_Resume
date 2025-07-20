"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-10 py-5 shadow-xl">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Visual Icon or Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-5xl font-bold tracking-wider animate-pulse font-mono"
        >
          LANCE
        </motion.div>

        {/* Right Glowing Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl font-bold font-mono"
        >
          PORTFOLIO
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
