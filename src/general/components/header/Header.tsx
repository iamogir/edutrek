import React, {useState} from 'react';
import Search from "./search/Search.tsx";
import style from "./header.module.css"
import logo from "../../../images/header/logo.webp"
import LogoutIcon from "../../../icons/header/logout.svg"
import {Link} from "react-router-dom";

const Header = () => {

    const [isHover, setIsHover] = useState(false);
    const Logo = () => (<img src={"../../../images/header/logo.webp"} alt={"logo"}/>);

    return (
        <div className={style.box}>
            <div className={style.leftSide}>
                <img src={logo} alt={"logo"}/>
                <Search/>
            </div>
            <Link to={"#"} className={style.rightSide} onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => setIsHover(false)}>
                <span className={style.logout}><LogoutIcon fill={isHover ? "#F8F8F88E" : "#f8f8f8"}/></span>
                <p>Sign out</p>
            </Link>
        </div>
    );
};

export default Header;