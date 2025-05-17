"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const aboutMe = {
    properties: ["Age", "Interests", "Nationality", "Languages", "Birthdate"],
    value: [
      20,
      "Video Games , Creating Websites",
      "Filipino",
      "Tagalog and English",
      "October 1, 2003",
    ],
  };

  const skills = {
    properties: [
      "Programming Experience",
      "Web-Framework Experience",
      "Other Experience",
      "Personal Skills"
    ],
    value: [
      ["/typescript.png", "/javascript.png", "/python.png", "/java.png", "/c.png", "/cpp.png"],
      ["/nextjs.png", "/react.png"],
      ["/css.png", "/sql.png"],
      ["Goal-Oriented", "Time-Management"]
    ]
  };
  

  return (
    <div className="bg-gradient-to-r from-neutral-50 via-neutral-100 to-neutral-200 p-7">
      {/* Profile Section */}
      <motion.div
        className="m-16 h-[500px] flex flex-row items-center bg-gray-200 shadow-2xl rounded-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.section
          className="w-1/2 flex justify-center items-center rounded-2xl rounded-r-[300px] h-[500px] bg-gray-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-full bg-slate-500 container flex justify-center items-center relative w-80 h-80"
          >
            <Image
              src="/profile.jpg"
              width={280}
              height={150}
              alt="Picture of the author"
              className="rounded-full"
            />
          </motion.div>
        </motion.section>

        {/* Description */}
        <motion.section
          className="w-1/2 flex flex-col items-center justify-center h-full bg-gray-200 pb-32 pt-32 m-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl mb-4 font-semibold font-mono">
            Lance Colorina
          </h1>
          <div className="border-black w-3/4 border-b-4 border-solid mb-4"></div>
          <h1 className="font-mono">Programmer</h1>
          <h1 className="p-4 text-xl font-mono text-center">
            A hardworking programmer with 3+ years of experience creating,
            designing, and testing web applications. Developed and collaborated
            on ample software projects used by various organizations and
            communities.
          </h1>
        </motion.section>
      </motion.div>

      {/* About + Skills Section */}
      <motion.div
      className="m-16 h-[500px] flex flex-col rounded-xl border-gray-800"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex">
        <div className="text-4xl font-bold text-black pb-2 m-5 w-1/2 font-mono">
          About Me
        </div>
        <div className="text-4xl font-bold text-black pb-2 m-5 w-1/2 font-mono">
          Skills
        </div>
      </div>

      <div className="border-y-black border-b-4 border-solid ml-5 mr-5"></div>

      <div className="flex">
        {/* About Me Section */}
        <div className="flex flex-col w-1/2">
          {aboutMe.properties.map((property, index) => (
            <motion.div
              key={property}
              className="flex flex-row m-5 text-xl font-medium font-mono"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-black">
                {property}
                <span className="pl-2 pr-2">:</span>
              </div>
              <div className="text-black">{aboutMe.value[index]}</div>
            </motion.div>
          ))}
        </div>

    {/* Skills Section with Icons */}
    <div className="flex flex-col w-1/2">
          {skills.properties.map((property, index) => (
            <motion.div
              key={property}
              className="flex flex-row m-5 text-xl font-medium font-mono"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-black w-1/3">
                {property}
                <span className="pl-2 pr-2">:</span>
              </div>

              <div className="flex flex-wrap gap-2 items-center w-2/3">
                {Array.isArray(skills.value[index]) ? (
                  skills.value[index].map((item, idx) =>
                    typeof item === "string" && item.endsWith(".png") ? (
                      <Image
                        key={idx}
                        src={item}
                        alt={property}
                        width={32}
                        height={32}
                        className="hover:scale-110 transition-transform mx-2"
                      />
                    ) : (
                      <span key={idx} className="text-black">{item}</span>
                    )
                  )
                ) : (
                  <span className="text-black">{skills.value[index]}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>


      {/* Education */}
      <motion.div
        className="m-16 h-[500px] flex flex-col rounded-xl border-gray-800"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-4xl font-bold text-black pb-2 m-5 w-1/2 font-mono">
          Education
        </div>
        <div className="border-y-black border-b-4 border-solid ml-5 mr-5"></div>

        <Link
          href="https://www.dlsu.edu.ph/"
          className="hover:scale-105 duration-300"
        >
          <motion.div
            className="p-2 flex"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src="/dlsu.png"
              width={300}
              height={150}
              alt="DLSU Logo"
              className="rounded-full w-1/6"
            />
            <div className="flex-col w-5/6 font-mono p-3">
              <div className="flex justify-between">
                <div className="p-2 text-3xl font-bold">
                  BS in Computer Science Major in Software Technology
                </div>
                <div className="p-2 text-2xl font-bold rounded-xl bg-slate-400">
                  2026
                </div>
              </div>
              <div className="p-2 text-xl">De La Salle University</div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
