"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="container px-6 sm:px-8 md:px-16 mt-10 flex flex-col items-center justify-center"
    >
      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Profile Picture */}
        <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
          <Image
            src="/profile.jpeg"
            alt="About Me"
            width={250}
            height={250}
            className="rounded-full border-4 border-pink-400 shadow-lg shadow-pink-300"
          />
        </div>

        {/* About Me Paragraph */}
        <div
          className="p-6 sm:p-10 rounded-2xl max-w-4xl w-full text-center lg:text-left"
          style={{
            border: "3px solid",
            borderImage: "linear-gradient(135deg, #ff69b4, #ffb6c1, #ffa07a) 1",
            backgroundColor: "#fff0f8",
          }}
        >
          <h1
            className="text-4xl sm:text-5xl text-center lg:text-left text-pink-700 font-extrabold underline mb-6"
            style={{ fontFamily: "Bree Serif, serif" }}
          >
            About Me
          </h1>
          <p className="text-gray-800 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto lg:mx-0">
            I am a passionate Front-End Developer & UI/UX Designer, creating visually stunning and user-friendly web experiences. 
            Currently diving deep into AI & Web 3.0 at GIAIC, shaping the future of tech through innovation and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;













