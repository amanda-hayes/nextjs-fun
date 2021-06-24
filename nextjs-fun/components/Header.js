import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>DIY</span> How-tos
      </h1>
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
