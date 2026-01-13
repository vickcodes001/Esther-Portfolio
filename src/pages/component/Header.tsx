import { useEffect, useState } from "react";
import { MailIcon, ProjectIcon } from "../../assets";

const words = ["Fintech", "Healthtech", "Social Media", "Web3", "Real Estate"];

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-360 mx-auto mt-37 md:mt-50 px-4 md:px-20">
      <h1 className="text-[20px] md:text-[32px] pr-12 md:pr-0 font-medium text-[#20232D] leading-normal">
        Hey 👋 <br />I am Onyewuchi Chikamso Esther, a UI UX Designer with over
        2 years experience designing{" "}
        <span className="relative inline-block h-[1.2em] w-30.5 md:w-47 overflow-hidden align-baseline top-[0.2em]">
          {words.map((word, i) => (
            <span
              key={word}
              className="absolute left-0 top-0 w-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(${(i - index) * 100}%)`,
              }}
            >
              <span className="text-amber-500 font-bold whitespace-nowrap leading-none">
                {word}
              </span>
            </span>
          ))}
        </span>{" "}
        websites and mobile applications.
      </h1>

      <div className="mt-10 flex gap-4">
        <button className="flex justify-between bg-[#153B30] text-white px-6 py-3 w-41.25 rounded-2xl">
          <img src={MailIcon} alt="" />
          Contact Me
        </button>
        <button className="flex justify-between bg-[#F6F8FA] border border-[#E2E4E9] px-6 py-3 w-44.75 rounded-2xl">
          <img src={ProjectIcon} alt="" />
          View Projects
        </button>
      </div>
    </section>
  );
};

export default Header;
