import React from 'react';
import style from "./sidebarItem.module.css"
import {Link} from "react-router-dom";
import {Item} from "../../../interfaces.ts";

interface Props {
    item: Item
}

const SidebarItem = ({item}:Props) => {
    return (
        <Link to={"/" + item.route}>
            <div className={style.box}>
                <div className={style.boxContent}>
                    <item.Icon/>
                    <span>{item.title}</span>
                </div>
            </div>
        </Link>
    );
};

export default SidebarItem;