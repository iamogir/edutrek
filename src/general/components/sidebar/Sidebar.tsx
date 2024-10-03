import React from 'react';
import CreateButton from "./createButton/CreateButton.tsx";
import {sidebarItems} from "../../utils/constants.ts";
import SidebarItem from "./sidebarItem/SidebarItem.tsx";
import style from "./sidebar.module.css"
import {Link, useLocation} from "react-router-dom";

const Sidebar = () => {

    const location = useLocation();
    const path: string = location.pathname;

    return (
        <div>
            <div>
                <CreateButton/>
            </div>
            <ul className={style.block}>
                {sidebarItems.map(el =>
                    <Link to={"/" + el.route}>
                        <SidebarItem item={el} isActive={path === "/" + el.route} key={el.route}/>
                    </Link>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;