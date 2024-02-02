import React from "react";
import Image from "next/image";

const FeatureSection = () => {
  const featureData = [
    {
      id: 1,
      icon: "/assets/Icon1.svg",
      name: "Dedicated Relationship Manager",
      desc: "Fydo's Dedicated Relationship Manager offers personalized, stress-free event support from setup to the big day",
    },
    {
      id: 2,
      icon: "/assets/Icon2.svg",
      name: "On Demand Settlement",
      desc: "Streamline settlements for stress-free event finances, offering flexibility and control in your planning",
    },
    {
      id: 3,
      icon: "/assets/Icon3.svg",
      name: "Customer Analytics Data",
      desc: "Use Fydo's Customer Analytics Data for refined strategies, boosted engagement, and more resonant events from attendee insights",
    },
    {
      id: 4,
      icon: "/assets/Icon3.svg",
      name: "Customer Analytics Data",
      desc: "Use Fydo's Customer Analytics Data for refined strategies, boosted engagement, and more resonant events from attendee insights",
    },
    {
      id: 5,
      icon: "/assets/Icon5.svg",
      name: "24/7 Call Support",
      desc: "Count on Fydo's 24/7 On-Call Assistance for seamless event support anytime, for organizers and attendees alike.",
    },

    {
      id: 6,
      icon: "/assets/Icon6.svg",
      name: "On site representative on event day",
      desc: "Fydo's on-site reps guarantee a smooth event day so you can focus on creating memorable moments",
    },

    {
      id: 7,
      icon: "/assets/Icon7.svg",
      name: "Exclusive App for Organisers",
      desc: "Optimize events with Greet, Fydo's Organizer App, for effortless check-ins and real-time insights",
    },

    {
      id: 8,
      icon: "/assets/Icon7.svg",
      name: "Exclusive App for Organisers",
      desc: "Optimize events with Greet, Fydo's Organizer App, for effortless check-ins and real-time insights",
    },
  ];
  return (
    <>
      <div className="xl:px-20 xl:py-20 md:px-8 md:py-20 py-10 px-4">
        <div className="text-center">
          <p className="lg:text-[3rem] md:text-[2rem] sm:text-[1.5rem] text-[1.25rem] font-extrabold">
            Features
          </p>
          <p className="text-[#2D2D2D] lg:text-[1.125rem] sm:text-[1rem] text-[0.875rem]">
            Few good reasons why you should use Greet as your ticketing partner.
          </p>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto gap-6 mt-[3.75rem]">
          {featureData.map((item, index) => {
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center px-[23.605px] py-[31.473px] rounded-2xl shadow-sm border-[0.787px] border-[#E5F4F2]"
              >
                <Image src={`${item.icon}`} width={64} height={64} alt="icon" />
                <p className="mt-6 text-[#2D2D2D] font-semibold md:text-[1.5rem] text-[1.25rem]">
                  {item.name}
                </p>
                <p className="mt-4 text-[#475467] md:text-[1rem] text-[0.875rem]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
