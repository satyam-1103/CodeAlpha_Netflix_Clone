import React from "react";

function Mobile() {
  return (
    <div className="h-screen bg-black flex items-center justify-between px-[5rem] py-[1rem]">
      <div className="right relative">
        <img src="/mobile-mockup.jpg" />
        <div className="download-theme absolute flex items-center justify-center space-x-2 w-[300px] mx-28 border-2 py-[7px] px-[15px] rounded-xl border-gray-500">
          <div className="icon">
            <img src="/boxshot.png" alt="" className="h-24 w-full" />
          </div>
          <div className="right">
            <h5 className="title text-base text-white w-full">
              Stranger Things
            </h5>
            <span className="download text-blue-500">Downloading...</span>
          </div>
          <div className="animated-icon">
            <img src="/download-icon.gif" alt="" className="w-10 space-x-10" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-6xl text-white font-black ">
          Download your shows to watch offline
        </h3>
        <span className="text-white text-2xl font-light w-[590px]">
          Save your favourites easily and always have something to watch.
        </span>
      </div>
    </div>
  );
}

export default Mobile;
