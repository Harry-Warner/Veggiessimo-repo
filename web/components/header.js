import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="top-0 w-full h-6 bg-green fixed flex justify-between">
      <img className="h-8 mx-2" src={logo} />
      <img
        className="w-8 h-full self-center cursor-pointer"
        src="images/toggle-icon.png"
      />
    </div>
  );
};

export default Header;
