import React from "react";

const MealTitle = (props) => {
  return (
    <>
      <h1 className="mt-3 lg:mt-16 text-center text-vbig md:text-vhuge font-script">
        {props.title}
      </h1>
      <h2 className="mx-2 text-center font-bold font-sans mt-2 mb-6 md:mb-12 lg:mb-16 text-xs md:text-lg lg:text-xl uppercase">
        {props.description}
      </h2>
    </>
  );
};

export default MealTitle;
