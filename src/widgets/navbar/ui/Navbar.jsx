import React from "react";
import Logo from "../../../shared/logo/ui/Logo";
import styles from "../styles/navbar.module.scss"

const Navbar = () => {
    return (
        <div className={`${styles.navbar }`}>
            <Logo />
        </div>
    )
}

export default Navbar;