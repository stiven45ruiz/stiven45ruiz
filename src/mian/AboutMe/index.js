import React from "react";
import './AbautMe.css'

import {Profile} from './Profile'
import {Studies} from './Studies'
import {Skils} from './Skils'



function AbautMe(){
    console.log(window.location.href);
    return(
        
        <section className="aboutme__container">
            <h2 className="aboutme__container__title">Sobre Mi...</h2>
            <div className="aboutme__container__links">
                <a 
                    href="#profile" 
                    className="aboutme__container__link activate"
                >Perfil
                    </a>
                <a 
                    href="#studies"
                    className="aboutme__container__link"    
                >Estudios</a>
                <a 
                    href="#skils"
                    className="aboutme__container__link"    
                >Skils</a>
            </div>
            <Profile/>
            <Studies/>
            <Skils/>

            <div className="aboutme__container__buttons">
                <button className="aboutme__container__button" ><a href="mailto:stiven45ruiz@gmail.com">Escrieme</a></button>
                <button className="aboutme__container__button">Descargar CV</button>
            </div>
        </section>
    )
}

export {AbautMe}