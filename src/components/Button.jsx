import React from "react";

const Button = (props) => {
  return (
    <button className="bg-red-600 ml-4 py-[2px] px-3 rounded-md text-center text-white font-bold">
      {props.title}
    </button>
  );
};

export default Button;
