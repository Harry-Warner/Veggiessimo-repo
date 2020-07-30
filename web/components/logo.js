import React from "react";

const Logo = (props) => {
  return (
    <div
      className={`absolute ${
        props.footer ? "right-0 bottom-0 z-10" : "left-0 top-0"
      } px-2`}
    >
      <img
        src="/images/logoPlain.png"
        alt="Veggiessimo logo - light pink mishapen tomato with a blue leaf atop"
        className={`h-16 ${props.footer ? "md:h-24" : "md:h-20"}`}
      />
      <div className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center">
        <h2 className="pt-4 md:pt-6 font-sans-thin font-normal uppercase text-xxxs md:text-xxs">
          meals + love
        </h2>
      </div>
    </div>
  );
};

export default Logo;
