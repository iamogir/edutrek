import React from 'react';
import style from "./subheader.module.css";
import DropMenu from "./dropMenu/DropMenu.tsx";
import {groupArr, statusArr} from "../../../modules/active/presentation/constants.ts";

interface Props {
    children: React.ReactNode
}

const Subheader = ({children}: Props) => {
    return (
        <div>
            <div className={style.subheadBox}>
                <DropMenu name={"Group"} list={groupArr}/>
                <DropMenu name={"Status"} list={statusArr}/>
            </div>
            {children}
        </div>
    );
};

export default Subheader;