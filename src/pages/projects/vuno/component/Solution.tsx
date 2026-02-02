import { motion } from "motion/react";

const Solution = () => {
  const listItems = [
    "A clear business type selection at onboarding",
    "Tailored document requirements per business type",
    "Structured document upload with visible verification status for admins",
  ];

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
        <h3 className="text-[28px] md:text-[32px] text-gray-900 font-semibold font-reem b-6 mb-6 py-2 border border-transparent border-b-[#F6F8FA]">
          The Solution
        </h3>
        <ul className="list-disc pl-5 mb-4">
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Merchants completed KYC with fewer errors, and admins spent less time
          clarifying missing documents. The clearer flow supported faster
          onboarding, contributing to improved merchant conversion during sales
          and activation.
        </motion.p>
      </motion.div>

      {/* Image Container */}
      <motion.div
        className="relative flex flex-col md:flex-row gap-7 bg-cover bg-center w-full"
        style={{ backgroundImage: `url('')` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* <div className="relative w-191 mx-auto z-2"> */}
        {[
          "/images/vuno-context-mobile.png",
          "/images/vuno-solution-2.png",
          "/images/vuno-solution-3.png",
        ].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`KYC Screenshot ${index + 1}`}
            className="w-98 shadow-xl bg-black rounded-2xl md:px-9.5 p-3 md:py-8.5 border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
        ))}
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default Solution;
