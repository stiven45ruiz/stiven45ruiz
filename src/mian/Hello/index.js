import React from "react";
import './hello.css'

function Hello(){

    return(
        <section className="hello">
            <div className="hello__container">
                <p>¡Hola! Soy,</p>
                <h1>Stiven Ruiz</h1>
                <p>Web Developer ||</p>
                {/* Frontend Junior */}
                <ul >
                    <li>
                        <a href="https://github.com/stiven45ruiz">
                            <img
                                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/github_original_wordmark_logo_icon_146506.png"
                                alt="GITHUB"
                            ></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/stiven45ruiz/">
                        <img    
                                src="https://cdn.icon-icons.com/icons2/2037/PNG/512/in_linked_linkedin_media_social_icon_124259.png"
                                alt="linkedin"
                            ></img>
                        </a>
                    </li>
                </ul>
            </div>  
        </section>
    )
}

export {Hello}