import React from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-small font-serif'>
          Duaa Pirzada
        </div>

        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menuLink font-semibold'>
            <a href='#hero'>Home</a>
          </li>
          <li className='menuLink font-semibold'>
            <a href='#about'>About</a>
          </li>
          <li className='menuLink font-semibold'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='menuLink font-semibold'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='menuLink font-semibold'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <a href="mailto:pirzadaduaa87@gmail.com" className="bg-cyan-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 font-semibold">
            Hire Me
          </a>
        </div>

        <RiMenu3Fill className='md:hidden' size={30} />
      </div>
    </div>
  );
};

export default Navbar;


