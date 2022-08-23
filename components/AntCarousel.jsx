import { Carousel } from 'antd'
import React from 'react'
import 'antd/dist/antd.css'
import BackG from '../public/static/images/g881.png'
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#A5BDCE',
}

const AntCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  return (
    <>
      <div className="mb-2">
        <span className="p-1 text-6xl text-blue-900 dark:text-blue-200 sm:p-4 ">What we Do</span>
      </div>
      {/* <img className="block w-full" src={BackG} alt="cover" /> */}
      <div>
        <img
          style={{ padding: '24px 200px' }}
          src="https://i.ibb.co/dLzt917/g881.png"
          className=" h-64 w-full bg-[#A5BDCE]"
          alt="company logo"
        />
      </div>
      {/* <div className="bg-[url('https://i.ibb.co/dLzt917/g881.png')]"> */}

      <Carousel afterChange={onChange} autoplay>
        <div>
          <p style={contentStyle}>
            Mashy Live is an online marketplace for any and all types of outdoor ad spaces
          </p>
        </div>
        <div>
          <p style={contentStyle}>
            Simply put, Mashy aims to streamline and optimize the process of outdoor advertising by
            making the process of ad spaces’ offering and renting simpler, faster and transparent
            like never before for businesses, agencies, and ad space owners / subletters
          </p>
        </div>
        <div>
          <p style={contentStyle}>
            That's made possible by providing a highly organized, state-of-the-art platform to host
            heaps of outdoor ad spaces of all kinds added by reputable sellers. Afterwards,
            advertisers and media buyers can delve into a very diverse pool of OOH and rent to their
            hearts’ content
          </p>
        </div>
      </Carousel>
      {/* </div>  */}
    </>
  )
}

export default AntCarousel
