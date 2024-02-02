import React from "react";

const MetricsSection = () => {
  return (
    <>
      <div className="bg-[#0B0D17] xl:px-20 xl:py-[120px] sm:px-8 sm:py-[120px] px-4 py-10">
        <div className="text-center">
          <p className="lg:text-[3rem] md:text-[2rem] sm:text-[1.5rem] text-[1.25rem] font-extrabold text-white">
            Our Metrics Tell the Story
          </p>
          <p className="text-white lg:text-[1.125rem] sm:text-[1rem] text-[0.875rem] mt-5">
            Explore Compelling Insights Uncovered by Our Metrics and Data
            Analysis
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 mx-auto lg:gap-[30px] gap-[24px] mt-[60px] text-center">
          <div className="flex flex-col items-center xl:gap-[5px] md:gap-[10px] bg-white px-4 py-12 rounded-t-[20px] border-b-[16px] border-[#FE3838] ">
            <p className="lg:text-[2.375rem] text-[1.5rem] font-bold">500+</p>
            <p className="text-[1rem] font-normal">Happy Organisers</p>
          </div>

          <div className="flex flex-col items-center gap-[5px] bg-white px-4 py-12 rounded-t-[20px] border-b-[16px] border-[#FE3838] ">
            <p className="lg:text-[2.375rem] text-[1.5rem] font-bold">2,500+</p>
            <p className="text-[1rem] font-normal">
              Successful Events Organised
            </p>
          </div>

          <div className="flex flex-col items-center gap-[5px] bg-white px-4 py-12 rounded-t-[20px] border-b-[16px] border-[#FE3838] ">
            <p className="lg:text-[2.375rem] text-[1.5rem] font-bold">
              50,000+
            </p>
            <p className="text-[1rem] font-normal">Tickets Sold</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetricsSection;
