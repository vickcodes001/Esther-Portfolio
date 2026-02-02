import { useNavigate } from "react-router-dom";
import { ArrowBack, CapalyzeLogo, TopRight } from "../../../../assets";
import { motion } from "motion/react";

const qualities = [
  {
    title: "UX Strategy",
  },
  {
    title: "UI Design",
  },
  {
    title: "Information Architecture",
  },
  {
    title: "Interaction Design",
  },
];

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10 w-full max-w-360 mx-auto mt-33 md:mt-50 px-4 md:px-20">
      <motion.button
        onClick={() => navigate("/")}
        className="flex items-center justify-center gap-2 bg-[#F7F7F7] px-2 py-2.5 text-xs rounded-md w-20.75 cursor-pointer md:ml-15"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={ArrowBack} /> Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:px-15"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-[#20232D] text-2xl md:text-[48px] font-medium">
            Capalyze
          </h3>
          <motion.button
            onClick={() => window.open("https://capalyse.com/", "_blank")}
            className="flex items-center justify-center gap-4 bg-[#153B30] rounded-[10px] text-white p-2.5 w-10 md:w-40 h-10 md:p md:py-6 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden md:inline">View Product</span>
            <img src={TopRight} />
          </motion.button>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-2">
          <p className="text-[#20232D] font-medium text-sm md:text-base w-[80%] md:w-[70%]">
            A scalable system that helps SMEs assess funding readiness
          </p>
          <div className="flex md:justify-end flex-wrap gap-5 md:w-[70%]">
            {qualities.map((quality, index) => (
              <motion.p
                key={index}
                className="bg-[#F6F8FA] px-2 py-1 rounded-md text-[12px] text-[#525866]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {quality.title}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>

      {/* large icon */}
      <motion.div
        className="flex items-center justify-center w-full h-27 md:h-49.5 rounded-2xl bg-[#F7F7F7]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img src={CapalyzeLogo} className="w-59 md:w-[320px]" />
      </motion.div>
    </div>
  );
};

export default Header;
