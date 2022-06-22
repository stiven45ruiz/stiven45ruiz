import React from "react";
import './Portfolio.css'

import {Cards} from './Cards'

const projects = [
  {
    id: 1,
    title: 'Movies',
    description: 'Es una SPA(Single Page Application) de películas, que consume la API de TheMovieDB. Desarrollado en JavaScript HTML Y CSS',
    demo: 'https://stiven45ruiz.github.io/clone-netfix/',
    imageUrl: 'https://i.ibb.co/9rff9Ch/Dise-o-sin-t-tulo.jpg',
    github: 'https://github.com/stiven45ruiz/clone-netfix'
  },
  {
    id: 2,
    title: 'Cars Store',
    description: 'Marketplace ficticia de compra de autos creada en Angular, con conexión a Backend, base de datos y autenticación con JWT',
    demo: '#!',
    imageUrl: 'https://i.ibb.co/TPv45cp/angular-App.png',
    github: 'https://github.com/stiven45ruiz/store_cars-angular'
  },
  {
    id: 3,
    title: 'ToDos',
    description: 'App de ToDos desarrollada en React.',
    demo: 'https://stiven45ruiz.github.io/ToDo-React/',
    imageUrl: 'https://i.ibb.co/wSdrc3H/captura-de-pantalla-2022-06-08-202518-cd0a225f-6ced-4108-8bd8-576d29423437.png',
    github: 'https://github.com/stiven45ruiz/ToDo-React'
  }

]

function Portfolio(){
  console.log(projects)
  return (
    <React.Fragment>
      <h2 className="portfolio__title">Portfolio</h2>
      <section className="container">
          {
            projects.map(card => (
                <Cards
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  demo={card.demo}
                  imageUrl={card.imageUrl}
                  github={card.github}
                />
            ))
          }
      </section>
    </React.Fragment>
    
  )
}


export {Portfolio}