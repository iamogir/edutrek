import React, {useEffect, useRef, useState} from 'react';
import ArrowIcon from "../../../../icons/subheader/arrow-down.svg?react";
import constStyle from "../../../utils/const.module.css";
import style from "./dropMenu.module.css";
import DropList from "../../../../modules/active/presentation/redux/types.ts";

interface Props {
    name: string,
    list: DropList[]
}

const DropMenu = ({name, list}: Props) => {
    const ref = useRef(null);

    const toggleMenuFunction = () => {
        const refCurrent = ref.current as Element;
        refCurrent.classList.toggle(constStyle.open);
    };

    const closeMenuFunction = event => {
        const refCurrent = ref.current as Element;
        const refParent = refCurrent.parentElement as Element;
        const eventTarget = event.target as Element;

        if (refCurrent && !refParent.contains(eventTarget)) {
            console.log("Listener")
            refCurrent.classList.remove(constStyle.open);
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeMenuFunction);
        return () => document.removeEventListener('click', closeMenuFunction);
    }, []);

    return (
        <div className={style.selectBox} >
            <input type={'hidden'} name={'status'} value={""}/>
            <div className={style.statusHead} onClick={toggleMenuFunction} >
                <ArrowIcon/>
                {name}
            </div>
            <ul ref={ref}>
                {list.map(el =>
                    <li key={el.id} value={el.id}>{el.name}</li>
                )}
            </ul>
        </div>
    );
};

export default DropMenu;