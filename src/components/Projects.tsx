import React from 'react';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Flower Shop E-commerce Web",
    description: "A NextJs & React based app of e-commerce website, made up on the beautiful flower shop.",
    image: "/flower.png",

  },
  {
    id: 1,
    title: "Dynamic Travel Blog",
    description: "A dynamic blog of each country with its information, made up on NextJS, ReactJs and Tailwind CSs",
    image: "/blog.png",
  },
  {
    id: 2,
    title: "Figma Portfolio",
    description: "A portfolio website designed using Figma, showcasing my design skills and projects. It features a clean and modern layout, with sections for my work, skills, and contact information.",
    image: "/figmap.png",
  },
  {
    id: 3,
    title: "Coffee Shop Website",
    description: "A beautifull website of coffee shop for coffee lovers made with love using NextJs, API, ReactJs and Tailwind CSS.",
    image: "/coffee.png",
  },
  {
    id: 4,
    title: "Figma Hackathon",
    description: "A figma hackathon based on furniture website using sanity CMS, Tailwind CSS, HTML & Nextjs for the first time.",
    image: "/figma.png",
  },
  {
    id: 5,
    title: "Birthday Wish App",
    description: "A Birthday Wish App is a web application that allows users to create and send personalized birthday wish. The app features a user-friendly interface",
    image: "/bday.png",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <h2 className="text-5xl text-pink-600 flex justify-center underline mb-8 font-extrabold">
        My Projects
      </h2>
      <div className="grid gap-6 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            description={el.description}
            image={el.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;



