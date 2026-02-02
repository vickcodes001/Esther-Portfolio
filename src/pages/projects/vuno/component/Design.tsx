import { motion } from "motion/react";

const Design = () => {
  return (
    <div className="max-w-7xl mx-auto md:py-16 px-4 sm:px-6 lg:px-0">
      {/* Header */}
      <motion.div
        className="mb-6 md:px-15"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] md:text-[32px] text-gray-900 font-semibold font-reem b-6 mb-4 py-2 border border-transparent border-b-[#F6F8FA]">
          Design Decision
        </h3>
        <p className="text-gray-700 leading-relaxed">
          I designed a location-aware experience where activities are anchored
          to physical places through map pins. Each pin represents a live
          activity and its host, allowing users to view details, join
          conversations, or participate in real time.
        </p>
      </motion.div>

      {/* Image Container */}
      <motion.div className="flex flex-col md:flex-row gap-3 md:gap-7">
        {/* desktop */}
        <motion.div
          className="relative hidden md:flex bg-black rounded-2xl md:w-[60%]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-120 p-6 mx-auto"
          >
            <motion.img
              src="/images/vuno-design-one.png"
              alt="vuno-design"
              className="object-cover"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </motion.div>

        {/* mobile */}
        <motion.div
          className="relative flex bg-black rounded-2xl md:w-[40%]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-82 p-7 mx-auto"
          >
            <motion.img
              src="/images/vuno-design-two.png"
              alt=""
              className="w-full object-cover"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Design;
