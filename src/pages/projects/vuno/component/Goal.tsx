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
          Hive was designed to make local moments more visible and
          participatory. It focuses on real-time, location-first discovery where
          activities, conversations, and updates are anchored to place and
          moment.
        </p>
      </motion.div>

      {/* Images */}
      <div className="mt-10">
        {/* Desktop: single wide image */}
        <div className="hidden md:flex w-full border justify-center py-8.5 mx-auto rounded-2xl bg-black">
          <motion.img
            src="images/vuno-goal.png" // 👉 put desktop image URL here
            alt="Goal overview"
            className="hidden md:block w-163 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Mobile: two images */}
        <motion.div
          className="flex flex-col md:hidden gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {["/images/vuno-goal-one.png", "/images/vuno-goal-two.png"].map(
            (src, index) => (
              <div className="bg-black mx-auto rounded-2xl w-full p-7">
                <motion.img
                  key={index}
                  src={src}
                  alt={`Goal mobile ${index + 1}`}
                  className="object-cover"
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
