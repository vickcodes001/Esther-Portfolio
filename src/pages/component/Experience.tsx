import { motion } from "motion/react";

const experience = [
  {
    id: 1,
    title: "UI/UX Designer",
    subtitle: "Komplete Care",
    date: "August 2025 - Present",
    description:
      "At KompleteCare, I collaborated cross-functionally to deliver scalable solutions for healthcare across Nigeria. Most notably, we launched a flagship Lagos State Government partnership which streamlines healthcare access to millions.",
  },
  {
    id: 2,
    title: "Lead Product & Designer",
    subtitle: "Tranzakt Financial Limited",
    date: "March 2024 - Dec 2025",
    description:
      "I led the product research and UX strategy across all the fintech product (TPP, Payment Gateway and Bill payment website). I also lead branding for marketing campaigns, outings, and public-facing initiatives.",
  },
  {
    id: 3,
    title: "Product Design Intern",
    subtitle: "Genesys Tech Hub",
    date: "August 2023 - June 2024",
    description:
      "Completed a Product Design internship at Genesys TechHub, where I learned hands-on skills in UX/UI design, prototyping, and user research. I worked on real-world projects that helped me build a strong foundation in product design.",
  },
];

const Experience = () => {
  return (
    <section className="max-w-360 mx-auto px-4 md:px-20 pb-15">
      {/* Title */}
      <motion.h3
        className="text-[#20232D] font-reem text-[32px] font-semibold mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h3>

      {/* Experience Items */}
      <div className="flex flex-col gap-16">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex justify-between mb-4">
              <div className="flex flex-col gap-1">
                <p className="text-[#20232D] text-[20px] font-semibold">
                  {exp.title}
                </p>
                <p className="text-[#868C98] text-[18px]">{exp.subtitle}</p>
              </div>
              <p className="text-[#31353F]">{exp.date}</p>
            </div>

            <p className="text-[#20232D]">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
