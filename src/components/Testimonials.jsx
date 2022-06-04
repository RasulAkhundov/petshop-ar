import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Testimonials = () => {
  return (
    <section className='testimonials-area'>
       <div className="container">
         <Swiper
         loop={true}
         navigation={true}
         modules={[Navigation]}
         className="mySwiper">
            <SwiperSlide>
               <div className="single_testimonial">
                  <img src={require('../assets/testimonial-1.jpg')} style={{borderRadius: '50%'}} alt="" />
                  <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum</p>
                  <div className="client_info">
                     <h5>Jerrad Muri</h5>
                     <span>Designer- TZX</span>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="single_testimonial">
                  <img src={require('../assets/testimonial-2.jpg')} style={{borderRadius: '50%'}} alt="" />
                  <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum</p>
                  <div className="client_info">
                     <h5>Jerrad Muri</h5>
                     <span>Designer- TZX</span>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="single_testimonial">
                  <img src={require('../assets/testimonial-3.jpg')} style={{borderRadius: '50%'}} alt="" />
                  <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum</p>
                  <div className="client_info">
                     <h5>Jerrad Muri</h5>
                     <span>Designer- TZX</span>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
       </div>
    </section>
  )
}

export default Testimonials