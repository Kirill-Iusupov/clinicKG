import React from "react";
import style from "../style/BodyImage.module.scss";
import img from "../image/pexels-photo-1170979.webp";

const BodyImage = () => {
  return (
    <div className={style.container}>
      <img src={img} alt="img" className={style.img} />
      <div>
        <h1>
          Лучшие доктора §<br /> И лучшие клиники
        </h1>
      </div>
    </div>
  );
};

export default BodyImage;