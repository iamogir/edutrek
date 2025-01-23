import React from 'react';
import style from "./active.module.css";
import HumanCard from "../../../../general/components/humanCard/HumanCard.tsx";
import {humansArray, notifications} from "../constants.ts";

const Active = () => {

    return (
       <div className={style.box}>
           {humansArray.map((el) => <HumanCard key={el.id} info={el} notify={notifications.find(n => n.notificationData.recipientId === el.id)}/>)}
           {/*{humansArray.map((el) => <HumanCard key={el.id} info={el} notify={notifications.find(n => n.notificationData.recipientId === el.id)}/>)}*/}
           {/*{humansArray.map((el) => <HumanCard key={el.id} info={el} notify={notifications.find(n => n.notificationData.recipientId === el.id)}/>)}*/}
           {/*{humansArray.map((el) => <HumanCard key={el.id} info={el} notify={notifications.find(n => n.notificationData.recipientId === el.id)}/>)}*/}
       </div>
    );
};

export default Active;