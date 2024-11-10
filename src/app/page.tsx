"use client";
import React, { useEffect } from 'react';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Hero from '@/components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: 'bottom-bottom',
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Page;
