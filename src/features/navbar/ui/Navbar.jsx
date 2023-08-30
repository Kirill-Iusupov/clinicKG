import React from "react";
import style from "../style/Navbar.module.scss"

const Navbar = () => {
    return(
        <div className={style.container}>
           <a href="">Home</a>
           <a href="">About</a>
           <a href="">Services</a>
           <a href="">Our doctors</a>
           <a href="">Contact us</a>
        </div>
    )
}

export default Navbar;