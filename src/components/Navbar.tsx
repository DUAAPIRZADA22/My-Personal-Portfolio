
'use client';
import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';
import { motion } from 'framer-motion';
import "@fontsource/great-vibes"; // Great Vibes font


const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-6 px-4 md:px-10"
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl text-gradient bg-clip-text text-gradient font-[Great_Vibes] bg-gradient-to-r from-pink-500 to-cyan-500">
          Duaa Pirzada
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-14 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-cyan-500 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <a
          href="mailto:pirzadaduaa87@gmail.com"
          className="hidden md:inline-block bg-cyan-500 text-white py-2 px-5 rounded-full hover:bg-blue-600 transition duration-300 font-semibold"
        >
          Hire Me
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer text-cyan-500" onClick={() => setOpen(!open)}>
          {open ? <RiCloseLine size={30} /> : <RiMenu3Fill size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 mt-4 md:hidden text-lg font-semibold"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setOpen(false)} className="hover:text-cyan-500 transition duration-300">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:pirzadaduaa87@gmail.com"
              className="bg-cyan-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Hire Me
            </a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;



