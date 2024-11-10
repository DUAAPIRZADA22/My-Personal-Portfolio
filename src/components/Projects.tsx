import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "E-commerce Website",
        description: "A NextJs & React based app of e-commerce website, made up on the beautiful coffee shop." ,
        image: "/coffeeshop.jpeg",
        tags: ["Typescript", "CSS" , "Node"]
    },
    {
        id:1,
        title: "Currency Converter",
        description: "A timer that counts down from a specified time, with Start, Pause, and Reset controls by using NextJs & Typescript",
        image: "/currency.jpeg",
        tags: ["HTML" , "Typescript"]
    },
    {
        id:2,
        title: "Weather Widget",
        description: "A compact widget displaying real-time weather updates, including temperature, conditions, and location.",
        image: "/weather.jpeg",
        tags: ["React" , "Javascript" , "Node"]
    },
    {
        id:3,
        title: "ATM Project",
        description: "A simulation of an ATM system enabling users to check balances, withdraw cash, deposit funds, and view transaction history",
        image: "/atm-machine.png",
        tags: ["NextJS" , "Typescript"]
    },
    {
        id: 4,
        title: "Countdown Timer",
        description: "A customizable countdown timer that tracks time, featuring Start, Pause, and Reset options, perfect for events and task management.",
        image: "/countdown.jpeg",
        tags: ["Typescript", "React" , "Node"]
    },
    {
        id: 5,
        title: "Word Counter",
        description: "Counts the number of words, characters, and sentences in a given text, providing real-time word usage statistics.",
        image: "/wordcounter.jpeg",
        tags: ["CSS", "Javascript" ]
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <h2 className='text-4xl font-serif text-pink-800 flex justify-center underline mb-8 font-extrabold'>
        My Projects
      </h2>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card  
            key={el.id}
            title={el.title}
            description={el.description}
            image={el.image}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

