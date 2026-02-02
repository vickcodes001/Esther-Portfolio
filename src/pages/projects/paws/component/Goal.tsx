import { motion } from "motion/react";

const Goal = () => {
  return (
    <div className="max-w-7xl mx-auto pt-16 md:py-16 px-4 lg:px-0">
      {/* Header */}
      <motion.div
        className="mb-6 md:px-15"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] md:text-[32px] text-gray-900 font-semibold font-reem mb-3 py-2 border border-transparent border-b-[#F6F8FA]">
          The Goal
        </h3>
        <p className="text-gray-700 leading-relaxed">
          To create a pet-first social platform where pets are the primary
          identities, enabling owners to discover playdates, mates, and trusted
          communities, while safely turning online connections into real-world
          pet relationships supported by smart guidance.
        </p>
      </motion.div>

      {/* Images */}
      <div className="mt-10">
        <motion.div
          className="flex flex-col md:flex-row gap-3 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {["/images/paws-goal-one.png", "/images/paws-goal-two.png"].map(
            (src, index) => (
              <div className="flex justify-center bg-[#E25A5A] mx-auto rounded-2xl w-full py-8">
                <motion.img
                  key={index}
                  src={src}
                  alt={`Goal mobile ${index + 1}`}
                  className="object-cove w-79"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
            ),
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Goal;
