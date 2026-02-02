import { motion } from "motion/react";

const Solution = () => {
  const listItems = [
    "Pet-first profiles where each pet has its own identity, preferences, and activity",
    "Direct messaging between pets to support playdates, mating, and social interaction",
    "Pet-based communities organized by species and interests",
    "Pawz AI, framed as a companion that offers care tips and guidance for pet owners",
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
          Testing showed stronger emotional engagement when pets were treated as
          the primary users rather than attachments to owner profiles.
          Participants found messaging and discovery more intuitive when
          interactions were framed pet-to-pet.
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
          "/images/paws-solution-one.png",
          "/images/paws-solution-two.png",
          "/images/paws-solution-three.png",
        ].map((src, index) => (
          <div className="flex justify-center bg-[#E25A5A] mx-auto rounded-2xl w-full py-8">
            <motion.img
              key={index}
              src={src}
              alt={`paws and connect ${index + 1}`}
              className="w-79"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            />
          </div>
        ))}
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default Solution;
