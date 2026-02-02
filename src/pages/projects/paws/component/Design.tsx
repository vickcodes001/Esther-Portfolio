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
          I chose a discovery-first model that lets users explore the feed
          without creating an account, so value is established before
          commitment. While this reduced early data capture, it improved trust
          and engagement. I used a familiar short-form feed pattern to lower the
          learning curve, accepting the trade-off of needing stronger content
          differentiation through pet-specific features.
        </p>
      </motion.div>

      {/* Image Container */}
      <motion.div
        className="flex flex-col md:flex-row gap-3 md:gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {[
          "/images/paws-design-one.png",
          "/images/paws-design-two.png",
          "/images/paws-design-three.png",
        ].map((src, index) => (
          <div className="flex justify-center bg-[#E25A5A] mx-auto rounded-2xl w-full py-8">
            <motion.img
              key={index}
              src={src}
              alt={`Goal mobile ${index + 1}`}
              className="w-79"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Design;
