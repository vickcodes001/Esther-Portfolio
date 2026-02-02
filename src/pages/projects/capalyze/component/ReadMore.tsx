import { motion } from "motion/react";

const articles = [
  {
    id: 1,
    image: "/images/read-more-tranzakt.png",
    title: "Tranzakt",
    description:
      "Tranzakt is a fintech platform built to make payments, settlements, and financial...",
    className: "bg-[#01AC4C]",
    link: "/tranzakt",
  },
  {
    id: 2,
    image: "/images/read-more-vuno.png",
    title: "Vuno Socials",
    description:
      "Vuno is a social discovery app designed to help people feel connected to what's...",
    className: "bg-black",
    link: "/vuno",
  },
];

const ReadMore = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-0">
      <motion.h3
        className="text-[28px] md:text-[32px] font-semibold font-reem mb-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Read Next
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {articles.map((article, index) => (
          <motion.a
            key={article.id}
            href={article.link}
            className={`${article.className} relative w-full h-64 md:h-98 rounded-[17px] shadow-md overflow-hidden px-6 pt-6 md:px-10 md:pt-10 cursor-pointer`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src={article.image}
              alt={article.title}
              className="w-full md:w-126 object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              viewport={{ once: true }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/50 to-transparent p-4 md:p-6">
              <motion.h4
                className="text-[13px] md:text-lg font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                viewport={{ once: true }}
              >
                {article.title}
              </motion.h4>
              <motion.p
                className="text-[9px] md:text-sm mt-1 md:mt-2 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                viewport={{ once: true }}
              >
                {article.description}
              </motion.p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ReadMore;
