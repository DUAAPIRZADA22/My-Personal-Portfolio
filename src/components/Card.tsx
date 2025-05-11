import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<Props> = ({ title, description, image }) => {
  return (
    <motion.div
      className="w-full max-w-[400px] rounded-xl bg-[#f9f5f6] shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      {/* Image wrapper with dark overlay shadow */}
      <div className="relative w-full h-56 shadow-sm">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        {/* Overlay for white-ish image contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-xl"></div>
      </div>

      {/* Content Section with soft color */}
      <div className="p-4 bg-[#fdf1f6]">
        <h3 className="text-xl font-bold text-orange-600 underline mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;




