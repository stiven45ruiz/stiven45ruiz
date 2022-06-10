import React from "react";
import './header.css'

function Header(){

    return(
        <header className="header">
            <img className="header__image" src="https://cdn.icon-icons.com/icons2/3135/PNG/512/peep_human_person_avatar_icon_192317.png" alt=""></img>
            <p className="header__icon">icon</p>
        </header>
    );
}

export {Header}