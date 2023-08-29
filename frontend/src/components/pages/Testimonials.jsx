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

  return (
    <div style={{ padding: '20px'}}>
      <h2>Testimonials</h2>
      <p>We're grateful for the feedback from our valued customers:</p>

      {testimonialData.map((testimonial, index) => (
        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h3>{testimonial.name}</h3>
          <p>"{testimonial.feedback}"</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
