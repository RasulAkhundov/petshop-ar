import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
       <div className="container">
          <div className="row">
             <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                <div className="footer_info_wrapper">
                  <div className="footer_logo">
                     <img src={require('../assets/footer-logo.png')} alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectet adipisicing elit sed do.</p>
                  <div className="address_info">
                     <div className="single_address_info">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Store address goes here</p>
                     </div>
                     <div className="single_address_info">
                        <i className="fa-solid fa-phone"></i>
                        <p>+000 000 000000</p>
                     </div>
                     <div className="single_address_info">
                        <i className="fa-regular fa-envelope"></i>
                        <p>resul.axundov2002@mail.ru</p>
                     </div>
                  </div>
                </div>
             </div>
             <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                <div className="footer_wrapper">
                     <h4 className='footer_title'>My Account</h4>
                     <ul>
                        <li>My Account</li>
                        <li>Cart Page</li>
                        <li>Personal info</li>
                        <li>Wishlist</li>
                        <li>Terms and Conditions</li>
                        <li>Returns and Refunds</li>
                        <li>Help and Contact Us</li>
                     </ul>
                </div>
             </div>
             <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-sm-0">
               <div className="footer_wrapper">
                  <h4 className='footer_title'>Useful Links</h4>
                  <ul>
                     <li>Cats</li>
                     <li>Dogs</li>
                     <li>Fish</li>
                     <li>Small Animals</li>
                     <li>Reptile</li>
                     <li>Bird</li>
                     <li>Horse</li>
                  </ul>
               </div>
             </div>
             <div className="col-12 col-sm-6 col-lg-3">
               <div className="footer_widget">
                  <h4>Newsletter</h4>
                  <div className="newsletter_wrapper">
                     <p>SIGN UP to newsletter and receive $40 coupon for first shopping.</p>
                     <div className="newsletter_input">
                        <input type="text" id="mc-embedded-subscribe"/>
                        <i className="fa-regular fa-paper-plane"></i>
                     </div>
                  </div>
               </div>
             </div>
          </div>
       </div>
    </footer>
  )
}

export default Footer