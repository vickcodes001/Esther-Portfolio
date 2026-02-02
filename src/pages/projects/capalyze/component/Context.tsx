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
          The platform had to serve multiple user types with very different
          goals while remaining usable for founders with varying levels of
          financial and digital literacy. It also needed to work within Africa’s
          diverse regulatory requirements.
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
        <div className="relative z-2 flex flex-col md:flex-row gap-3 md:gap-8 p-3 md:py-10.5 mx-auto">
          {[
            "/images/capalyze-context-one.png",
            "/images/capalyze-context-two.png",
          ].map((src, index) => (
            <div className="w-91.7 md:w-108">
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

export default Context;
