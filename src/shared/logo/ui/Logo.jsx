import React from "react";
import style from "../style/logo.module.scss";

const Logo = () => {
  return (
    <div className={style.container}>
      <span className={style.logo}></span>
      <p>HEALTH<span>CARE</span></p>
    </div>
  );
};

export default Logo;
