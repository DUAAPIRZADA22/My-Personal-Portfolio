import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id='hero'
      className='min-h-screen bg-no-repeat bg-cover'
      style={{ backgroundSize: '35%', backgroundPosition: 'left 100px top 100px' }}
    >
      <Navbar />
      <div className='container mx-auto grid lg:grid-cols-2 h-[calc(100vh-60px)] items-center px-6 lg:px-12'>
        <div className='text-[35px] sm:text-[50px] lg:text-[60px] xl:text-[80px] font-bold leading-tight'>
          <h1>Hello!</h1>
          <p className='text-[22px] sm:text-[30px] lg:text-[40px]'>Its me</p>
          <p className='text-pink-800 text-[28px] sm:text-[36px] lg:text-[40px]'>Duaa</p>
          <p className='text-pink-800 text-[28px] sm:text-[36px] lg:text-[40px]'>Pirzada</p>
          <p className='text-[28px] sm:text-[36px] lg:text-[40px]'>And I am a </p>
          <p
            data-aos='zoom-in-up'
            className='text-[36px] sm:text-[45px] lg:text-[50px] text-cyan-300'
          >
            Front-End Developer.
          </p>

          {/* Social Links and Download CV Button */}
          <div className='flex flex-wrap gap-4 mt-6 justify-center items-center flex-col'>
            <div className='flex gap-4'>
              <a
                href='https://www.linkedin.com/in/duaa-pirzada-52a1062aa/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://img.icons8.com/ios-filled/50/ff69b4/linkedin.png'
                  alt='LinkedIn'
                  className='w-10 h-10 hover:scale-110 transition-transform duration-300'
                />
              </a>

              <a href='https://github.com/DUAAPIRZADA22' target='_blank' rel='noopener noreferrer'>
                <img
                  src='https://img.icons8.com/ios-filled/50/ff69b4/github.png'
                  alt='GitHub'
                  className='w-10 h-10 hover:scale-110 transition-transform duration-300'
                />
              </a>

              <a href='https://www.instagram.com/duaa_pirzada/' target='_blank' rel='noopener noreferrer'>
                <img
                  src='https://img.icons8.com/ios-filled/50/ff69b4/instagram-new.png'
                  alt='Instagram'
                  className='w-10 h-10 hover:scale-110 transition-transform duration-300'
                />
              </a>

              <a href='https://twitter.com/DuaaPirzada' target='_blank' rel='noopener noreferrer'>
                <img
                  src='https://img.icons8.com/ios-filled/50/ff69b4/twitter.png'
                  alt='Twitter'
                  className='w-10 h-10 hover:scale-110 transition-transform duration-300'
                />
              </a>

              <a href='mailto:pirzadaduaa87@gmail.com' target='_blank' rel='noopener noreferrer'>
                <img
                  src='https://img.icons8.com/ios-filled/50/ff69b4/email.png'
                  alt='Email'
                  className='w-10 h-10 hover:scale-110 transition-transform duration-300'
                />
              </a>
            </div>

            {/* Download CV Button */}
            <a
              href='\Duaa Pirzada CV.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-cyan-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-md text-sm transition-colors duration-300 mt-4'
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image with Subtle Outer Glowing Border */}
        <div className='flex justify-center lg:justify-end mt-10 lg:mt-0'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, rotate: [0, 3, -3, 0], transition: { duration: 0.6 } }}
            className="relative rounded-full p-[3px] bg-gradient-to-tr from-pink-300 via-yellow-200 to-pink-400 shadow-lg"
          >
            <img
              src='/profile.jpeg'
              alt='Profile'
              className='w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full object-cover'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;





