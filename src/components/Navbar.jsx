import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex justify-between px-[5rem] py-[2rem] min-w-full bg-black">
      <div className="left">
        <h1 className="text-2xl font-black text-red-600 tracking-[7px] italic leading-5">
          NETFLIX CLONE
        </h1>
      </div>
      <div className="right">
        <select name="" id="">
          <option value="">English</option>
          <option value="">Hindi</option>
        </select>
        <Button title="Sign in" />
      </div>
    </div>
  );
}

export default Navbar;
