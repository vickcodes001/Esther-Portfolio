import { motion } from "motion/react";

const Goal = () => {
  return (
    <div className="max-w-7xl mx-auto pt-16 md:py-16 px-4 lg:px-0">
      {/* Header */}
      <motion.div
        className="mb-8 md:px-15"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] md:text-[32px] text-gray-900 font-semibold font-reem b-6 mb-3 py-2 border border-transparent border-b-[#F6F8FA]">
          The Goal
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Capalyze is a platform that standardizes investment readiness
          assessment for SMEs and enables faster, more confident funding
          decisions for investors and development partners.
        </p>
      </motion.div>

      {/* Image Container */}
      <motion.div
        className="relative flex bg-[#047857] rounded-2xl w-full"
        style={{ backgroundImage: `url('')` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="w-182 p-4 md:py-11.5 px-2.5 mx-auto">
          <motion.img
            src="/images/capalyze-goal.png"
            alt="capalyze-image"
            className="w-full object-cover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Goal;
