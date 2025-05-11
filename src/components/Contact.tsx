'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    // Type-cast e.currentTarget to HTMLFormElement
    const form = e.currentTarget as HTMLFormElement;

    // Form values
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const res = await fetch('https://formsubmit.co/ajax/pirzadaduaa87@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });

    if (res.ok) {
      form.reset();
      setStatus('success');
    } else {
      setStatus('error');
    }

    setSending(false);
  };

  return (
    <div id='contact' className='pt-32 container px-4'>
      <div className='grid md:grid-cols-2 gap-12'>
        {/* Left Content */}
        <div className='space-y-8'>
          <h2 className="text-4xl md:text-5xl text-center text-pink-800 font-extrabold underline mb-10">
            Let’s Connect:
          </h2>
          <p className='text-red-400 text-lg'>
            Have a question or a project in mind? I’m just a message away!<br />
            Drop me a line, give me a call, or send me a message via the form below.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name' className='text-red-400 font-semibold'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              required
              placeholder='Your Name'
              className='h-11 bg-slate-400 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-red-400 font-semibold'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              required
              placeholder='Your Email'
              className='h-11 bg-slate-400 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='message' className='text-red-400 font-semibold'>Message</label>
            <textarea
              id='message'
              name='message'
              rows={5}
              required
              placeholder='Your Message'
              className='bg-slate-400 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition'
            ></textarea>
          </div>

          <button
            type='submit'
            disabled={sending}
            className={`bg-pink-500 hover:bg-pink-600 text-white rounded-lg py-2 px-8 transition duration-300 ease-in-out ${sending && 'opacity-60 cursor-not-allowed'}`}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {/* Message after submit */}
          {status === 'success' && (
            <p className='text-green-600 font-semibold pt-2'>Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className='text-red-600 font-semibold pt-2'>Something went wrong. Try again!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;




