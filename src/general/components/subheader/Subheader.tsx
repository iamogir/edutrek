import React from 'react';
import style from "./subheader.module.css";

interface Props {
    children: React.ReactNode
}

const Subheader = ({children}: Props) => {
    return (
        <div>
            <div className={style.subheadBox}>
                <input/>
                <input/>
            </div>
            {children}
        </div>
    );
};

export default Subheader;