import React from 'react';
import style from "./search.module.css"
import SearchIcon from "../../../../icons/sidebar/search.svg?react"

const Search = () => {
    return (
        <div className={style.box}>
            <label>
                <span className={style.icon}><SearchIcon/></span>
                <input type={"text"} name={"search"} placeholder={"Search"}/>
            </label>
        </div>

    );
};

export default Search;