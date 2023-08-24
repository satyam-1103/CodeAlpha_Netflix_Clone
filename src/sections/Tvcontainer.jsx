import React from "react";

function Tvcontainer() {
  return (
    <div className="h-screen bg-black flex items-center justify-between px-[5rem] py-[1rem]">
      <div className="flex flex-col gap-6">
        <h3 className="text-6xl text-white font-black ">Enjoy on your TV</h3>
        <span className="text-white text-2xl font-light w-[590px]">
          Watch on smartTvs, PlayStation, Xbox, Chromecast, Apple TV, Blue-ray
          players and more.
        </span>
      </div>
      <div className="right">
        <img src="/tv.png" />
      </div>
    </div>
  );
}

export default Tvcontainer;
