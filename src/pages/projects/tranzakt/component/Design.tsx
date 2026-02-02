import { TranzaktBgOne, TranzaktBgTwo } from "../../../../assets";
import { motion } from "motion/react";

const Design = () => {
  const images = [
    {
      label: "Starter Business KYC",
      src: "/images/tranzakt-6.png",
      className: "w-full rounded-lg shadow-xl",
    },
    {
      label: "Registered Business KYC",
      src: "/images/tranzakt-7.png",
      className: "w-full h-77 rounded-lg shadow-xl",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto md:py-16 px-4 sm:px-6 lg:px-0">
      {/* Header */}
      <motion.div
        className="mb-12 md:px-15"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[28px] md:text-[32px] text-gray-900 font-semibold font-reem b-6 mb-3">
          Design Decision
        </h3>
        <p className="text-gray-700 leading-relaxed">
          I separated the onboarding flow into two clear paths: Starter Business
          and Registered Business. This reduced unnecessary friction for small
          merchants while allowing deeper checks for registered entities. The
          trade-off was maintaining two flows instead of one, but this
          significantly reduced confusion and back-and-forth during
          verification.
        </p>
      </motion.div>

      {/* Image Container */}
      <motion.div
        className="relative flex bg-green-400 rounded-2xl p-3 md:py-13 bg-cover bg-center w-full"
        style={{ backgroundImage: `url('')` }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img src={TranzaktBgOne} alt="" className="absolute top-0 left-[27%]" />
        <img src={TranzaktBgTwo} alt="" className="absolute bottom-0 right-0" />
        <div className="relative z-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-232.5 mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-white text-[14px] md:text-[18px] mb-2">
                {image.label}
              </p>
              <motion.img
                src={image.src}
                alt={image.label}
                className={image.className}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Design;
