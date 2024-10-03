import React from 'react';
import style from "./subheader.module.css";
import {statusArr} from "../../../modules/active/presentation/constants.ts";

interface Props {
    children: React.ReactNode
}

const Subheader = ({children}: Props) => {
    return (
        <div>
            <div className={style.subheadBox}>
                <div className={style.selectBox}>
                    <p>Status</p>
                    <ul>
                        {statusArr.map(el =>
                            <li key={el.statusId} value={el.statusId}>{el.statusName}</li>
                        )}
                    </ul>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Subheader;