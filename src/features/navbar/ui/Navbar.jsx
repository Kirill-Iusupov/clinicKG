import React from "react";
import style from "../style/Navbar.module.scss"
import Button from "../../../shared/button";
import Logo from "../../../shared/logo/ui/Logo";

const Navbar = () => {
    return(
        <div className="container flex justify-between">
        <Logo />
        <div className={`${style.container}`}>
           <a href="">Home</a>
           <a href="">About</a>
           <a href="">Services</a>
           <a href="">Our doctors</a>
           <a href="">Contact us</a>
        </div>
        <Button />
        </div>
    )
}

export default Navbar;