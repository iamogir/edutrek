import React from 'react';
import style from "./subheader.module.css";
import DropMenu from "./dropMenu/DropMenu.tsx";
import {groupArr, statusArr} from "../../../modules/active/presentation/constants.ts";
import {useLocation} from "react-router-dom";

interface Props {
    children: React.ReactNode
}

const Subheader = ({children}: Props) => {
    const location = useLocation();

    return (
        <div>
            <div className={style.subheadBox}>
                {location.pathname === "/active" ? <></> : <DropMenu name={"Group"} list={groupArr}/>}
                <DropMenu name={"Status"} list={statusArr}/>
            </div>
            {children}
        </div>
    );
};

export default Subheader;