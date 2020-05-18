import React from "react";
import { Helmet } from "react-helmet";

const TitleComponent = ({ title }) => {
  const defaultTitle = "Veggiessimo";
  const newTitle = `${title} | Veggiessimo`;
  return (
    <Helmet>
      <title>{title ? newTitle : defaultTitle}</title>
    </Helmet>
  );
};

export default TitleComponent;
