import React from 'react';

const AboutUs = () => {
  return (
      <div className="about-us-area">
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
                  <img src={require('../assets/about-us-img.jpg')} className="img-fluid" alt="" />
               </div>
               <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                  <div className="about-us-content">
                     <h2>About PetFood</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitat ullamco laboris nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor.</p>
                     <div className="about-us-list">
                        <ul>
                           <li>There are many variations of passages</li>
                           <li>Contrary to popular belief is not simply</li>
                           <li>But I must explain to you how all this mistaken</li>
                        </ul>
                     </div>
                     <div className="about-us-btn">
                        <a href="/pages/contact"><button type='button'>CONTACT US</button></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default AboutUs