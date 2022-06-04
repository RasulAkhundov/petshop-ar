import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const SliderSection = () => {
   return (
      <section className="slider-section">
         <Swiper
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper">
            <SwiperSlide>
               <div className="container">
                  <div className="row justify-content-between">
                     <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex align-items-center" >
                        <div className="slider_content">
                           <h3 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="400">Welcome To</h3>
                           <h2 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="600">All Pet Products</h2>
                           <p data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae animi incidunt magnam temporibus ea placeat.</p>
                           <div className="slider-btn" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                              <a href='/collections/all'><button type='button'>SHOP NOW</button></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 col-md-6 d-flex align-items-center" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
                        <img src={require('../assets/slider-img-1.png')} className="img-fluid" alt="" />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="container">
                  <div className="row">
                     <div className="col-12 col-md-6 d-flex align-items-center" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                        <div className="slider_content">
                           <h3>Welcome To</h3>
                           <h2>All Pet Products</h2>
                           <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae animi incidunt magnam temporibus ea placeat.</span>
                           <div className="slider-btn">
                              <a href='/collections/all'><button type='button'>SHOP NOW</button></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 col-md-6 d-flex align-items-center" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
                        <img src={require('../assets/slider-img-2.png')} className="img-fluid" alt="" />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </section>
   )
}

export default SliderSection