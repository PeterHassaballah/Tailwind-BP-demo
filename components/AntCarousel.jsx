import { Carousel } from 'antd'
import React from 'react'
import 'antd/dist/antd.css'
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#2F2E41',
}

const AntCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  return (
    <>
      <h1> What we Do</h1>

      <Carousel afterChange={onChange} autoplay>
        <div>
          <p style={contentStyle}>
            Mashy Live is an online marketplace for any and all types of outdoor ad spaces.
          </p>
        </div>
        <div>
          <p style={contentStyle}>
            Simply put, Mashy aims to streamline and optimize the process of outdoor advertising by
            making it simpler for businesses, agencies, and ad space owners / subletters.
          </p>
        </div>
        <div>
          <p style={contentStyle}>
            In the not-so-far-future, Mashy Live will also be used to run ads on the ever-increasing
            number of static and also moving digital screens, in the streets of Egypt.
          </p>
        </div>
      </Carousel>
    </>
  )
}

export default AntCarousel
