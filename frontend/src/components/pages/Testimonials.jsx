

import React from 'react';
import './testimonials.css';
// import AVTR1 from '../../assets/avatar1.jpg';
// import AVTR2 from '../../assets/avatar2.jpg';
// import AVTR3 from '../../assets/avatar3.jpg';
// import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';







const data = [
  
  {
    // avatar: AVTR1,
    name: 'John Sanders',
    review: "Jeremy's wooden creation is a masterpiece of craftsmanship and artistry. Its intricate details and rich wood grains make it a captivating centerpiece. A perfect blend of design and emotion, it stands out as a true testament to his talent. Highly recommended for those seeking unique, high-quality art."
  },
{
  // avatar: AVTR2,
  name: 'Tina Ryan',
  review:  "wooden art piece depicting a lighthouse is a striking work that masterfully combines the rustic charm of wood with the elegance of fine art. The craftsmanship is evident in every detail, from the meticulous carving to the thoughtful use of wood grains to enhance the visual texture. Woods captures the essence of a lighthouse with a remarkable attention to detail, making it not just a representation but a storytelling piece."
},
];

// avatar: AVTR3,
// name: 'Rick Howard',
// review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro necessitatibus fugiat, repellendus aliquam quisquam quos tenetur neque aspernatur eligendi minus enim culpa nobis quasi facilis.'
// },
// {
// avatar: AVTR4,
// name: 'dink Dinklage',
// review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro necessitatibus fugiat, repellendus aliquam quisquam quos tenetur neque aspernatur eligendi minus enim culpa nobis quasi facilis.'
// }
// ];


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client_name">{}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;