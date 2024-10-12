import React, {useState} from 'react';
import ArrowIcon from "../../../../icons/subheader/arrow-down.svg?react";
import {statusArr} from "../../../../modules/active/presentation/constants.ts";
import constStyle from "../../../utils/const.module.css";
import style from "./dropMenu.module.css";

interface Props {
    name: string
}

const DropMenu = ({name}: Props) => {
    const [isOpenM, setIsOpenM] = useState(false);

    return (
        <div className={style.selectBox}>
            <input type={'hidden'} name={'status'} value={""}/>
            <div className={`${style.statusHead} topMenu`} onClick={() => setIsOpenM(!isOpenM)} >
                <ArrowIcon/>
                {name}
            </div>
            <ul className={`${ isOpenM ? constStyle.open : ""}`}>
                {statusArr.map(el =>
                    <li key={el.statusId} value={el.statusId}>{el.statusName}</li>
                )}
            </ul>
        </div>
    );
};

export default DropMenu;