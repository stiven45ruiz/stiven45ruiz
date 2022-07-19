import React from "react";
import './AbautMe.css'

import { useLocationUrl } from "./useLocationUrl";
import {Profile} from './Profile'
import {Studies} from './Studies'
import {Skils} from './Skils'



function AbautMe(){

    const {
        locationUrl,
        setLocationUrl
      } = useLocationUrl();

    
    // console.log(locationUrl)


    return(
        
        <section className="aboutme__container">
            <h2 className="aboutme__container__title">Sobre Mí...</h2>
            <div className="aboutme__container__links">
                <button 
                    onClick={()=>setLocationUrl('profile')}
                    className={`aboutme__container__link ${locationUrl === 'profile'? 'activate': ''}`}
                >Perfil
                </button>

                <button
                    onClick={()=>setLocationUrl('studies')}
                    className={`aboutme__container__link ${locationUrl === 'studies'? 'activate': ''}`}
    
                >Estudios
                </button>

                <button 
                    onClick={()=>setLocationUrl('skils')}
                    className={`aboutme__container__link ${locationUrl === 'skils'? 'activate': ''}`}    
                >Skils
                </button>
            </div>

            <div className="info__content">
                {
                    locationUrl === ''? <Skils/>: ''
                }
                {
                    locationUrl === 'profile'? <Profile/>: ''
                }
                {
                    locationUrl === 'studies'? <Studies/>: ''
                }
                {
                    locationUrl === 'skils'? <Skils/>: ''
                }
            </div>

            <div className="aboutme__container__buttons">
                <button className="aboutme__container__button" >
                    <a href="mailto:stiven45ruiz@gmail.com">Escríbeme</a></button>
                <button className="aboutme__container__button">
                    <a 
                    href="https://drive.google.com/uc?id=1zVM8mHUghhL04CkF0Hz2AsugcBDa7irx&export=download"
                    >Descargar CV</a>
                </button>
            </div>
        </section>
    )
}

export {AbautMe}