import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Vizzly: Global Advertising and Management",
      description:
        "Developed web and mobile interfaces for a global advertising management platform using Next.js, React Native, TypeScript, and more.",
      image: "/images/vizzly-project.png",
    },
    {
      title: "DijiPortal: HR & Employee Management",
      description:
        "Built a comprehensive HR platform with Vue.js, Tailwind CSS, and Pinia, focusing on efficient employee management and payroll systems.",
      image: "/images/dijiportal-project.png",
    },
    {
      title: "Communus: Office Rental Platform",
      description:
        "Created a full-stack solution for office rentals using Next.js, Express.js, and MongoDB, integrating secure payment processing.",
      image: "/communus-project.jpg",
    },
    {
      title: "Ehliyetsinavim.net: Driver Exam Platform",
      description:
        "Developed an interactive platform for Turkish driver's license exam preparation using Next.js, Nest.js, and MongoDB.",
      image: "/images/ehliyetsinavim-project.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 md:h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
