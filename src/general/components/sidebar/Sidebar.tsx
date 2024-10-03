import React from 'react';
import CreateButton from "./createButton/CreateButton.tsx";
import {sidebarItems} from "../../utils/constants.ts";
import SidebarItem from "./sidebarItem/SidebarItem.tsx";
import style from "./sidebar.module.css"

const Sidebar = () => {
    return (
        <div>
            <div>
                <CreateButton/>
            </div>
            <div className={style.block}>
                {sidebarItems.map(el => <SidebarItem item={el}/>)}
            </div>
        </div>
    );
};

export default Sidebar;