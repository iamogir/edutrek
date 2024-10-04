import React from 'react';
import style from "./subheader.module.css";
import {statusArr} from "../../../modules/active/presentation/constants.ts";
import ArrowIcon from "../../../icons/subheader/arrow-down.svg?react";

interface Props {
    children: React.ReactNode,
    openCloseMenuHandler: (event: React.MouseEvent<HTMLElement>) => void
}

const Subheader = ({children, openCloseMenuHandler}: Props) => {
    return (
        <div>
            <div className={style.subheadBox}>
                <div className={style.selectBox}>
                    <input type={'hidden'} name={'status'} value={""}/>
                    <div className={`${style.statusHead} topMenu`} onClick={openCloseMenuHandler}>
                        <ArrowIcon/>
                        Status
                    </div>
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