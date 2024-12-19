import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Banausta.com",
      role: "Front-end Developer & Mobile developer",
      period: "07/2020 - Present",
      description: [
        "Designed and implemented the entire frontend architecture using Next.js, Module CSS, TypeScript, and Redux",
        "Independently developed the mobile application for Banausta.com, which is now live on the App Store",
        "Utilized React Native, TypeScript, and Redux to deliver a high-performance and intuitive mobile experience",
      ],
    },
    {
      company: "PATH Product and Software House",
      role: "Front-end Developer",
      period: "04/2022 - 02/2024",
      description: [
        "Developed Tuttur.com using React, TypeScript, SCSS, and Socket.IO",
        "Contributed to Idefix.com marketplace platform, building both end-user and seller interfaces",
        "Collaborated on four iGaming projects, implementing dynamic features using Next.js, TypeScript, and Socket.IO",
      ],
    },
    {
      company: "Ofix.com",
      role: "Front-end Developer",
      period: "07/2021 - 04/2022",
      description: [
        "Managed and resolved bugs and issues in the existing version of the platform, which was built using Handlebars.js",
        "Played a key role in developing the next iteration of the platform (version 4.0) using Nuxt.js, SCSS, Bootstrap, and Vuex",
        "Focused on creating a more efficient, scalable, and user-friendly experience",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Experience
        </h2>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-blue-500/30 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-16 flex flex-col md:flex-row justify-between items-start w-full ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full md:w-5/12 mb-4 md:mb-0">
                <motion.div
                  className="bg-[#111] rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 ml-12 md:ml-0"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="mb-3 font-bold text-blue-400 text-2xl">
                    {exp.company}
                  </h3>
                  <h4 className="mb-3 font-bold text-white text-xl">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-semibold text-gray-400 mb-4">
                    {exp.period}
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <div className="z-20 flex items-center justify-center absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                <motion.div
                  className="w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="text-white font-bold text-sm md:text-lg">
                    {index + 1}
                  </span>
                </motion.div>
              </div>
              <div className="hidden md:block w-5/12" />{" "}
              {/* Spacer for the other side on desktop */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
