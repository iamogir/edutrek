import React, {useEffect} from 'react';
import AlarmIcon from "../../../../../icons/alarm/alarm.svg";
import style from "./alarm.module.css"

interface Props {
    serial: number
}

const Alarm = ({serial}: Props) => {

    const fillIcon: string = "m-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z";

    useEffect(() => {
        const element = document.querySelector(".iconAlarm" + serial);
        const path = element.firstChild as Element;
        const pathValue = path.getAttribute("d");
        path.setAttribute("d", pathValue + fillIcon);


    }, [])

    return (
        <div className={style.box}>
            <p>Fri, 12.02.2024 at 12:00</p>
            <AlarmIcon className={"iconAlarm" + serial}/>
        </div>
    );
};

export default Alarm;