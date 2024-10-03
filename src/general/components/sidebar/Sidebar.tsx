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
                    <NavLink to={"/" + el.route} key={el.route}>
                        {(stateLink) => (
                            <SidebarItem item={el} stateLink={stateLink}/>
                        )}

                    </NavLink>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;