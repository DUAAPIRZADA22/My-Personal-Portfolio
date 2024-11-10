import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className='text-4xl md:text-5xl font-serif text-pink-600 underline'>
              Technologies I work with
            </h2>
            <p className='text-gray-600 pt-4 text-lg leading-relaxed'>
              I am an aspiring front-end web developer with a strong foundation in HTML, CSS, Python, Java, and Next.js. I
              am passionate about creating intuitive, responsive, and visually appealing user interfaces. Continuously learning
              and staying up-to-date with the latest web technologies, I am committed to refining my skills and delivering 
              high-quality solutions. My goal is to craft seamless digital experiences that not only meet but exceed user 
              expectations. My approach is rooted in continuous learning, innovation, and attention to detail, all aimed at
              crafting engaging, high-performance web experiences that stand out. Driven by a love for design and functionality, 
              I am excited to contribute to projects that push the boundaries of modern web development.
            </p>
        </div>

        <div>
            <div className='grid grid-cols-2 text-accent text-1.5xl sm:text-4xl gap-4'>
                <div className='space-y-2'>
                  <h2 className='hover:text-pink-600 transition-colors'>Typescript</h2>
                  <h2 className='hover:text-pink-600 transition-colors'>React.js</h2>
                  <h2 className='hover:text-pink-600 transition-colors'>Next.js</h2>
                </div>

                <div className='space-y-2'>
                  <h2 className='hover:text-pink-600 transition-colors'>Tailwind</h2>
                  <h2 className='hover:text-pink-600 transition-colors'>CSS</h2>
                  <h2 className='hover:text-pink-600 transition-colors'>Node.js</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
