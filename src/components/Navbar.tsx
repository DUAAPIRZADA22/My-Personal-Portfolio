import React from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='container pt-8 '>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-small font-serif'>
          Duaa Pirzada
        </div>

        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menuLink font-semibold'><a href='#hero'>Home</a></li>
            <li className='menuLink font-semibold'><a href='#about'>About</a></li>
            <li className='menuLink font-semibold'><a href='#projects'>Projects</a></li>
            <li className='menuLink font-semibold'><a href='#skills'>Skills</a></li>
            <li className='menuLink font-semibold'><a href='#contact'>Contact</a></li>
        </ul>

        <RiMenu3Fill className='md:hidden' size={30} />

      </div>
    </div>
  )
}

export default Navbar