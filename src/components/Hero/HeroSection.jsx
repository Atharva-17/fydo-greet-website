import React from "react";

const HeroSection = () => {
  return (
    <>
      <div class=" bg-cover object-cover bg-[url('/assets/heroimg.jpeg')]">
        <div class="container lg:max-w-screen-[1330px] lg:px-10 mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-full md:w-7/12 md:text-left text-center px-4 md:mt-0 mt-8">
              <div class="mb-12 lg:mb-0 lg:max-w-[570px] text-white">
                <p className="lg:text-[3.5rem] md:text-[2rem] text-[1.5rem] font-bold lg:leading-[64px] ">
                  Effortlessly go live with your event in a go!
                </p>
                <p className="lg:text-[1rem] text-[0.75rem] lg:mt-8 md:mt-2 mt-4">
                  Empower your events, whether on-ground or digital, with our
                  user-friendly platform loved by millions, making event
                  creation and hosting a breeze
                </p>
                <button className="bg-[#FE3838] px-8 py-4 font-bold rounded-xl lg:mt-14 md:mt-8 mt-10 md:w-auto w-full text-[12px]">
                  LIST YOUR EVENT
                </button>
              </div>
            </div>
            <div class="w-full md:w-5/12 px-4">
              <div class="relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0">
                <img
                  src="/assets/hero-phone.png"
                  alt="hero image"
                  class="mx-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
