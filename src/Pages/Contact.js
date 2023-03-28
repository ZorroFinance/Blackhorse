import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Nav from './Nav';

function Contact () {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState ('');
  const [number, setNumber] = useState ('');
  const [subject, setSubject] = useState ('');
  const [message, setMessage] = useState ('');

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
        name: name,
        company: company,
        email: email,
        number: number,
        subject: subject,
        message: message,
    };
    emailjs.send(
      'service_ckzlh2ff',
      'template_uwmp5uo0',
      templateParams,
      'QQIaVyUi87kjZFhBrr'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
  };

  return (
    <>
    <div className='overflow-x-hidden bg-[#f0f0f0] min-h-screen'>
        <Nav/>
        <div className='contact py-32'>
            <div className='mx-auto text-white bg-black max-w-screen-md justify-center text-center py-10'>
                <h1 className='md:text-3xl text-3xl font-semibold'>
                    Contact us
                </h1>
                <p className='md:pt-3'>
                    We are looking into your request to review.
                </p>
            </div>
        </div>
        <div className='text-black py-10 md:px-10 px-5 max-w-screen-md mx-auto bg-white mt-5 shadow-xl'>
            <form onSubmit={handleSubmit}>
                { !success && 
                <div className='mx-auto'>
                    <div className='md:grid md:grid-cols-2 gap-8'>
                        <input
                            className='bg-[#f0f0f0] border py-2 w-full px-4 mx-auto'
                            placeholder='Full Name'
                            type="name"
                            id="name"
                            value={name}
                            required
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            className='bg-[#f0f0f0] border py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Company Name'
                            type="company"
                            id="company"
                            value={company}
                            required
                            onChange={(event) => setCompany(event.target.value)}
                        />
                        <input
                            className='bg-[#f0f0f0] border py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Email Address'
                            type="email"
                            id="email"
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            className='bg-[#f0f0f0] border py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Phone Number'
                            type="number"
                            id="number"
                            value={number}
                            required
                            onChange={(event) => setNumber(event.target.value)}
                        />
                    </div>
                    <input
                        className='bg-[#f0f0f0] border py-2 w-full px-4 mx-auto mt-8'
                        placeholder='Subject'
                        type="subject"
                        id="subject"
                        value={subject}
                        required
                        onChange={(event) => setSubject(event.target.value)}
                    />
                    <textarea
                        className='bg-[#f0f0f0] border pb-52 py-5 w-full px-4 mx-auto mt-8 overflow-y-hidden'
                        placeholder='Message'
                        type="message"
                        id="message"
                        value={message}
                        required
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    <div className='items-center'>
                        <button className='bg-[#CD252B] px-10 tracking-wider py-2 md:mt-10 mt-5 text-white' type="submit">
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                </div>}
                {success && <p className='justify-center mx-auto text-center pt-10 font-semibold text-[#CD252B]'>Email sent successfully!</p>}
            </form>
        </div>
    </div>
    </>
  );  
}

export default Contact;