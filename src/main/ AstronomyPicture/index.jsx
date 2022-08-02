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

      </article>
      
    </section>
    }
    </>
    
  )
}

export { AstronomyPicture}
