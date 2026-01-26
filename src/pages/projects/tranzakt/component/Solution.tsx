import { TranzaktBgOne, TranzaktBgTwo } from "../../../../assets";
import { motion } from "motion/react";

const Solution = () => {
  const listItems = [
    "A clear business type selection at onboarding",
    "Tailored document requirements per business type",
    "Structured document upload with visible verification status for admins",
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
      {/* Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] md:text-4xl text-gray-900 font-semibold font-reem b-6 mb-6">
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
        className="relative flex bg-[#F7F7F7] rounded-3xl p-3 md:py-13 bg-cover bg-center w-full"
        style={{ backgroundImage: `url('')` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <img src={TranzaktBgOne} alt="" className="absolute top-0 left-[27%]" />
        <img src={TranzaktBgTwo} alt="" className="absolute bottom-0 right-0" />
        <div className="relative w-191 mx-auto z-2">
          <motion.img
            src="/images/tranzakt-8.png"
            alt="KYC Screenshot 1"
            className="w-full object-cover rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Solution;
