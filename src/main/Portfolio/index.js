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
  },
  {
    id: 4,
    title: 'Pokedex',
    description: 'Pokedex. Consume la api de pokeapi.co Creada con JS vanilla y CSS',
    demo: 'https://stiven45ruiz.github.io/pokedex/',
    imageUrl: 'https://i.ibb.co/QCH4nzR/Captura-de-pantalla-2022-06-29-213031.png',
    github: 'https://github.com/stiven45ruiz/pokedex'
  },
  {
    id: 5,
    title: 'WeatherApp',
    description: 'App del clima. Creada con React y consumiendo api de openweathermap.org',
    demo: 'https://stiven45ruiz.github.io/WeatherApp/',
    imageUrl: 'https://i.ibb.co/QMXKRHq/Captura-de-pantalla-2022-07-12-182252.png',
    github: 'https://github.com/stiven45ruiz/WeatherApp'
  }

]

function Portfolio(){
  console.log(projects)
  return (
    <section className="container">
      <h2 className="portfolio__title">Portfolio</h2>
      <article className="projects__container">
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
      </article>
    </section>
    
  )
}


export {Portfolio}