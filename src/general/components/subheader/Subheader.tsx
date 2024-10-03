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
                <form>
                    <select id={"status"} name={"status"}>
                        {statusArr.map(el =>
                            <option key={el.statusId} value={el.statusId}>{el.statusName}</option>
                        )}
                    </select>
                </form>
            </div>
            {children}
        </div>
    );
};

export default Subheader;