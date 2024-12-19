import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "React Native",
    "Expo",
    "Vue.js",
    "Redux",
    "Vuex",
    "Tailwind CSS",
    "Socket.io",
    "HTML",
    "CSS",
    "SCSS",
    "Bootstrap",
    "Git",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <section id="skills" className="py-20 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-[#1a1a1a] text-blue-400 px-3 py-2 rounded-full text-sm font-semibold shadow-md"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(96, 165, 250)",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
