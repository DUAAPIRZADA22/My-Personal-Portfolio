'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '🔶' },
    { name: 'CSS', icon: '🔷' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🟦' },
    { name: 'Next.js', icon: '⚛️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'Python', icon: '🐍' },
  ];

  const [clicked, setClicked] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClicked(index);
    setTimeout(() => setClicked(null), 700);
  };

  return (
    <div id="skills" className="container mx-auto py-20 px-4">
      <h2 className="text-4xl md:text-5xl text-center text-pink-600 font-extrabold underline mb-16">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            onClick={() => handleClick(index)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={clsx(
              'relative group bg-[#0b1224] border border-cyan-400 rounded-xl p-6 transition-transform duration-300 hover:scale-105 cursor-pointer overflow-hidden',
              clicked === index && 'ring-4 ring-blue-500 ring-offset-2'
            )}
          >
            {/* Blue shiny overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none blur-sm" />

            {/* Content */}
            <div className="flex items-center justify-between z-10 relative">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{skill.icon}</span>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>
              <div className="w-1/2 bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${75 + Math.floor(Math.random() * 20)}%` }}
                  transition={{ duration: 1 }}
                  className="h-2.5 bg-gradient-to-r from-pink-500 via-blue-400 to-cyan-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;







