import React from 'react';


import styles from "../styles/header.module.scss"
import {Links, SomeInfo, Days, Mails} from "../../../shared"

const Header = () => {
    return (
        <div className={`${styles.header } `}>
            <div className="container flex justify-between items-center">
                <Links />
                <SomeInfo />
                <Days />
                <Mails />
            </div>
        </div>
    );
}

export default Header;
