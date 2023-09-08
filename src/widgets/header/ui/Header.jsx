import React from 'react';
import Wrapper from '../../../shared/wrapper/'


import styles from "../styles/header.module.scss"
import {Links, SomeInfo, Days, Mails} from "../../../shared"

const Header = () => {
    return (
        <div className={`${styles.header } `}>
            <Wrapper >
                <div className="flex justify-between items-center">
                    <Links />
                    <SomeInfo />
                    <Days />
                    <Mails />
                </div>
            </Wrapper>
        </div>
    );
}

export default Header;
