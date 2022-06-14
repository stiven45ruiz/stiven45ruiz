import React from "react";
import './AbautMe.css'

import {Profile} from './Profile'
import {Studies} from './Studies'
import {Skils} from './Skils'



function AbautMe(){
    return(
        <section className="aboutme__container">
            <h2 className="aboutme__container__title">Sobre Mi...</h2>
            <div className="aboutme__container__links">
                <a 
                    href="/" 
                    className="aboutme__container__link activate"
                >Perfil</a>
                <a 
                    href="/"
                    className="aboutme__container__link"    
                >Estudios</a>
                <a 
                    href="/"
                    className="aboutme__container__link"    
                >Skils</a>
            </div>
            <Profile/>
            <Studies/>
            <Skils/>

            <div className="aboutme__container__buttons">
                <button className="aboutme__container__button">Escrieme</button>
                <button className="aboutme__container__button">Descargar CV</button>
            </div>
        </section>
    )
}

export {AbautMe}