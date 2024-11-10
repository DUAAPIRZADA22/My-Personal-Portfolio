import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='mt-16 py-8 bg-pink-200 text-black font-semibold'>
      <div className='container mx-auto text-center'>
        <p className='flex justify-center items-center gap-2 text-lg font-semibold'>
          Made with <FaHeart className='text-red-400' /> by Duaa
        </p>
        <p className='text-sm mt-2'>© 2024 Duaa Pirzada | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
