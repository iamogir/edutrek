import React, {useState} from 'react';
import style from "./sidebarItem.module.css"
import {Item} from "../../../interfaces.ts";

interface Props {
    item: Item,
    isActive: boolean
}

const SidebarItem = ({item, isActive}:Props) => {

    const [isHover, setIsHover] = useState(false);

    return (
            <li className={`${style.box} ${isActive ? style.active : ""}`} onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}>
                <div className={style.boxContent}>
                    <item.Icon fill={`${isActive || isHover ? "#F8F8F8" : "#2ecc71"}`}/>
                    <span>{item.title}</span>
                </div>
            </li>
    );
};

export default SidebarItem;