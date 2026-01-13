const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-between items-center w-full max-w-360 mx-auto px-4 md:px-20 my-10 md:my-30">
      <div className="w-full md:w-[47%]">
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
        <div className="mt-10 text-[#20232D]">
          <h3 className="text-[32px] font-semibold font-reem mb-6">
            My Design Process
          </h3>

          <div className="flex flex-col gap-6 pl-5 space-y-2 text-[#20232D]">
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
          </div>
        </div>
      </div>
      <div className="w-full md:w-[44%] md:h-177.5">
        <img
          src="images/about-profile.png"
          alt=""
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
