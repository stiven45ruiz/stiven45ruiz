import React from "react";
import './header.css'

function Header(){

    return(
        <header className="header">
            <img className="header__image" src="https://i.ibb.co/Jcpcsmn/peep-human-person-avatar-icon-192317.png" alt=""></img>
            <p className="header__icon">icon</p>
        </header>
    );
}

export {Header}