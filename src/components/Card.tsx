import React from "react";
import { Link } from "react-router-dom";
import { Check, Redirect } from "../assets";

interface Tag {
  label: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: Tag[];
  image: string;
  link: string;
}

const Card: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  link,
}) => {
  return (
    <Link to={link}>
      <div className="bg-[#FCFCFC] border border-[#EDEDED] px-5 pt-8 rounded-2xl h-full flex flex-col">
        {/* Project Title */}
        <Link
          to={link}
          className="flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity w-fit"
        >
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <img src={Redirect} alt="Visit project" className="w-4 h-4" />
        </Link>
        {/* Project Description */}
        <p className="text-[#121212] text-sm md:text-base mb-4 leading-relaxed">
          {description}
        </p>
        {/* Project Tags */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4.75">
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={Check} alt="" className="w-4 h-4 shrink-0" />
              <span className="text-[12px] md:text-sm text-[#525866]">
                {tag.label}
              </span>
            </div>
          ))}
        </div>
        {/* Project Image */}
        <div className="flex items-end w-full overflow-hidden mt-auto">
          <img src={image} alt={title} className="w-full h-auto object-cover" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
