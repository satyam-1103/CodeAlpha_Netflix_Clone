import React from "react";

function WatchAny() {
  return (
    <div>
      <div className="h-screen bg-black flex items-center justify-between px-[5rem] py-[1rem]">
        <div className="flex flex-col gap-6">
          <h3 className="text-6xl text-white font-black ">Watch anywhere</h3>
          <span className="text-white text-2xl font-light w-[590px]">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </span>
        </div>
        <div className="right">
          <img src="/device-mockup.png" />
        </div>
      </div>
    </div>
  );
}

export default WatchAny;
