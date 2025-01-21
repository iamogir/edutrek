// import React, {useEffect} from 'react';
import AlarmOn from "../../../../../icons/alarm/alarmOn.svg";
import AlarmOff from "../../../../../icons/alarm/alarmOff.svg";
import style from "./alarm.module.css"

interface Props {
    serial: number,
    isNotify: boolean
}

const Alarm = ({serial, isNotify}: Props) => {

    // const notFillIcon: string = "m-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z";

    // useEffect(() => {
    //     const element = document.querySelector(".iconAlarm" + serial);
    //     console.log(serial + " " + isNotify)
    //     if (element && isNotify) {
    //         console.log(serial)
    //         const path = element.firstChild as Element | null;
    //         if (path) {
    //             const pathValue = path.getAttribute("d") ?? "";
    //             if (pathValue !== "")
    //                 path.setAttribute("d", pathValue + notFillIcon);
    //             console.log(path.getAttribute("d"))
    //             // path.setAttribute("d", "");
    //         }
    //     }


        // const path = element !== null ? element.firstChild as Element : null;
        // const pathValue = path !== null ? path.getAttribute("d") : null;
        // path !== null ? path.setAttribute("d", pathValue + notFillIcon) : null;


    // }, [])

    return ( isNotify ?
        <div>
            <p>Fri, 12.02.2024 at 12:00</p>
            <AlarmOn className={"iconAlarm" + serial}/>
        </div> :
            <AlarmOff className={"iconAlarm" + serial}/>
    );
};

export default Alarm;