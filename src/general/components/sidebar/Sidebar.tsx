import React from 'react';
import CreateButton from "./createButton/CreateButton.tsx";
import {sidebarItems} from "../../utils/constants.ts";

const Sidebar = () => {
    return (
        <div>
            <div>
                <CreateButton/>
            </div>
            {sidebarItems.map(el => <div>{el.title}</div>)}
        </div>
    );
};

export default Sidebar;