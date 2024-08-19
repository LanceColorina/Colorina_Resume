"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect} from "react";
import { usePathname, useSearchParams } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 ">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <div className="flex items-center hover:scale-150 duration-500 ">
          <Link href="/"><p className="text-white font-bold text-3xl "><i className="bi bi-house-door-fill "></i></p></Link>
        </div>
        <div className="hidden md:flex space-x-8  pt-2 pb-2 pl-3 pr-3 ">
          <Link href="/projects" className=" hover:bg-slate-600  rounded p-1 text-white hover:scale-110 text-xl font-bold duration-300 font-mono">Projects</Link>
          <Link href="/contacts" className=" hover:bg-slate-600  rounded  p-1 text-white hover:scale-110 text-xl font-bold duration-300 font-mono">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
