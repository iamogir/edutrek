import React, {useState} from 'react';
import style from "./sidebarItem.module.css"
import {Item} from "../../../interfaces.ts";
import {NavLinkRenderProps} from "react-router-dom";

interface Props {
    item: Item,
    stateLink: NavLinkRenderProps
}

const SidebarItem = ({item, stateLink}:Props) => {

    const [isHover, setIsHover] = useState(false);

    return (
            <li className={`${style.box} ${stateLink.isActive ? style.active : ""}`} onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}>
                <div className={style.boxContent}>
                    <item.Icon fill={`${stateLink.isActive || isHover ? "#F8F8F8" : "#2ecc71"}`}/>
                    <span>{item.title}</span>
                </div>
            </li>
    );
};

export default SidebarItem;