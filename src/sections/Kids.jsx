import React from "react";

function Kids() {
  return (
    <div className="h-screen bg-black flex items-center justify-between px-[5rem] py-[1rem]">
      <div className="right relative">
        <img src="/kids.png" />
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-6xl text-white font-black ">
          Create profiles for kids
        </h3>
        <span className="text-white text-2xl font-light w-[590px]">
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </span>
      </div>
    </div>
  );
}

export default Kids;
