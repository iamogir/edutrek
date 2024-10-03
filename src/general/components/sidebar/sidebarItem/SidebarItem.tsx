import React from 'react';
import style from "./sidebarItem.module.css"

interface Props {
    item: string
    Icon: React.FC
}

const SidebarItem = ({item, Icon}:Props) => {
    return (
        <div className={style.box}>
            <Icon/>
            <span>{item}</span>
        </div>
    );
};

export default SidebarItem;