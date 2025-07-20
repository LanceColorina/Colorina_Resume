"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-10 font-mono">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Contact Info */}
        <div className="space-y-2">
          <div><i className="bi bi-telephone-fill pr-2"></i>+63 968 866 1111</div>
          <div><i className="bi bi-envelope-at-fill pr-2"></i>colorinalance@gmail.com</div>
          <div><i className="bi bi-geo-alt-fill pr-2"></i>Makati City, Philippines</div>
        </div>

        {/* Social Links (Optional) */}
        <div className="space-x-4 flex">
          <Link href="https://github.com/LanceColorina" target="_blank" aria-label="GitHub">
            <i className="bi bi-github hover:text-cyan-400 text-xl"></i>
          </Link>
          <Link href="https://www.linkedin.com/in/lance-colorina-192862323/" target="_blank" aria-label="LinkedIn">
            <i className="bi bi-linkedin hover:text-blue-400 text-xl"></i>
          </Link>
          <Link href="mailto:colorinalance@gmail.com" aria-label="Email">
            <i className="bi bi-envelope-fill hover:text-yellow-400 text-xl"></i>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Lance Colorina. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;