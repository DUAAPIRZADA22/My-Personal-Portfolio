import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id='hero'
      className='min-h-screen bg-no-repeat bg-cover'
      style={{ backgroundSize: '35%', backgroundPosition: 'left 100px top 100px' }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)] items-center'>
        <div className='text-[60px] sm:text-[80px] font-bold leading-tight'>
          <h1>Hello!</h1>
          <p className='text-[40px]'>Its me</p>
          <p className='text-pink-800 text-[40px]'>Duaa</p>
          <p className='text-pink-800 text-[40px]'> Pirzada</p>
          <p className='text-[40px]'>And I am a </p> 
          <p data-aos="zoom-in-up" className='text-[50px] text-cyan-300'>Front-End Developer.</p>

          {/* Social Media Links and CV Download Button */}
          <div className='flex gap-6 mt-6 justify-center'>
            {/* LinkedIn */}
            <a href='https://www.linkedin.com/in/duaa-pirzada-52a1062aa/' target='_blank' rel='noopener noreferrer'>
              <img src='https://img.icons8.com/ios-filled/50/ff69b4/linkedin.png' alt='LinkedIn' className='w-10 h-10' />
            </a>
            
            {/* GitHub */}
            <a href='https://github.com/DUAAPIRZADA22' target='_blank' rel='noopener noreferrer'>
              <img src='https://img.icons8.com/ios-filled/50/ff69b4/github.png' alt='GitHub' className='w-10 h-10' />
            </a>

          </div>
        </div>

        <div className='flex justify-end'>
          <img
            src='/profile.jpeg'
            alt='Profile'
            className='w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] rounded-full object-cover'
            style={{
              borderColor: 'transparent',
              borderImage: 'linear-gradient(45deg, #f7e1a0, #ffd700, #f7a4a0) 1',
              borderImageSlice: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;




