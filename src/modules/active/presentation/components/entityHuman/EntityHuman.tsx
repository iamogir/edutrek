import React from 'react';
import style from "./entityHuman.module.css";
import Point from "../../../../../icons/entityHuman/point.svg";
import Alarm from "../alarm/Alarm.tsx";

interface Props {
    serial: number
}

const EntityHuman = ({serial}: Props) => {

    let name: string = "lol lolov";

    return (
        <div className={style.box}>
            <div className={style.header}>
                <div>
                    <Point/>
                    <p>{name}</p>
                </div>
                <Alarm  num={serial}/>
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