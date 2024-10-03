import React from 'react';
import style from "./sidebarItem.module.css"
import {Item} from "../../../interfaces.ts";

interface Props {
    item: Item,
    isActive: boolean
}

const SidebarItem = ({item, isActive}:Props) => {

    return (
            <li className={`${style.box} ${isActive ? style.active : ""}`}>
                <div className={style.boxContent}>
                    <item.Icon/>
                    <span>{item.title}</span>
                </div>
            </li>
    );
};

export default SidebarItem;