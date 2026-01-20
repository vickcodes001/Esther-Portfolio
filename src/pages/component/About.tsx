import { motion } from "motion/react";
import { useState } from "react";

const About = () => {
  const [isMobile] = useState(() => window.innerWidth < 768);

  const textInitial = isMobile ? { opacity: 0, y: 40 } : { opacity: 0, x: -40 };

  const imageInitial = isMobile ? { opacity: 0, y: 40 } : { opacity: 0, x: 40 };

  return (
    <section className="flex flex-col md:flex-row gap-10 justify-between items-center w-full max-w-360 mx-auto px-4 md:px-20 my-10 md:my-30">
      <motion.div
        className="w-full md:w-[47%]"
        initial={textInitial}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-[#20232D] text-[32px] font-semibold font-reem">
            About Me
          </h3>

          <div className="flex flex-col gap-6">
            <p>
              I’m a product designer focused on building clear, usable software
              that holds up over time. My work is guided by long-term thinking,
              scalability, and balancing user needs with real business
              constraints.
            </p>

            <p>
              I currently design healthtech products at KompleteCare, where we
              work to improve access to quality healthcare across Nigeria.
            </p>

            <p>
              When I am not designing, I am either cooking or reading. I also
              actively share design knowledge and mentor others as a way of
              strengthening the community that shaped me.
            </p>
          </div>
        </div>
        {/* Process */}
        <div className="mt-10 text-[#20232D]">
          <h3 className="text-[32px] font-semibold font-reem mb-6">
            My Design Process
          </h3>

          <ul className="flex flex-col gap-6 pl-5 list-disc">
            <li>
              I start by understanding the real problem, the people affected,
              and why it matters to the business.
            </li>
            <li>
              I clarify requirements, edge cases, and technical limits early.
            </li>
            <li>
              I explore different solutions and review business goals and
              technical limits before committing.
            </li>
            <li>
              I iterate based on feedback, data, and real usage, not
              assumptions.
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-[44%]"
        initial={imageInitial}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="images/about-profile.png"
          alt=""
          className="w-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default About;
