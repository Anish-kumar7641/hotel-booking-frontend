import React, { useState, useEffect } from 'react'
import './slider.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { sliderData } from './slider-data'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLenght = sliderData.length

  const autoScroll = true
  let slideInterval
  const intervalTime = 5000

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLenght - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1)
  }

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide])

  return (
    <div className="slider">
      <div className="cnt">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? 'slide current' : 'slide'}
              key={index}
            >
              {index === currentSlide && (
                <>
                  <img
                    src={slide.image}
                    alt="Img not found"
                    className="image"
                  />
                  <div className="content-main">
                    <div className="content">
                      <p className="content1">{slide.available_time}</p>
                      <h2 className="content2">{slide.heading}</h2>
                      <p className="content3">{slide.more_option}</p>
                      <button className="--btn">Explore More</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )
        })}
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      </div>
    </div>
  )
}

export default Slider
