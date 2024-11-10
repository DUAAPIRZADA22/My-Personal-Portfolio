import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='container pt-12'>
        <h1 className='text-4xl md:text-5xl text-center text-pink-800 font-serif font-extrabold underline'>
         About Me
        </h1>
        <p className='text-gray-600 pt-4 max-w-3xl mx-auto text-lg'>
        I am a passionate student at GIAIC, currently diving deep into the exciting realms of Artificial Intelligence,
         Web 3.0, and the Metaverse. With a strong drive to stay ahead of the curve, I am fascinated by the endless 
         possibilities these technologies offer. I am dedicated to mastering how they can transform the digital landscape 
         and enhance user experiences. My journey is fueled by curiosity, creativity, and a commitment to continuous
          learning, as I aspire to be at the forefront of innovation in the tech industry. I am eager to apply my skills
           in projects that push boundaries and shape the future of the web.
        </p>
    </div>
  )
}

export default About