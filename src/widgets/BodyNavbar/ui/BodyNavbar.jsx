import React from "react";
import style from "../style/BodyNavbar.module.scss";

const BodyNavbar = () => {
  return (
    <div className={style.container}>
      <ul>
        <a href="">Apointment <p>{">"}</p></a>
        <a href="">Find A Doctor <p>{">"}</p></a>
        <a href="">Tests & Services <p>{">"}</p></a>
        <a href="">Health Packeges <p>{">"}</p></a>
      </ul>
    </div>
  );
};

export default BodyNavbar;
