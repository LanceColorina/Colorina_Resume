"use client";
// APQ and PCK Results
// Reflection on APQ and PCK
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
  const organizations = [
  {
    name: "Archers Network",
    department: "Media Management",
    role: "Website Manager",
    rank: "Regular Staffer",
    hierarchy: [
      "Intern",
      "Regular Staffer",
      "Senior Staffer",
      "Vice Head",
      "Head / Executive Board",
      "Top 3",
    ],
    description:
      "Contributed to the development and maintenance of the organization’s main website by building and improving frontend components. Collaborated with designers and fellow developers to ensure responsive layouts, clean UI, and consistent branding across pages.",
  },
];

  const skills = {
    properties: [
      "Programming Experience",
      "Web-Framework Experience",
      "Other Experience",
      "Personal Skills"
    ],
    value: [
      ["/typescript.png", "/javascript.png", "/python.png", "/java.png", "/c.png", "/cpp.png"],
      ["/nextjs.png", "/react.png", "/handlebars.png", "/expressjs.png", "/tailwindcss.png", ],
      ["/css.png", "/sql.png", "/mongodb.png", "/git.png", "/docker.png"],
      ["Goal-Oriented", "Time-Management", "Self-Motivated", "Strong Work Ethic", "Fast Learner"]
    ]
  };
  
  const projects = [
  {
    title: "Everything Sale Inventory",
    role: "Frontend Developer",
    description:
      "Developed a web app to track stocks, orders, and trends using Express.js, Handlebars, TailwindCSS, and MongoDB. Maintained automated tests with Jest and worked closely with UI/UX.",
  },
  {
    title: "Bridge Builders",
    role: "Quality Assurance",
    description:
      "Tested NGO workflows end-to-end. Designed and executed test cases, performed exploratory testing, and reported bugs using Jira.",
  },
  {
    title: "GreenHub Forum",
    role: "Full-Stack Developer",
    description:
      "Built a full-stack student forum with Next.js, TailwindCSS, and MongoDB. Enabled responsive UI and real-time communication.",
  },
  {
    title: "PhillexBot Legal Chatbot",
    role: "AI Developer",
    description:
      "Created a chatbot using Streamlit, Qdrant, and LEGAL-BERT to answer legal questions on contracts and rentals with chunk-based retrieval.",
  },
  {
    title: "Steam Game Recommendation Dashboard",
    role: "Full-Stack Developer",
    description:
      "Built a web app to explore Steam games using MySQL and Next.js. Used OLAP techniques and Playwright for testing and performance.",
  },
];

const resumePreview = "/resume_preview.png";

const pckReflection = {
  title: "Reflection on PCK Results",
  content: `
    Reflecting on my assessment results, I gained a clearer understanding of the kind of work environment and roles where I can thrive. My top work values Achievement, Recognition, and Support align with careers that allow me to pursue challenging goals, be acknowledged for my efforts, and collaborate within structured support systems. This suggests I am driven by purpose and growth, but also value guidance and acknowledgment in the workplace.
My occupational interests point toward Conventional and Realistic domains, which means I’m naturally inclined toward organized, detail-oriented work that follows clear procedures, as well as hands-on problem-solving involving tools, data, or real-world systems. This interest confirms my affinity for logical, structured tasks and reinforces the importance of clarity and stability in my chosen path.
Cognitively, my strong skills in numerical reasoning, verbal comprehension, spatial recognition, and clerical accuracy suggest that I’m equipped to take on intellectually demanding roles, especially those requiring attention to detail, problem-solving, and communication. With these insights, I’m more confident in aligning my career path with roles that balance technical precision, analytical thinking, and a sense of purpose, such as programming, data analysis, or systems design.

  `
};

  return (
    <div className="bg-gradient-to-r from-neutral-50 via-neutral-100 to-neutral-200 p-7">
      {/* Profile Section */}
      <motion.div
        className="m-8 md:m-16 flex flex-col md:flex-row items-center bg-gray-100 shadow-2xl rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <motion.section
          className="w-full md:w-1/2 flex justify-center items-center bg-gradient-to-br from-gray-300 to-gray-400 p-10"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-full overflow-hidden border-4 border-white shadow-lg w-60 h-60 md:w-72 md:h-72 flex justify-center items-center"
          >
            <Image
              src="/profile.jpg"
              width={280}
              height={280}
              alt="Lance Colorina"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.section>

        {/* Description Section */}
        <motion.section
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left p-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-gray-800 mb-2">
            Lance Colorina
          </h1>
          <div className="h-1 w-24 bg-slate-800 mb-4 rounded"></div>
          <h2 className="text-lg font-semibold font-mono text-gray-700 mb-4">
            Programmer & Software Developer
          </h2>
          <p className="text-md md:text-lg font-mono text-gray-600 leading-relaxed max-w-xl">
            A passionate programmer with 3+ years of experience in designing,
            developing, and testing web applications. Proven success in collaborating
            with teams and building systems used by various organizations and
            communities. Driven by curiosity, detail, and clean code.
          </p>
        </motion.section>
      </motion.div>

      {/* About Me + Skills Section */}
        <motion.div
          className="m-8 md:m-16 px-8 py-10 bg-gray-100 rounded-3xl shadow-xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <h2 className="text-4xl font-bold text-gray-800 font-mono mb-4 md:mb-0">
              About Me
            </h2>
            <h2 className="text-4xl font-bold text-gray-800 font-mono">
              Skills
            </h2>
          </div>

          <div className="border-b-4 border-gray-700 mb-8 w-full"></div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* About Me */}
            <div className="w-full md:w-1/2 space-y-4">
              {aboutMe.properties.map((property, index) => (
                <motion.div
                  key={property}
                  className="text-lg md:text-xl font-mono flex flex-row"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="font-semibold text-gray-700 w-[150px]">
                    {property}:
                  </span>
                  <span className="text-gray-800">{aboutMe.value[index]}</span>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div className="w-full md:w-1/2 space-y-6">
              {skills.properties.map((property, index) => (
                <motion.div
                  key={property}
                  className="text-lg md:text-xl font-mono"
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="font-semibold text-gray-700 mb-1">{property}:</div>
                  <div className="flex flex-wrap gap-3 items-center">
                    {Array.isArray(skills.value[index]) ? (
                      skills.value[index].map((item, idx) =>
                        typeof item === "string" && item.endsWith(".png") ? (
                          <Image
                            key={idx}
                            src={item}
                            alt={property}
                            width={36}
                            height={36}
                            className="hover:scale-110 transition-transform mx-1"
                          />
                        ) : (
                          <span key={idx} className="bg-slate-200 px-2 py-1 rounded text-sm text-gray-700 shadow">
                            {item}
                          </span>
                        )
                      )
                    ) : (
                      <span className="text-gray-800">{skills.value[index]}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


      {/* Education Section */}
<motion.div
  className="m-8 md:m-16 px-8 py-10 bg-gray-100 rounded-3xl shadow-xl"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-4xl font-bold text-gray-800 font-mono mb-6">
    Education
  </h2>
  <div className="border-b-4 border-gray-700 mb-8 w-full"></div>

  {/* University */}
    <Link
      href="https://www.dlsu.edu.ph/"
      className="hover:scale-105 duration-300 block mb-8"
      target="_blank"
    >
      <motion.div
        className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden transition-transform duration-300"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="bg-slate-200 flex justify-center items-center p-6 md:w-1/4">
          <Image
            src="/dlsu.png"
            width={180}
            height={180}
            alt="DLSU Logo"
            className="rounded-full scale-115"
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:w-3/4 font-mono text-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <h3 className="text-2xl font-bold">
              BS Computer Science – Major in Software Technology
            </h3>
            <span className="bg-green-500 text-white font-semibold text-lg px-4 py-1 rounded-xl mt-2 md:mt-0">
              Expected: 2026
            </span>
          </div>
          <p className="text-lg text-gray-600">De La Salle University</p>
        </div>
      </motion.div>
    </Link>

    {/* High School */}
    <motion.div
      className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden transition-transform duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="bg-slate-200 flex justify-center items-center p-6 md:w-1/4">
        <Image
          src="/fgpis.jpg" // replace with actual logo path if available
          width={120}
          height={120}
          alt="FGPIS Logo"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center p-6 md:w-3/4 font-mono text-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
          <h3 className="text-2xl font-bold">
            Senior High School – STEM Strand
          </h3>
          <span className="bg-blue-500 text-white font-semibold text-lg px-4 py-1 rounded-xl mt-2 md:mt-0">
            Graduated: 2022
          </span>
        </div>
        <p className="text-lg text-gray-600">
          Future Generation Philippine International School
        </p>
      </div>
    </motion.div>
  </motion.div>
      {/* Resume Section */}
      <motion.div
        className="m-16 flex flex-col md:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Resume Preview Image on Left */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            src={resumePreview}
            alt="Resume Preview"
            width={540}
            height={720}
            className="rounded-lg border shadow-md  hover:scale-115 transition-transform duration-300"
          />
        </div>

        {/* Resume Text and Download on Right */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl font-bold text-black mb-4 font-mono text-center md:text-left">
            Resume
          </h2>
          <p className="mb-4 font-mono text-lg text-center md:text-left">
            Preview and download my resume below. It outlines my education, projects, and technical skills in detail.
          </p>
          <Link
            href="/LanceColorina.pdf"
            download
            target="_blank"
            className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition font-mono text-lg"
          >
            Download Resume
          </Link>
        </div>
      </motion.div>

      {/* Experience Section */}
<motion.div
  className="m-16 px-8 py-10 bg-gray-100 rounded-3xl shadow-xl"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-4xl font-bold text-gray-800 font-mono mb-6">
    Experience
  </h2>
  <div className="border-b-4 border-gray-700 mb-8 w-full"></div>

  <motion.div
    className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    {/* Company Logo */}
    <div className="bg-slate-200 flex justify-center items-center p-6 md:w-1/4">
      <Image
        src="/Eastwest.png" // add logo to public folder
        width={140}
        height={140}
        alt="EastWest Bank"
        className=""
      />
    </div>

    {/* Experience Details */}
    <div className="flex flex-col justify-center p-6 md:w-3/4 font-mono text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <h3 className="text-2xl font-bold">
          Quality Assurance Intern
        </h3>
        <span className="bg-indigo-600 text-white font-semibold text-lg px-4 py-1 rounded-xl mt-2 md:mt-0">
          EastWest Bank
        </span>
      </div>

      <p className="text-md italic text-gray-600 mb-4">
        Internship · Software Quality Assurance
      </p>

      <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
        <li>
          Designed and executed manual test cases for internal banking systems,
          ensuring functionality aligned with business requirements.
        </li>
        <li>
          Performed regression and exploratory testing to identify defects
          across multiple application modules.
        </li>
        <li>
          Documented bugs clearly and collaborated with developers to
          validate fixes and retests.
        </li>
        <li>
          Gained exposure to SDLC, QA workflows, and enterprise-level systems
          in a regulated financial environment.
        </li>
      </ul>
    </div>
  </motion.div>
</motion.div>


  {/* Projects Section */}
  <motion.div
    className="m-16 flex flex-col bg-white shadow-lg rounded-xl p-5"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="text-4xl font-bold text-black mb-8 font-mono">
      Projects
    </div>

    {/* Each Project */}
    {projects.map((proj, i) => (
      <motion.div
        key={i}
        className="mb-6 border-b border-gray-300 pb-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
      >
        <h2 className="text-2xl font-semibold font-mono">{proj.title}</h2>
        <p className="text-md italic font-mono text-gray-600">{proj.role}</p>
        <p className="text-md font-mono mt-2">{proj.description}</p>
      </motion.div>
    ))}
  </motion.div>


{/* Organizations Section */}
<motion.div
  className="m-16 px-8 py-10 bg-gray-100 rounded-3xl shadow-xl"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-4xl font-bold text-gray-800 font-mono mb-6">
    Organizations Involved
  </h2>

  <div className="border-b-4 border-gray-700 mb-8 w-full"></div>

  {organizations.map((org, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-2xl shadow-md p-6 mb-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      
      <h3 className="text-2xl font-bold font-mono text-gray-800">
        {org.name}
      </h3>

      <p className="text-lg font-mono text-gray-600 mt-1">
        {org.department}
      </p>

      <p className="text-lg font-mono mt-2">
        <span className="font-semibold text-gray-700">Role:</span>{" "}
        {org.role}
      </p>

      <p className="text-lg font-mono mt-1">
        <span className="font-semibold text-gray-700">Rank:</span>{" "}
        <span className="bg-slate-200 px-3 py-1 rounded-lg text-sm ml-1">
          {org.rank}
        </span>
      </p>

      <p className="text-md font-mono text-gray-700 mt-4 leading-relaxed">
        {org.description}
      </p>

      {/* Hierarchy */}
      <div className="mt-5">
        <p className="font-semibold font-mono text-gray-700 mb-2">
          Organizational Hierarchy:
        </p>
        <div className="flex flex-wrap gap-2">
          {org.hierarchy.map((level, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-sm font-mono shadow
                ${
                  level === org.rank
                    ? "bg-slate-700 text-white"
                    : "bg-slate-200 text-gray-700"
                }`}
            >
              {level}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

      {/* {PCK Section} */}
        <motion.div
        className="m-16 p-8 bg-gradient-to-r from-neutral-50 via-neutral-100 to-neutral-200 shadow-lg rounded-xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-black mb-4 font-mono">
          {pckReflection.title}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed font-mono whitespace-pre-line">
          {pckReflection.content}
        </p>
      </motion.div>
    </div>
  );
}
