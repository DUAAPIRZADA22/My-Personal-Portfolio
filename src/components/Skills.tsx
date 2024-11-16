import React from 'react';

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

  return (
    <div id="skills" className="container mx-auto py-20">
      <h2 className="text-4xl md:text-5xl text-center text-pink-600 font-serif font-extrabold underline mb-16">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        <div className="space-y-8">
          {skills.slice(0, 4).map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#011233] border border-pink-400 rounded-lg p-6 hover:scale-105 transition-transform"
            >
              
              <div className="flex items-center  space-x-4">
                <span className="text-5xl">{skill.icon}</span>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>
           
              <div className="w-1/2 bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-teal-400 border border-pink-400 h-2.5 rounded-full"
                  style={{ width: `${75 + Math.floor(Math.random() * 20)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

     
        <div className="space-y-8">
          {skills.slice(4).map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#011233] border border-cyan-400 rounded-lg p-6 hover:scale-105 transition-transform"
            >
              
              <div className="flex items-center space-x-4">
                <span className="text-5xl">{skill.icon}</span>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>
             
              <div className="w-1/2 bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-teal-400 h-2.5 rounded-full"
                  style={{ width: `${75 + Math.floor(Math.random() * 20)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
         
  );
};

export default Skills;




