import Card from "../../components/Card";
import { motion } from "motion/react";

const projects = [
  {
    title: "Tranzakt",
    link: "/tranzakt",
    description:
      "Tranzakt is a fintech platform built to make payments, settlements, and financial operations easier for growing businesses.",
    tags: [
      { label: "Fintech" },
      { label: "Web App" },
      { label: "Bill payment" },
      { label: "Payment gateway" },
      { label: "Mobile responsive" },
    ],
    image: "images/project1.png",
  },
  {
    title: "Capalyze",
    link: "/capalyze",
    description:
      "Capalyze is a product that helps African SMEs prepare for funding by assessing their readiness and connecting them to investors that grows their business.",
    tags: [
      { label: "Web App" },
      { label: "Mobile responsive" },
      { label: "B2B tool" },
      { label: "Dashboard" },
      { label: "SaaS" },
    ],
    image: "images/project2.png",
  },
  {
    title: "Paws and Connect",
    link: "/",
    description:
      "A social pet app designed to help pet owners discover nearby playdates, potential mates, and meaningful connections through community-driven interactions",
    tags: [
      { label: "PetTech" },
      { label: "Desktop responsive" },
      { label: "Social media" },
      { label: "Web App" },
      { label: "AI Assistant" },
    ],
    image: "images/project3.png",
  },
  {
    title: "Vuno Socials",
    link: "/vuno",
    description:
      "Vuno is a social discovery app designed to help people feel connected to what’s happening around them, turning local moments, events, and conversations into shared experiences in real time.",
    tags: [
      { label: "Mobile App" },
      { label: "Map-first Interface" },
      { label: "Security" },
      { label: "Social discovery" },
      { label: "Interaction design" },
    ],
    image: "images/project4.png",
  },
];

const Featured: React.FC = () => {
  return (
    <section id="feature" className="max-w-360 mx-auto px-4 md:px-20 py-20">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-reem font-semibold text-gray-900 mb-5 md:mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card
              title={project.title}
              link={project.link}
              description={project.description}
              tags={project.tags}
              image={project.image}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
