import React, {useState} from 'react';
import style from "./createButton.module.css"
import CreateIcon from "../../../../icons/header/create.svg"

const CreateButton = () => {

    const [isHover, setIsHover] = useState(false);

    return (
        <div className={style.block} onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
            <span className={style.createIcon}><CreateIcon fill={isHover ? "#f8f8f88e" : "#f8f8f8"} path={"18px"}/></span>
            <span className={style.text}>Create</span>
        </div>
    );
};

export default CreateButton;