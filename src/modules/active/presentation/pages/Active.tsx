import React from 'react';
import style from "./active.module.css";
import EntityHuman from "../components/entityHuman/EntityHuman.tsx";

const Active = () => {
    return (
       <div className={style.box}>
           <EntityHuman/>
           <EntityHuman/>
           <EntityHuman/>
           <EntityHuman/>
           <EntityHuman/>
           <EntityHuman/>
           <EntityHuman/>
           <EntityHuman/>
           <EntityHuman/>
           <EntityHuman/>
           <EntityHuman/>
           <EntityHuman/>
       </div>
    );
};

export default Active;