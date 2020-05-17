import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="top-0 left-0 px-1 w-full h-6 bg-green fixed">
      <div className="mx-auto w-full flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg h-full">
        <img className="h-8" src={logo} />
        <img
          className="w-5 py-1 h-full self-center cursor-pointer"
          src="images/toggle-icon.png"
        />
      </div>
    </div>
  );
};

export default Header;
