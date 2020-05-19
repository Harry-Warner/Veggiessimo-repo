import React from "react";
const NavBar = () => {
  return (
    <div className="w-full h-8 md:h-12 lg:h-26 block bg-white">
      <div className="w-10/12 h-full grid grid-cols-4 mx-auto items-center">
        <a
          href="#"
          className="item h-full text-center text-sm md:text-xl lg:text-xxl font-sans text-black self-center border-solid border-b-2 md:border-b-4 border-white hover:border-green"
        >
          ABOUT
        </a>
        <a
          href="/recipes"
          className="item h-full text-center text-sm md:text-xl lg:text-xxl font-sans text-black self-center border-solid border-b-2 md:border-b-4 border-white hover:border-green"
        >
          RECIPES
        </a>
        <a
          href="#"
          className="item h-full text-center text-sm md:text-xl lg:text-xxl font-sans text-black self-center border-solid border-b-2 md:border-b-4 border-white hover:border-green"
        >
          COMMUNITY
        </a>
        <a
          href="#"
          className="item h-full text-center text-sm md:text-xl lg:text-xxl font-sans text-black self-center border-solid border-b-2 md:border-b-4 border-white hover:border-green"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default NavBar;
