import React from 'react';
import style from "./entityHuman.module.css";
import Point from "../../icons/entityHuman/point.svg";

const EntityHuman = () => {

    let name: string = "lol";

    return (
        <div>
            <div className={style.header}>
                <Point/>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default EntityHuman;