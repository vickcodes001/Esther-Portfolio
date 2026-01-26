import { useEffect, useState } from "react";
import { MailIcon, ProjectIcon } from "../../assets";
import { motion, AnimatePresence } from "motion/react";

const words = ["Fintech", "Healthtech", "Social Media", "Web3", "Real Estate"];

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-360 mx-auto mt-32 md:mt-40 px-4 md:px-20">
      <motion.h1
        className="text-[20px] md:text-[32px] pr-12 md:pr-0 font-medium text-[#20232D] leading-normal"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Hey 👋 <br />I am Onyewuchi Chikamso Esther, a UI UX Designer with over
        2 years experience designing{" "}
        <span className="relative inline-block h-[1.2em] md:h-[1.1em] w-30 md:w-46 overflow-hidden align-baseline top-[0.15em]">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              className="absolute left-0 top-1 w-full text-[#DDA938] whitespace-nowrap leading-none"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>{" "}
        websites and mobile applications.
      </motion.h1>

      <motion.div
        className="mt-10 flex gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="mailto:estheronyewuchi2340@gmail.com?subject=Hello&body=Hi Esther"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-between bg-[#153B30] text-white w-44.75 px-6 py-3 rounded-2xl cursor-pointer"
        >
          <img src={MailIcon} alt="Mail" />
          Contact Me
        </motion.a>

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="#feature"
            className="flex justify-between bg-[#F6F8FA] border border-[#E2E4E9] px-6 py-3 w-44.75 rounded-2xl cursor-pointer"
          >
            <img src={ProjectIcon} alt="" />
            View Projects
          </a>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Header;
