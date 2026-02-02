import { TranzaktBgOne, TranzaktBgTwo } from "../../../../assets";
import { motion } from "motion/react";

const Context = () => {
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
        <h3 className="text-[28px] md:text-[32px] text-gray-900 font-semibold font-reem py-2 b-6 mb-3 border border-transparent border-b-[#F6F8FA]">
          Context and Constraints
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The KYC flow had to comply with regulatory requirements while
          supporting two very different merchant types. Starter businesses often
          lacked formal documents, while registered businesses required deeper
          verification. The solution also had to fit into existing compliance
          workflows without disrupting backend validation logic.
        </p>
      </motion.div>

      <motion.div
        className="mb-12 md:px-15"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] md:text-[32px] text-gray-900 font-semibold font-reem py-2 b-6 mb-3 border border-transparent border-b-[#F6F8FA]">
          Collaboration and Communication
        </h3>
        <p className="text-gray-700 leading-relaxed">
          I worked closely with the compliance team to define minimum
          requirements for each business type and aligned with engineers on how
          document states and verification statuses would be handled.
        </p>
      </motion.div>

      {/* Image Container */}
      <motion.div
        className="relative flex bg-green-400 rounded-2xl p-3 md:p-9.5 bg-cover bg-center w-full"
        style={{ backgroundImage: `url('')` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img src={TranzaktBgOne} alt="" className="absolute top-0 left-[27%]" />
        <img src={TranzaktBgTwo} alt="" className="absolute bottom-0 right-0" />
        <div className="relative z-2 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-16 w-232.5 mx-auto">
          {["/images/tranzakt-4.png", "/images/tranzakt-5.png"].map(
            (src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`KYC Screenshot ${index + 1}`}
                className="w-full rounded-lg shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              />
            ),
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Context;
