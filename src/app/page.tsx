"use client"
import Image from "next/image";

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
    properties: ["Programming Experience", "Web-Framework Experience", "Other Experience", "Personal Skills"],
    value: [
      "Typescript,Javascript,Python,Java,C,C++",
      "NextJs , React",
      "CSS , HTML",
      "Malakas kumantot"
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
          <h1 className="font-mono">Student</h1>
          <h1 className="p-4 text-xl font-mono">A College Student in De La Salle University, currently taking <i>BS in Computer Science Major in Software Technology</i>. I was born on October 1, 2003 in the Philippines. I play video games and do coding projects as part of my free time. <br /> </h1>
          
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
          
        </div>

    </div>
  );
}
