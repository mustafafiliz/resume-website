import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 w-full bg-[#0f0f0f] bg-opacity-80 backdrop-blur-md shadow-lg z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-12">
          {["About", "Experience", "Skills", "Projects", "Contact"].map(
            (item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-400 transition duration-300 text-base md:text-2xl font-semibold"
                >
                  {item}
                </Link>
              </motion.li>
            )
          )}
        </ul>
      </nav>
    </motion.header>
  );
}
