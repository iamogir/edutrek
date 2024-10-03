import React from 'react';
import CreateButton from "./createButton/CreateButton.tsx";
import {sidebarItems} from "../../utils/constants.ts";
import SidebarItem from "./sidebarItem/SidebarItem.tsx";
import style from "./sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div>
                <CreateButton/>
            </div>
            <ul className={style.block}>
                {sidebarItems.map(el =>
                    <NavLink to={"/" + el.route}>
                        {(stateLink) => (
                            <SidebarItem item={el} stateLink={stateLink} key={el.route}/>
                        )}

                    </NavLink>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;