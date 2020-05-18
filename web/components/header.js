const Header = () => {
  return (
    <div className="top-0 left-0 px-1 w-full h-8 bg-green fixed">
      <div className="mx-auto h-full w-full flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
        <a href="/index">
          <img className="h-12" src="images/logo.png" />
        </a>
        <img
          className="w-6 py-2 h-full self-center cursor-pointer"
          src="images/toggle-icon.png"
        />
      </div>
    </div>
  );
};

export default Header;
