import React from "react";

const AppSection = () => {
  return (
    <>
      <div className="bg-black relative xl:block hidden">
        <img
          className="w-full object-cover absolute"
          src="/assets/graphics.svg"
          alt="icon"
        />

        <div className="flex justify-between mx-auto p-20">
          <img src="/assets/logo1.svg" alt="img" />
          <img src="/assets/logo3.svg" alt="img" />
          <img src="/assets/logo2.svg" alt="img" />
        </div>
      </div>
    </>
  );
};

export default AppSection;
