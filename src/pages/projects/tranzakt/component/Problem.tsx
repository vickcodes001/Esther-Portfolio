import { TranzaktBgOne, TranzaktBgTwo } from "../../../../assets";
import { motion } from "motion/react";

const Problem = () => {
  return (
    <div className="max-w-7xl mx-auto pt-16 md:pt-0 md:py-16 px-4 lg:px-8">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] md:text-4xl text-gray-900 font-semibold font-reem b-6 mb-5">
          The Problem
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Merchants struggled to complete onboarding because the KYC process
          treated all businesses the same. Starter businesses and registered
          businesses were forced through a single, rigid flow, leading to
          confusion, incomplete submissions, and delays in account activation.
          This slowed merchant acquisition and increased admin review time.
        </p>
      </motion.div>

      {/* Image Container */}
      <motion.div
        className="relative flex bg-green-400 rounded-3xl p-3 md:p-9.5 bg-cover bg-center w-full"
        style={{ backgroundImage: `url('')` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img src={TranzaktBgOne} alt="" className="absolute top-0 left-[27%]" />
        <img src={TranzaktBgTwo} alt="" className="absolute bottom-0 right-0" />
        <div className="relative z-2 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {[
            "/images/tranzakt-problem-1.png",
            "/images/tranzakt-problem-2.png",
            "/images/tranzakt-problem-3.png",
          ].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`KYC Screenshot ${index + 1}`}
              className="w-full rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Problem;
