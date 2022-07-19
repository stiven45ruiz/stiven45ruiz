import React from "react";
import Typewriter from 'typewriter-effect';
import './hello.css';

function Hello(){

  const down = () =>{
    window.scroll({
      top: window.screen.availHeight < 1000 ?window.screen.availHeight: 900,
      left: 0,
      behavior: 'smooth'
    })
    console.log(window.screen)

  }

  return(
    <section className="hello">
      <div className="hello__container">
        <p>¡Hola! Soy,</p>
        <h1>Stiven Ruiz</h1>
        <div className="info">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Web Developer')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Frontend Developer')
                .pauseFor(1000)
                .deleteAll()
                .start();
              }}
              options={{
                loop:true
              }}
          />
        </div>
        {/* Frontend Junior */}
        <ul >
          <li>
            <a href="https://github.com/stiven45ruiz">
              <img
                src="https://i.ibb.co/RPRStZP/github.png"
                alt="GITHUB"
                target="_blank" rel="noreferrer"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/stiven45ruiz/">
            <img    
                src="https://i.ibb.co/xSmzXWn/in-linked-linkedin-media-social-icon-124259.png"
                alt="linkedin"
                target="_blank" rel="noreferrer"
            ></img>
            </a>
          </li>
        </ul>

        <picture className="arrow__down" onClick={down}>
          <img src="https://cdn-icons-png.flaticon.com/512/8036/8036667.png" alt="Arrow"></img>
        </picture>
      </div>  
    </section>
  )
}

export {Hello}