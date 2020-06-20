import React, { useState, useEffect } from "react";

const ContactImage = () => {
  const [width, setWidth] = useState(
    window.innerWidth /
      parseFloat(getComputedStyle(document.querySelector("html"))["font-size"])
  );

  useEffect(() => {
    const handleWindowResize = () =>
      setWidth(
        window.innerWidth /
          parseFloat(
            getComputedStyle(document.querySelector("html"))["font-size"]
          )
      );
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <>
      {width < 48 ? (
        <img
          className="w-full z-0"
          src="images/contact640.png"
          alt="background"
        />
      ) : width < 64 ? (
        <img
          className="w-full z-0"
          src="images/contact768.png"
          alt="background"
        />
      ) : (
        <img
          className="w-full z-0"
          src="images/contact1024.png"
          alt="background"
        />
      )}
    </>
  );
};

export default ContactImage;
