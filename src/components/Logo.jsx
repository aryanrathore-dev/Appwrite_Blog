import React from "react";

function Logo({ className }) {
  return (
    <div>
      <img
      src="https://cdn.pixabay.com/photo/2017/07/04/12/16/blogger-2470865_1280.png"
        alt=""
        className={`w-[40px] rounded-xl ${className} || "" `}
      />
    </div>
  );
}

export default Logo;