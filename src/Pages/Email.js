import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
      email: email,
    };
    emailjs.send(
      'service_ckzlh2f',
      'template_uwmp5uo',
      templateParams,
      'QQIaVyUi87kjZFhBr'
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
    <form className='text-black' onSubmit={handleSubmit}>
      { !success && <div>
        <input
          className='border-b border-[#aaaaaa] py-2 w-72 px-4 justify-center text-center mx-auto'
          placeholder='Email Address'
          type="email"
          id="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <div>
          <button className='bg-[#CD252B] px-10 tracking-wider py-2 md:mt-10 mt-5 text-white' type="submit">
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </div>}
      {success && <p>Email sent successfully!</p>}
    </form>
  );  
}

export default EmailForm;

// import React, { useState, useEffect } from 'react';

// function EmailUpdateForm() {
//   const [email, setEmail] = useState('');


//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // TODO: Handle form submission
//   };

//   useEffect(() => {
//     // TODO: Fetch data or perform other side effects
//   }, []);

//   return (
//     <form onSubmit={handleSubmit} className='text-black text-center justify-center mx-auto'>
        // <h1 className='text-lg'>
        //     Sign up to our newsletter
        // </h1>
//       <label className='py-5 text-[#aaa] text-xl'>
//         <input required placeholder='Email' type="email" value={email} onChange={handleEmailChange} className='bg-red-500'/>
//       </label>
      // <div>
      //   <button value={handleSubmit} type="submit">Submit</button>
      // </div>
//     </form>
//   );
// }

// export default EmailUpdateForm;
