import React from 'react';
import style from "./subheader.module.css";
import DropMenu from "./dropMenu/DropMenu.tsx";

interface Props {
    children: React.ReactNode
}

const Subheader = ({children}: Props) => {
    return (
        <div>
            <div className={style.subheadBox}>
                <DropMenu name={"Group"}/>
                <DropMenu name={"Status"}/>
            </div>
            {children}
        </div>
    );
};

export default Subheader;