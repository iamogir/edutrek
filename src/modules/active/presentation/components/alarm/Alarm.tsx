import React, {useEffect} from 'react';
import AlarmIcon from "../../../../../icons/alarm/alarm.svg";

interface Props {
    num: number
}

const Alarm = ({num}: Props) => {

    const fillIcon: string = "m-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z";

    useEffect(() => {
        const element = document.querySelector(".iconAlarm" + num);
        const path = element.firstChild as Element;
        const pathValue = path.getAttribute("d");
        path.setAttribute("d", pathValue + fillIcon);


    }, [])

    return (
        <div>
            <AlarmIcon className={"iconAlarm" + num}/>
        </div>
    );
};

export default Alarm;