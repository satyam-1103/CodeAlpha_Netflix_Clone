import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqComponent = ({ open, toggle, quest, answer }) => {
  return (
    <div className="px-[10px]">
      <div
        className="bg-[#2D2D2D] py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold text-white">{quest}</p>
        <div className="">{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
      </div>
      <Collapse isOpened={open} style={{ color: "white" }}>
        <div className="text-white bg-[#2D2D2D] px-[50px] py-[25px] text-[22px]">
          {answer}
        </div>
      </Collapse>
    </div>
  );
};

export default FaqComponent;
