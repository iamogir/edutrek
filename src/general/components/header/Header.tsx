import React from 'react';
import Search from "./search/Search.tsx";
import style from "./header.module.css"
import logo from "../../../icons/sidebar/logo.webp"

const Header = () => {
    return (
        <div className={style.box}>
            <div className={style.leftSide}>
                <img src={logo} alt={"logo"}/>
                <Search/>
            </div>
            <div className={style.rightSide}>
                <p></p>
                <p>Sign out</p>
            </div>
        </div>
    );
};

export default Header;