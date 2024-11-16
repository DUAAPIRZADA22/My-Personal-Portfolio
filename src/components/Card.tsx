import React from 'react'
import Image from 'next/image';
 
interface Props {
    title: string;
    description: string;
    image: string;
    tags: string[];
}

const Card:React.FC<Props> = ({title, description, image, tags}) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]'  data-aos="zoom-in-up">
     <div>
        <Image className='w-[250px] sm:w-[350px] h-auto' 
        src={image}
        alt={title}
        height="250"
        width="250"/>
     </div>

     <div  className='p-4 space-y-4'>
       <div className='text-3xl font-extrabold underline'>
        {title}
       </div>

       <div>
        {description}
       </div>

       <div>
        {tags.map((el) => (
            <div className='tags' key={el}>
            {el}
        </div>))}
       </div>
     </div>
    </div>
  )
}

export default Card;