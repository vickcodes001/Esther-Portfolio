import React, { useRef, useState } from "react";
import "./ProjectCarousel.css";

interface CarouselImage {
  src: string;
  width: number;
  height: number;
}

const ProjectCarousel: React.FC = () => {
  const topRowRef = useRef<HTMLDivElement | null>(null);
  const bottomRowRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStart = useRef(0);

  // Include width & height for each image
  const topImages: CarouselImage[] = [
    { src: "/images/top1.png", width: 544, height: 295 },
    { src: "/images/top2.webp", width: 314, height: 321 },
    { src: "/images/top3.webp", width: 544, height: 287 },
    { src: "/images/top4.webp", width: 316, height: 327 },
    { src: "/images/top5.webp", width: 544, height: 314 },
    { src: "/images/top6.webp", width: 314, height: 334 },
    { src: "/images/top7.webp", width: 544, height: 312 },
    { src: "/images/top8.webp", width: 314, height: 314 },
    { src: "/images/top9.webp", width: 544, height: 276 },
  ];

  const bottomImages: CarouselImage[] = [
    { src: "/images/bottom1.webp", width: 544, height: 250 },
    { src: "/images/bottom2.webp", width: 313, height: 318 },
    { src: "/images/bottom3.webp", width: 478, height: 254 },
    { src: "/images/bottom4.webp", width: 313, height: 322 },
    { src: "/images/bottom5.webp", width: 505, height: 262 },
    { src: "/images/bottom6.webp", width: 312, height: 315 },
    { src: "/images/bottom7.webp", width: 544, height: 288 },
    { src: "/images/bottom8.webp", width: 476, height: 323 },
    { src: "/images/bottom9.webp", width: 427, height: 346 },
  ];

  const handleDragStart = (
    e: React.PointerEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!ref.current) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStart.current = ref.current.scrollLeft;
    ref.current.style.cursor = "grabbing";
  };

  const handleDragMove = (
    e: React.PointerEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!isDragging || !ref.current) return;
    const dx = e.clientX - dragStartX.current;
    ref.current.scrollLeft = scrollStart.current - dx;
  };

  const handleDragEnd = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    setIsDragging(false);
    ref.current.style.cursor = "grab";
  };

  const renderRow = (
    images: CarouselImage[],
    ref: React.RefObject<HTMLDivElement | null>,
    reverse = false
  ) => (
    <div
      className={`scroll-row ${reverse ? "reverse" : ""}`}
      ref={ref}
      onPointerDown={(e) => handleDragStart(e, ref)}
      onPointerMove={(e) => handleDragMove(e, ref)}
      onPointerUp={() => handleDragEnd(ref)}
      onPointerLeave={() => handleDragEnd(ref)}
    >
      {[...images, ...images].map((img, i) => (
        <div
          key={i}
          className="w-150 bg-[#F2F2F2] flex justify-center items-center"
        >
          <img
            key={i}
            src={img.src}
            alt={`carousel-${i}`}
            className="carousel-image"
            style={{
              width: img.width,
              height: img.height,
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-20 bg-white">
      <div className="scroll-row-container mb-4">
        {renderRow(topImages, topRowRef)}
      </div>
      <div className="scroll-row-container">
        {renderRow(bottomImages, bottomRowRef, true)}
      </div>
    </div>
  );
};

export default ProjectCarousel;
