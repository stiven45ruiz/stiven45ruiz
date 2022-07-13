import React from 'react'
import PropTypes from 'prop-types'
import './Portfolio.css'

function Cards({
  title,
  description,
  demo,
  imageUrl,
  github,

  }) {
  return (
    <div className='card'>
        <img src={imageUrl} alt='appAngular'/>
        <div className='card__body text-light'>
            <h4 className='card__title'>{title}</h4>
            <p className='card__text'>{description}</p>
            <div className='card__buttons'>
              <a href={demo} className='button button--secondary' target="_blank" rel="noreferrer">Demo</a>
              <a href={github} className='button button--primary' target="_blank" rel="noreferrer">Code</a>
            </div>
        </div>
    </div>
  )
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  demo: PropTypes.string,
  github: PropTypes.string,
}

export {Cards}