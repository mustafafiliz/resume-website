import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaCode, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0C0C0C]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="grid grid-cols-2 gap-4 lg:gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SkillCard
              icon={FaCode}
              title="Web Development"
              description="Expertise in React, Next.js, and Vue.js"
            />
            <SkillCard
              icon={FaMobileAlt}
              title="Mobile Development"
              description="Proficient in React Native and Expo"
            />
            <SkillCard
              icon={FaLaptopCode}
              title="Frontend Architecture"
              description="Skilled in designing scalable frontend solutions"
            />
            <SkillCard
              icon={FaCode}
              title="Modern JavaScript"
              description="Advanced knowledge of ES6+ and TypeScript"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-300 mb-6">
              A highly skilled Frontend Developer with expertise in modern
              frameworks and libraries, delivering user-centric web and mobile
              applications.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Demonstrated success in leading projects independently and
              collaborating within dynamic teams to achieve business goals.
            </p>
            <p className="text-lg text-gray-300">
              Known for a problem-solving mindset, attention to detail, and the
              ability to adapt in fast-paced environments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon: Icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
      <Icon className="text-4xl text-blue-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
