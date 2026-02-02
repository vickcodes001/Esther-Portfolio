import { motion } from "motion/react";

const Design = () => {
  return (
    <div className="max-w-7xl mx-auto md:py-16 px-4 sm:px-6 lg:px-0">
      {/* Header */}
      <motion.div
        className="mb-12 md:px-15"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] md:text-[32px] text-gray-900 font-semibold font-reem b-6 mb-3">
          Design Decision
        </h3>
        <p className="text-gray-700 leading-relaxed">
          I prioritized a readiness score and category breakdown over raw
          financial data to give SMEs clarity without overwhelming them.
          Separate dashboards were designed for SMEs, investors, and admins to
          keep each experience focused and goal-driven. Learning recommendations
          were embedded into assessment results to encourage immediate,
          actionable improvement rather than passive education.
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
        <div className="relative z-2 flex flex-col md:flex-row gap-3 md:gap-6 p-3 md:py-10.5 mx-auto">
          {[
            "/images/capalyze-design-one.png",
            "/images/capalyze-design-two.png",
            "/images/capalyze-design-three.png",
          ].map((src, index) => (
            <div className="w-91.7 h-65.5">
              <motion.img
                key={index}
                src={src}
                alt={`KYC Screenshot ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
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

export default Design;
