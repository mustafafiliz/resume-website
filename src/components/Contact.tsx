import { motion } from "framer-motion";
import { FaLinkedin, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Get in Touch
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <ContactItem
            icon={FaLinkedin}
            link="https://www.linkedin.com/in/mustafafiliz/"
            text="LinkedIn"
          />
          <ContactItem
            icon={FaYoutube}
            link="https://www.youtube.com/@mustafa_filiz"
            text="YouTube"
          />
          <ContactItem
            icon={FaGithub}
            link="https://github.com/mustafafiliz"
            text="GitHub"
          />
          <ContactItem
            icon={FaEnvelope}
            link="mailto:mustafafiliz1995@gmail.com"
            text="Email"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  link,
  text,
}: {
  icon: any;
  link: string;
  text: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 text-white text-xl hover:text-blue-400 transition duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={24} />
      <span>{text}</span>
    </motion.a>
  );
}
