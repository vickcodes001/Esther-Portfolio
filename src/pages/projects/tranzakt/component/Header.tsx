import { ArrowBack, TopRight, TranzaktLogo } from "../../../../assets";

const qualities = [
  {
    title: "Fintech",
  },
  {
    title: "UX Research",
  },
  {
    title: "UX Design",
  },
];

const Header = () => {
  return (
    <div className="flex flex-col gap-10 w-full max-w-360 mx-auto mt-37 md:mt-50 px-4 md:px-20">
      <button className="flex items-center justify-center gap-2 bg-[#F7F7F7] px-2 py-2.5 text-xs rounded-md w-20.75">
        <img src={ArrowBack} /> Back
      </button>
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-[#20232D] text-[48px]">Tranzakt</h3>
          <button className="flex items-center justify-center gap-4 bg-[#153B30] rounded-[10px] text-white px-4 py-2.5">
            View Project <img src={TopRight} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#20232D] font-medium">
            Unified payment solution for businesses and individuals
          </p>
          <div className="flex gap-5">
            {qualities.map((quality, index) => (
              <p
                key={index}
                className="bg-[#F6F8FA] px-2 py-1 rounded-md text-[12px] text-[#525866]"
              >
                {quality.title}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* desscription */}
      <div className="flex flex-col gap-5 text-[#20232D]">
        <p>
          Tranzakt is a multi product payments ecosystem built for businesses to
          collect money, manage settlements, and run financial operations at
          scale. The products includes; Tranzakt Payment Platform (TPP),
          Tranzakt Payment Gateway, Bill Payment, Tranzakt Documentation.
        </p>
        <p>
          This case study focuses on the Tranzakt Payment Platform (TPP) and how
          I redesigned the KYC onboarding experience to reduce friction for
          merchants while improving compliance clarity for admins.
        </p>
      </div>

      {/* large icon */}
      <div className="flex items-center justify-center w-full h-49.5 rounded-2xl bg-[#F7F7F7]">
        <img src={TranzaktLogo} />
      </div>
    </div>
  );
};

export default Header;
