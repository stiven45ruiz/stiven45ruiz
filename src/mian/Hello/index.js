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
                                src="https://i.ibb.co/R7ZLjDQ/github-original-wordmark-logo-icon-146506.png"
                                alt="GITHUB"
                            ></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/stiven45ruiz/">
                        <img    
                                src="https://i.ibb.co/xSmzXWn/in-linked-linkedin-media-social-icon-124259.png"
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