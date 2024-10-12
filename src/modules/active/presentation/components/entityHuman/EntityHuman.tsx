import React from 'react';
import style from "./entityHuman.module.css";
import Point from "../../../../../icons/entityHuman/point.svg";

const EntityHuman = () => {

    let name: string = "lol lolov";

    return (
        <div className={style.box}>
            <div className={style.header}>
                <Point/>
                <p>{name}</p>
            </div>
            <div className={style.body}>
                num
                ad
                tel
            </div>
        </div>
    );
};

export default EntityHuman;