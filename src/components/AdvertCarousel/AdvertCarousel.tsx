import React, { useState, useRef } from 'react'
import './AdvertCarousel.css'

export default function AdvertCarousel({slides}: { slides: string[] }) {
  
  const [index, setIndex] = useState(0);
  // const [timeout, updateTimeout] = useState(setTimeout(() => {getNext()}, 15000))

  const leftArrowRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const rightArrowRef = useRef() as React.MutableRefObject<HTMLInputElement>;


  function showArrows() {
    leftArrowRef.current.classList.add('arrow_visibility_visible');
    rightArrowRef.current.classList.add('arrow_visibility_visible');
  }
  
  function hideArrows() {
    leftArrowRef.current.classList.remove('arrow_visibility_visible');
    rightArrowRef.current.classList.remove('arrow_visibility_visible');
  }

  function getPrevious() {
    setIndex(index - 1 < 0 ? slides.length - 1 : index - 1)
  }

  function getNext() {
    setIndex(index + 1 > slides.length - 1 ? 0 : index + 1)
  }

  // function handleClick() {
  //   setIndex(i);
  // }


  return (
    <section style={{display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
      <div onMouseEnter={showArrows} onMouseLeave={hideArrows} className='slider'>
        <div ref={leftArrowRef} onClick={getPrevious} className="arrow slider__left-arrow"/>
        <div ref={rightArrowRef} onClick={getNext} className="arrow slider__right-arrow"/>
        <div style={{ backgroundImage: `url(${slides[index]})` }} className="slider__slide"/>
        <div className="slider__options-container">
          { slides.map((_, i) => {
              return (
                <div key={i} className="slider__point" >
                  <button onClick={() => setIndex(i)} className="point__button"/>
                </div>
              );
            }) 
          }
        </div>
        
      </div>
    </section>    
  )
}
