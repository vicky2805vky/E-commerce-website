import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ opacity: 0, filter: "blur(20px)" }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
