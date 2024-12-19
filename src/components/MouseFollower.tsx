import { motion } from "framer-motion";
import { FaKiwiBird } from "react-icons/fa";

interface MouseFollowerProps {
  mousePosition: { x: number; y: number };
}

export default function MouseFollower({ mousePosition }: MouseFollowerProps) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 text-yellow-400"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 50,
        restDelta: 0.001,
      }}
    >
      <FaKiwiBird size={32} />
    </motion.div>
  );
}
