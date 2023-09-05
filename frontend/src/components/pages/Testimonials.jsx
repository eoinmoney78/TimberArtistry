import React from 'react';

function Testimonials() {
  const testimonialData = [
    {
      name: "Alice Smith",
      feedback: "Jeremy's work is impeccable! Our new cabinets have completely transformed our kitchen. Highly recommend!",
    },
    {
      name: "Bob Johnson",
      feedback: "The wooden art piece I purchased from Jeremy is a centerpiece in our living room now. Everyone asks where we got it!",
    },
    {
      name: "Caroline Brown",
      feedback: "As a musician, I was thrilled to learn that Jeremy is also passionate about music. The craftsmanship and artistry in his work are evident!",
    },
  ];

  const testimonialStyle = {
    container: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#F8F2E7', // Light brown background
      borderRadius: '5px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a slight shadow
    },
    header: {
      marginBottom: '20px'
    },
    individual: {
      marginBottom: '20px',
      padding: '15px',
      borderRadius: '5px',
      backgroundColor: '#FFF',
      border: '1px solid #ddd',
    },
    name: {
      fontSize: '1.2em',
      marginBottom: '10px',
    },
    feedback: {
      fontStyle: 'italic',
      color: '#555',
    }
  };

  return (
    <div style={testimonialStyle.container}>
      <h2 style={testimonialStyle.header}>Testimonials</h2>
      <p>We're grateful for the feedback from our valued customers:</p>

      {testimonialData.map((testimonial, index) => (
        <div key={index} style={testimonialStyle.individual}>
          <h3 style={testimonialStyle.name}>{testimonial.name}</h3>
          <p style={testimonialStyle.feedback}>"{testimonial.feedback}"</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
