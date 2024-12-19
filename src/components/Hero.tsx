import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Mustafa Filiz
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
            Front-end Developer & Mobile Developer
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-400">
            Crafting seamless digital experiences with modern web technologies
          </p>
          <motion.a
            href="#contact"
            className="bg-blue-700 text-white px-6 md:px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-800 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/me.png"
            alt="Mustafa Filiz"
            width={400}
            height={400}
            className="rounded-xl shadow-2xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
