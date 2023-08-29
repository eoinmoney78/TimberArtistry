import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form data here or send to an API endpoint.
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '70vh', padding: '70px' }}>
      <div style={{ flex: 1 }}>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
        {/* Your form remains unchanged here */}
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: '2px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              style={{ marginLeft: '10px', padding: '5px' }} 
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Message:
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
              style={{ marginLeft: '10px', padding: '5px', width: '100%', minHeight: '100px' }} 
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: '#007BFF', color: '#ffffff', border: 'none', borderRadius: '5px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
