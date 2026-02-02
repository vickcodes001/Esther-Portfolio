import { motion } from "motion/react";

const ReadMore = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-0">
      <motion.h3
        className="text-[28px] md:text-[32px] font-semibold font-reem mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Read Next
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Paws Section */}
        <motion.a
          href="/paws"
          className="bg-[#E25A5A] relative w-full h-64 md:h-98 rounded-[17px] shadow-md overflow-hidden px-6 pt-6 md:px-6 md:pt-10 cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-full">
            <motion.img
              src="/images/read-more-paws.png"
              alt="Paws and Connect"
              className="w-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/50 to-transparent p-4 md:p-6">
            <motion.h4
              className="text-base md:text-lg font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Paws and Connect
            </motion.h4>

            <motion.p
              className="text-xs md:text-sm mt-1 md:mt-2 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              A social pet app designed to help pet owners discover nearby
              playdates, potentia...
            </motion.p>
          </div>
        </motion.a>

        {/* Capalyze Section */}
        <motion.a
          href="/capalyze"
          className="bg-[#047857] relative w-full h-64 md:h-98 rounded-[17px] shadow-md overflow-hidden px-6 pt-6 md:px-6 md:pt-15 cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-full">
            <motion.img
              src="/images/read-more-capalyze.png"
              alt="Capalyze"
              className="w-full object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black to-transparent p-4 md:p-6 md:pt-20">
            <motion.h4
              className="text-base md:text-lg font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              viewport={{ once: true }}
            >
              Capalyze
            </motion.h4>

            <motion.p
              className="text-xs md:text-sm mt-1 md:mt-2 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              viewport={{ once: true }}
            >
              Capalyze is a product that helps African SMEs prepare for funding
              by assessing t...
            </motion.p>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default ReadMore;
