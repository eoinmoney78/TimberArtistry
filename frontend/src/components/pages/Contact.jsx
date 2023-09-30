// import React, { useState } from 'react';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form data here or send to an API endpoint.
//     alert('Thank you for your message! We will get back to you soon.');
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh', padding: '70px' }}>
//       <div style={{ flex: 1 }}>
//         <h2>Contact Us</h2>
//         <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
//         {/* Your form remains unchanged here */}
//       </div>

//       <form onSubmit={handleSubmit} style={{ marginTop: '2px' }}>
//         <div style={{ marginBottom: '15px' }}>
//           <label>
//             Name:
//             <input 
//               type="text" 
//               name="name" 
//               value={formData.name}
//               onChange={handleChange}
//               required 
//               style={{ marginLeft: '10px', padding: '5px' }} 
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label>
//             Email:
//             <input 
//               type="email" 
//               name="email" 
//               value={formData.email}
//               onChange={handleChange}
//               required 
//               style={{ marginLeft: '10px', padding: '5px' }}
//             />
//           </label>
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label>
//             Message:
//             <textarea 
//               name="message" 
//               value={formData.message}
//               onChange={handleChange}
//               required 
//               style={{ marginLeft: '10px', padding: '5px', width: '100%', minHeight: '100px' }} 
//             />
//           </label>
//         </div>
//         <button type="submit" style={{ padding: '10px 20px', background: '#007BFF', color: '#ffffff', border: 'none', borderRadius: '5px' }}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;

import React from 'react'
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b95380b', 'template_ip77w5d', form.current, 'iWCrP9nhR0iqCjX60')
    e.target.reset();
   
  };

  return (
    <section id="contact">
 
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
        <article className="contact-option">
          <MdEmail className="contact-option-icon"/>
          <h4>Email</h4>
          <h5>woodenreverie@yahoo.com</h5>
          <a href="mailto:woodenreverie@yahoo.com" target="_blank">Send A Message</a>
        </article>

        <article className="contact-option">
          <FaFacebookMessenger className="contact-option-icon"/>
          <h4>Messanger</h4>
          <h5> Facebook messanger</h5>
          <a href="https://m.me/eoin.noonan.73" target="_blank">Send A Message</a>
        </article>

        <article className="contact-option">
  <FaInstagram className="contact-option-icon" />
  <h4>Instagram</h4>
  <h5>Your Instagram Handle</h5>
  <a
    href="https://www.instagram.com/eoinmoney78"
    target="_blank"
    rel="noopener noreferrer"
  >
    Visit Profile
  </a>
</article>

        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'/>
          <input type="email" name="email" placeholder="Your Email"  required />
          <textarea name="message" rows="7" placeholder="Your Message" required/>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;  
