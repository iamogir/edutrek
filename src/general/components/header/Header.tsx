import React from 'react';
import Search from "./search/Search.tsx";
import style from "./header.module.css"
import logo from "../../../icons/sidebar/logo.webp"
import LogoutIcon from "../../../icons/sidebar/logout.svg?react"

const Header = () => {
    return (
        <div className={style.box}>
            <div className={style.leftSide}>
                <img src={logo} alt={"logo"}/>
                <Search/>
            </div>
            <div className={style.rightSide}>
                <span className={style.logout}><LogoutIcon/></span>
                <p>Sign out</p>
            </div>
        </div>
    );
};

export default Header;