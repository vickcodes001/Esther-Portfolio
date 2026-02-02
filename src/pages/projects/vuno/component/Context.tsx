import { motion } from "motion/react";

const Context = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 lg:px-0">
      {/* Header */}
      <motion.div
        className="mb-6 md:px-15"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] md:text-[32px] text-gray-900 font-semibold font-reem b-6 mb-3 py-2 border border-transparent border-b-[#F6F8FA]">
          Context and Constraints
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The platform needed to support live, location-based interactions
          without overwhelming users or requiring immediate sign-up. Key
          constraints included balancing openness with privacy, handling
          permission-dependent features, and designing for both high-activity
          and low-activity areas.
        </p>
      </motion.div>

      {/* desktop */}
      <motion.div
        className="relative hidden md:flex bg-black rounded-2xl bg-cover bg-center w-full"
        style={{ backgroundImage: `url('')` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="relative z-2 flex mx-auto">
          {["/images/vuno-context.png"].map((src, index) => (
            <div className="w-full md:w-145.25 p-7">
              <motion.img
                key={index}
                src={src}
                alt={`KYC Screenshot ${index + 1}`}
                className="md:w-full object-cover"
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

      {/* mobile */}
      <motion.div
        className="relative md:hidden flex bg-black rounded-2xl bg-cover bg-center w-full"
        style={{ backgroundImage: `url('')` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="relative z-2 flex mx-auto">
          {["/images/vuno-context-mobile.png"].map((src, index) => (
            <div className="w-full md:w-145.25 p-7">
              <motion.img
                key={index}
                src={src}
                alt={`KYC Screenshot ${index + 1}`}
                className="md:w-full object-cover"
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

export default Context;
