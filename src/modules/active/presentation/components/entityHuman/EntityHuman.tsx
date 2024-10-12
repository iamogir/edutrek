import React from 'react';
import style from "./entityHuman.module.css";
import Point from "../../../../../icons/entityHuman/point.svg";
import Alarm from "../alarm/Alarm.tsx";

interface Props {
    serial: number
}

const EntityHuman = ({serial}: Props) => {

    let name: string = "Name Surname";

    return (
        <div className={style.box}>
            <div className={style.header}>
                <div>
                    <Point/>
                    <p className={style.name}>{name}</p>
                </div>
                <Alarm  serial={serial}/>
            </div>
            <div className={style.body}>
                <div>
                    <p>num</p>
                    <p>em ad</p>
                </div>
                <div>
                    <p>loc</p>
                    <p>FSD</p>
                </div>
            </div>
        </div>
    );
};

export default EntityHuman;