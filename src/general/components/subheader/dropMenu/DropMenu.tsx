import React, {useState} from 'react';
import ArrowIcon from "../../../../icons/subheader/arrow-down.svg?react";
import {statusArr} from "../../../../modules/active/presentation/constants.ts";
import constStyle from "../../../utils/const.module.css";
import style from "./dropMenu.module.css";
import DropList from "../../../../modules/active/presentation/redux/types.ts";

interface Props {
    name: string,
    list: DropList[]
}

const DropMenu = ({name, list}: Props) => {
    const [isOpenM, setIsOpenM] = useState(false);

    return (
        <div className={style.selectBox}>
            <input type={'hidden'} name={'status'} value={""}/>
            <div className={`${style.statusHead} topMenu`} onClick={() => setIsOpenM(!isOpenM)} >
                <ArrowIcon/>
                {name}
            </div>
            <ul className={`${ isOpenM ? constStyle.open : ""}`}>
                {list.map(el =>
                    <li key={el.id} value={el.id}>{el.name}</li>
                )}
            </ul>
        </div>
    );
};

export default DropMenu;