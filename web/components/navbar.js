const NavBar = () => {
  return (
    <div className="w-full h-8 block bg-white">
      <div className="w-10/12 h-full flex mx-auto">
        <a
          href="#"
          className="item text-sm font-sans text-black h-full mx-auto hover:bg-lightPink"
        >
          ABOUT
        </a>
        <a
          href="/recipes"
          className="item text-sm font-sans text-black h-full mx-auto hover:bg-lightPink"
        >
          RECIPES
        </a>
        <a
          href="#"
          className="item text-sm font-sans text-black h-full mx-auto hover:bg-lightPink"
        >
          COMMUNITY
        </a>
        <a
          href="#"
          className="item text-sm font-sans text-black h-full mx-auto hover:bg-lightPink"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default NavBar;
