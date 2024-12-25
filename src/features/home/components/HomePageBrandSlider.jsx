import { AnimatePresence, motion } from "motion/react";

const HomePageBrandSlider = () => {
  const totalImagesNumber = Array.from(Array(10).keys());

  return (
    <div className="relative my-5 flex h-[30px] w-full items-center overflow-hidden rounded-full [background:var(--primary-bg-gradient)] md:h-[40px]">
      {totalImagesNumber.map((number) => {
        return (
          <AnimatePresence key={number} initial={true}>
            <motion.div
              initial={{ right: "-20%" }}
              animate={{ right: "100%" }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: number + 1,
                duration: 10,
              }}
              className="absolute flex h-full w-[15vw] flex-1 items-center justify-center gap-10 p-2"
            >
              <img
                src={`/brands/logo-brand-image-${number + 1}.png`}
                alt=""
                className="max-h-full"
              />
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default HomePageBrandSlider;
