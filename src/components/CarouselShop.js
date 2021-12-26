import React from "react";

const CarouselShop = () => {
  return (
    <React.Fragment>
      <div id='carouselExampleDark' className='carousel carousel-dark slide'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div
            className='carousel-item active
          
          '
            data-bs-interval='10000'
          >
            <img
              src='./assets/carousel-1.jpg'
              className='d-block w-100'
              alt='carousel-1'
            />
            <div className='carousel-caption d-none d-block'>
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div
            className='carousel-item 
          
          '
            data-bs-interval='10000'
          >
            <img
              src='./assets/carousel-1.jpg'
              className='d-block w-100'
              alt='carousel-1'
            />
          </div>
          <div
            className='carousel-item 
          
          '
            data-bs-interval='10000'
          >
            <img
              src='./assets/carousel-1.jpg'
              className='d-block w-100'
              alt='carousel-1'
            />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default CarouselShop;
