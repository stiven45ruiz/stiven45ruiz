import React from 'react'
import useApiNasa from '../../hooks/useApiNasa'
import './AstronomyPicture.css'

const  AstronomyPicture = () => {

  const PictureOfTheDay = useApiNasa()

  console.log(PictureOfTheDay)

  return (
    <>
    {
      !!PictureOfTheDay && 
      <section className='pictureoftheday'>
      <h3>Astronomy Picture of the Day.</h3>
      <article className='pictureoftheday__container'>
        <h4 className='pictureoftheday__title'>{PictureOfTheDay.title}</h4>
        <img className='pictureoftheday__image' src={PictureOfTheDay.url} alt="" />
        <p className='pictureoftheday__explanation'>
          {PictureOfTheDay.explanation}
        </p>
        <a
          className='pictureoftheday__link'
          href="https://github.com/nasa/apod-api" 
          target="_blank" 
          rel="noreferrer"> Astronomy Picture of the Day</a>
      </article>
      
    </section>
    }
    </>
    
  )
}

export { AstronomyPicture}
