import React from 'react';
import style from "./sidebarItem.module.css"

interface Props {
    item: string
    Icon: React.FC
}

const SidebarItem = ({item, Icon}:Props) => {
    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <Icon/>
                <span>{item}</span>
            </div>
        </div>
    );
};

export default SidebarItem;