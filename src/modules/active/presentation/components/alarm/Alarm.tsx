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
        if (element) {
            const path = element.firstChild as Element | null;
            if (path) {
                const pathValue = path.getAttribute("d") ?? "";
                if (pathValue !== "")
                    path.setAttribute("d", pathValue + fillIcon);
            }
        }
        // const path = element !== null ? element.firstChild as Element : null;
        // const pathValue = path !== null ? path.getAttribute("d") : null;
        // path !== null ? path.setAttribute("d", pathValue + fillIcon) : null;


    }, [])

    return (
        <div className={style.box}>
            <p>Fri, 12.02.2024 at 12:00</p>
            <AlarmIcon className={"iconAlarm" + serial}/>
        </div>
    );
};

export default Alarm;