import React from "react";
import Image from "next/image";

const OrganiserSection = () => {
  return (
    <>
      <div className="bg-[#FE3838] relative w-full">
        <img
          className="w-full h-full object-cover absolute"
          src="/assets/graphic1.png"
          alt="icon"
        />

        <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto">
          <div className="md:px-10 px-4 flex flex-col justify-center">
            <p className="text-white xl:text-[3rem] text-[1.5rem] font-extrabold lg:text-left text-center lg:mt-0 mt-10">
              Exclusive App For Organiser
            </p>
            <div className="md:px-12 md:py-10 px-4 py-[30px] mt-10 rounded-[32px] shadow-sm border-[0.787px] border-[#E5F4F2] bg-white text-black ">
              <div className="lg:flex-row items-center flex flex-col gap-[14px]">
                <Image
                  src="/assets/cel.svg"
                  width={56}
                  height={56}
                  alt="icon"
                />
                <p className="text-[#2D2D2D] md:text-[1.125rem] text-[1rem] font-bold lg:text-left text-center">
                  Seamless Event Check-In with Greet
                </p>
              </div>
              <p className="mt-4 text-[#2D2D2D] md:text-[1rem] text-[0.875rem] lg:text-left text-center">
                Effortlessly manage event attendance! Greet's QR code scanning
                feature empowers organizers to swiftly confirm attendee presence
                at the event venue, ensuring a smooth and hassle-free check-in
                experience for everyone involved.
              </p>
            </div>
            <div className="md:px-12 md:py-10 px-4 py-[30px] mt-[22px] rounded-[32px] shadow-sm border-[0.787px] border-[#E5F4F2] bg-white text-black">
              <div className="lg:flex-row items-center flex flex-col gap-[14px]">
                <Image
                  src="/assets/share.svg"
                  width={56}
                  height={56}
                  alt="icon"
                />
                <p className="text-[#2D2D2D] md:text-[1.125rem] text-[1rem] font-bold lg:text-left text-center">
                  Empower Your Events with Real-Time Insights
                </p>
              </div>
              <p className="mt-4 text-[#2D2D2D] md:text-[1rem] text-[0.875rem] lg:text-left text-center">
                Unlock the potential of your event's success! Greet provides
                event organizers with a comprehensive analytics dashboard,
                offering real-time data on sales, ticket bookings, and more.
              </p>
            </div>
          </div>
          <div className="">
            <img className="" src="/assets/organiser.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganiserSection;
