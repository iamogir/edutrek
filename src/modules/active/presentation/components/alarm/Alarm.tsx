// import React, {useEffect} from 'react';
import AlarmOn from "../../../../../icons/alarm/alarmOn.svg";
import AlarmOff from "../../../../../icons/alarm/alarmOff.svg";
import {Notice} from "../../../../../general/components/types.ts";

interface Props {
    serial: number,
    notify: Notice | undefined
}

const Alarm = ({serial, notify}: Props) => {

    return ( notify ?
        <div>
            <p>{notify.notificationData.scheduledTime}</p>
            <AlarmOn className={"iconAlarm" + serial}/>
        </div> :
            <AlarmOff className={"iconAlarm" + serial}/>
    );
};

export default Alarm;