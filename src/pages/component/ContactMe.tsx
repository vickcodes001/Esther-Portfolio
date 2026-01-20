import React from "react";
import { motion } from "motion/react";

const ContactMe: React.FC = () => {
  return (
    <section className="max-w-360 mx-auto mb-20 md:mb-0 px-4 md:p-20">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-1 text-[#20232D] text-[28px] md:text-[32px] font-semibold font-reem">
          <h3>Have a product challenge?</h3>
          <h3>Let's talk about designing a solution</h3>
        </div>

        <motion.div
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=estheronyewuchi2340@gmail.com",
              "_blank",
            )
          }
          className="flex flex-col items-start justify-center gap-1 py-7 px-4 bg-[#153B30] text-white rounded-2xl transition-colors cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm text-white">Send a message</span>
          <span className="text-[21px] md:text-[26px] font-semibold">
            estheronyewuchi2340@gmail.com
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
