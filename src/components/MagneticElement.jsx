import { useRef, useState } from "react";
import { motion } from "motion/react";
import { FLEX_CENTER } from "constants/tailwindConstants";

const MagneticElement = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };
  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  return (
    <motion.div
      animate={{ x, y }}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={FLEX_CENTER}
    >
      {children}
    </motion.div>
  );
};

export default MagneticElement;
