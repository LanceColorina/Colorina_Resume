"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const aboutMe = {
    properties: ["Age", "Interests", "Nationality", "Languages", "Birthdate"],
    value: [
      20,
      "Video Games , Creating Websites",
      "Filipino",
      "Tagalog and English",
      "October 1, 2003"
    ]
  };

  const skills = {
    properties: ["Programming Experience",
                 "Web-Framework Experience", 
                 "Other Experience",
                 "Personal Skills" ],
    value: [
      "Typescript,Javascript,Python,Java,C,C++",
      "NextJs , React",
      "CSS , HTML , SQL , Python",
      "Goal-Oriented , Time-Management"
    ]
  };

  return (
    <div className="bg-gradient-to-r from-neutral-50 via-neutral-100 to-neutral-200 p-7">
      <div className=" m-16 h-[500px] flex flex-row items-center  bg-gray-200 shadow-2xl  rounded-2xl">
        <section className="w-1/2 flex justify-center items-center rounded-2xl rounded-r-[300px] h-[500px] bg-gray-300 ">
          <div className="rounded-full hover:scale-110 duration-500  bg-slate-500 container flex justify-center items-center relative w-80 h-80">
            <Image src="/profile.jpg" width={280} height={150} alt="Picture of the author" className="rounded-full " />
          </div>
        </section>
        <section className="w-1/2 pl- flex flex-col items-center justify-center relative h-full bg-gray-200 pb-32 pt-32 m-5 ">
          <h1 className="text-4xl mb-4 "><span className="font-semibold font-mono">Lance Colorina</span></h1>
          <div className="border-black w-3/4 border-b-4 border-solid mb-4"></div>
          <h1 className="font-mono">Programmer</h1>
          <h1 className="p-4 text-xl font-mono">A hardworking programmer with 1.5+ years of experience creating , designing , and testing web applications. Developed and collaborated ample software projects used by various organizarions and communities</h1>
          
        </section>
        </div>
        <div className=" m-16 h-[500px] flex flex-col rounded-xl border-gray-800">
          <div className="flex">
            <div className="text-4xl font-bold text-black pb-2 m-5 w-1/2 font-mono">About me</div>
            <div className="text-4xl font-bold text-black pb-2 m-5 w-1/2 font-mono">Skills</div>
          </div>
          <div className=" border-y-black border-b-4 border-solid ml-5 mr-5"></div>
          <div className="flex">

            <div className="flex flex-col w-1/2">
              {aboutMe.properties.map((property, index) => (
                <div key={property} className="flex flex-row m-5 text-xl font-medium font-mono">
                  <div className="text-black">{property}<span className="pl-2 pr-2">:</span></div>
                  <div className="text-black">{aboutMe.value[index]}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col w-1/2 ">
              {skills.properties.map((property, index) => (
                <div key={property} className="flex flex-row m-5 text-xl font-medium font-mono">
                  <div className="text-black">{property}<span className="pl-2 pr-2">:</span></div>
                  <div className="text-black">{skills.value[index]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" m-16 h-[500px] flex flex-col rounded-xl border-gray-800">
          <div className="text-4xl font-bold text-black pb-2 m-5 w-1/2 font-mono">Education</div>
          <div className=" border-y-black border-b-4 border-solid ml-5 mr-5"></div>
          <Link href="https://www.dlsu.edu.ph/" className="hover:scale-105  duration-300">
            <div className="p-2 flex">
              <Image src="/dlsu.png" width={300} height={150} alt="Picture of the author" className="rounded-full w-1/6" />
              <div className="flex-col w-5/6 font-mono p-3">
                <div className="flex justify-between ">
                  <div className="p-2 text-3xl font-bold">BS in Computer Science Major in Software Technology</div>
                  <div className="p-2 text-2xl font-bold rounded-xl bg-slate-400">2026</div>
                </div>
                <div className="p-2 text-xl"> De La Salle University</div>
              </div>
            </div>
          </Link>
        </div>

    </div>
  );
}
