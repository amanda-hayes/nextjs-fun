import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>DIY</span> How-tos
      </h1>
      <p className={headerStyles.description}>
        Get help building your dream project!
      </p>
      <style jsx>
        {`
          .title {
            color: purple;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
