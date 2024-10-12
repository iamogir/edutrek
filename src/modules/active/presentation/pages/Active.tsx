import React from 'react';
import style from "./active.module.css";
import EntityHuman from "../components/entityHuman/EntityHuman.tsx";

const Active = () => {

    let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
       <div className={style.box}>
           {array.map((el) => <EntityHuman key={el} serial={el}/>)}
       </div>
    );
};

export default Active;