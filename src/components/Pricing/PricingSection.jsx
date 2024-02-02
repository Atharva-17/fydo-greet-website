import React from "react";
import Image from "next/image";

const PricingSection = () => {
  return (
    <>
      <div className="xl:flex hidden items-center gap-10 p-20">
        <div className="">
          <p className="uppercase text-[#FE3838] text-[1.125rem] font-bold tracking-wider">
            Pricing
          </p>
          <p className="mt-3 text-[2.5rem] text-[#170F49] leading-[48px] font-bold">
            Starting from 5% commission Lowest price guaranteed
          </p>
        </div>
        <div className="px-14 py-12 rounded-[32px] shadow-sm border-[0.787px] border-[#E5F4F2]">
          <div className="flex items-center gap-[14px]">
            <Image src="/assets/globe.svg" width={56} height={56} alt="icon" />
            <p className="text-[#6F6C90] text-[0.875rem] font-medium">
              For individuals <br />{" "}
              <span className="text-[#170F49] text-[1.125rem] font-bold">
                Online
              </span>
            </p>
          </div>
          <p className="mt-4 text-[#6F6C90] text-[1rem]">
            We sell tickets for online events and you can host event at any
            platform of your choice.
          </p>
        </div>
        <div className="px-14 py-12 rounded-[32px] shadow-sm border-[0.787px] border-[#E5F4F2]">
          <div className="flex items-center gap-[14px]">
            <Image
              src="/assets/location.svg"
              width={56}
              height={56}
              alt="icon"
            />
            <p className="text-[#6F6C90] text-[0.875rem] font-medium">
              For individuals <br />{" "}
              <span className="text-[#170F49] text-[1.125rem] font-bold">
                On Ground
              </span>
            </p>
          </div>
          <p className="mt-4 text-[#6F6C90] text-[1rem]">
            We sell tickets for online events and you can host event at any
            platform of your choice.
          </p>
        </div>
      </div>
    </>
  );
};

export default PricingSection;
