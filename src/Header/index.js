import React from "react";
import './header.css'

function Header(){

    return(
        <header className="header">
            <img className="header__image" src="https://cdn.icon-icons.com/icons2/2406/PNG/512/github_git_icon_145985.png" alt=""></img>
            <p className="header__icon">icon</p>
        </header>
    );
}

export {Header}