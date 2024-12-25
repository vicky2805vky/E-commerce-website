import { motion } from "motion/react";
const HomePageCategoryCard = ({ image, title, description }) => {
  return (
    <motion.div
      className="cursor-pointer rounded-3xl p-4 shadow-md [background:var(--secondary-bg-gradient)]"
      animate={{ scale: 0.95 }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img className="mx-auto block w-3/6" src={image} />

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold [font-size:var(--fs-l)]">
          {title}
        </h3>
        <p className="mt-2 [font-size:var(--fs-m)]">{description}</p>
      </div>
    </motion.div>
  );
};

export default HomePageCategoryCard;
