"use client"
import Link from "next/link";


const Footer = () => {


  return (
    <footer className="bg-gray-900 ">
      <div className="container mx-auto flex-col justify-start items-center py-4 px-4 ">
        <div className="text-white my-2 font-mono"><i className="bi bi-telephone-fill pr-2 "></i>9688661111</div>
        <div className="text-white my-2 font-mono" ><i className="bi bi-envelope-at-fill pr-2"></i>colorinalance@gmail.com</div>
        <div className="text-white my-2 font-mono"><i className="bi bi-geo-alt-fill pr-2"></i>Makati City, Philippines</div>
      </div>
    </footer>
  );
};

export default Footer;