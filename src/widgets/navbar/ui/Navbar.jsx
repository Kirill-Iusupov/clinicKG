import React from "react";
import LogoHealth from "../../../shared/logoHealth/index";
import styles from "../styles/navbar.module.scss"

const Navbar = () => {
    return (
        <div className={`${styles.navbar }`}>
            <LogoHealth />
        </div>
    )
}

export default Navbar;