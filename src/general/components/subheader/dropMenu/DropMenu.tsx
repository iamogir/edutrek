import React from 'react';
import style from "../subheader.module.css";
import ArrowIcon from "../../../../icons/subheader/arrow-down.svg?react";
import {statusArr} from "../../../../modules/active/presentation/constants.ts";

const DropMenu = () => {
    return (
        <div className={style.selectBox}>
            <input type={'hidden'} name={'status'} value={""}/>
            <div className={`${style.statusHead} topMenu`}
                 // onClick={openCloseMenuHandler}
            >
                <ArrowIcon/>
                Status
            </div>
            <ul>
                {statusArr.map(el =>
                    <li key={el.statusId} value={el.statusId}>{el.statusName}</li>
                )}
            </ul>
        </div>
    );
};

export default DropMenu;