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
                {/*<div className={style.selectBox}>*/}
                {/*    <input type={'hidden'} name={'status'} value={""}/>*/}
                {/*    <div className={`${style.statusHead} topMenu`} onClick={openCloseMenuHandler}>*/}
                {/*        <ArrowIcon/>*/}
                {/*        Status*/}
                {/*    </div>*/}
                {/*    <ul>*/}
                {/*        {statusArr.map(el =>*/}
                {/*            <li key={el.statusId} value={el.statusId}>{el.statusName}</li>*/}
                {/*        )}*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <DropMenu/>
                <DropMenu/>
            </div>
            {children}
        </div>
    );
};

export default Subheader;