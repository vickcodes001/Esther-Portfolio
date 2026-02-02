import { motion } from "motion/react";

const Solution = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 lg:px-0">
      {/* Header */}
      <motion.div
        className="mb-12 md:px-15"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] md:text-[32px] text-gray-900 font-semibold font-reem b-6 mb-6 py-2 border border-transparent border-b-[#F6F8FA]">
          The Solution
        </h3>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          The platform introduced role-based dashboards for SMEs, investors, and
          development organizations, with structured programs, assessment
          management, and centralized communication tools. This reduced manual
          coordination, improved visibility into SME readiness, and enabled
          faster, more informed decision-making across all stakeholders.
        </motion.p>
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
        <div className="relative z-2 flex flex-col md:flex-row gap-3 md:gap-5 p-3 md:py-15.5 mx-auto">
          {[
            "/images/capalyze-solution-one.png",
            "/images/capalyze-solution-two.png",
            "/images/capalyze-solution-three.png",
          ].map((src, index) => (
            <div className="w-91.7">
              <motion.img
                key={index}
                src={src}
                alt={`KYC Screenshot ${index + 1}`}
                className="w-full object-cover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Solution;
