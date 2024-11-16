import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className="text-4xl md:text-5xl text-center text-pink-800 font-serif font-extrabold underline mb-16">Lets Connect:</h2>
          <p className='text-gray-600 text-[18px] pt-2'>
          Have a question or a project in mind? I am just a message away!<br/>
            Drop me a line, give me a call, or send me a message via the form below.
          </p>

          <div className='flex gap-3 items-center'>
            <HiOutlineMail size={25} className='text-pink-500' />
            <span>pirzadaduaa87@gmail.com</span>
          </div>

          <div className='flex gap-3 items-center'>
            <BsFillTelephoneInboundFill size={25} className='text-pink-500' />
            <span>(021) 000-0000</span>
          </div>
        </div>

        <div className='space-y-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='text-gray-700 font-medium'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Your Name'
              className='h-[40px] bg-transparent border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-pink-500'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-gray-700 font-medium'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Your Email'
              className='h-[40px] bg-transparent border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-pink-500'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='msg' className='text-gray-700 font-medium'>Message</label>
            <textarea
              id='msg'
              rows={6}
              placeholder='Your Message'
              className='bg-transparent border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-pink-500'
            ></textarea>
          </div>

          <button className='bg-pink-500 hover:bg-pink-600 text-white rounded-lg py-2 px-8 transition duration-300 ease-in-out'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
