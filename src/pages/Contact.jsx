import React from 'react';
import '../css/Contact.scss';
import BreadCrumb from '../components/BreadCrumb';

const breadCrumbName = {
   name: 'Contact'
}

const Contact = () => {
  return (
      <main>
         <BreadCrumb breadCrumbName={breadCrumbName}/>
         <div className="contact-area">
            <div className="container">

               {/* CONNECTIon DETAILS */}
               <div className="contact-details-section">
                  <div className="row">
                     <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="contact-info-wrapper">
                           <div className="info-icon">
                              <i className="fa-solid fa-location-dot"></i>
                           </div>
                           <h4>Our Location</h4>
                           <p>(800) 123 456 789 / (800) 123 456 789</p>
                           <p>info@example.com</p>
                        </div>
                     </div>
                     <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-md-0">
                        <div className="contact-info-wrapper">
                           <div className="info-icon">
                              <i className="fa-solid fa-mobile-screen"></i>
                           </div>
                           <h4>Contact us Anytime</h4>
                           <p>Mobile: 012 345 678</p>
                           <p>Fax: 123 456 789</p>
                        </div>
                     </div>
                     <div className="col-12 col-sm-6 col-lg-4">
                        <div className="contact-info-wrapper">
                           <div className="info-icon">
                              <i className="fa-solid fa-envelope"></i>
                           </div>
                           <h4>Our Location</h4>
                           <p>(800) 123 456 789 / (800) 123 456 789</p>
                           <p>info@example.com</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* GET IN TOUCH */}
               <div className="contact-form">
                  <div className="row">
                     <div className="col-12">
                        <div className="contact-message-wrapper mt-5">
                           <h4>GET IN TOUCH</h4>
                           <div className="contact-message">
                              <div className="row">
                                 <div className="col-12 col-lg-6 mb-4">
                                    <input type="text" placeholder='Full Name' id='full-name' />
                                 </div>
                                 <div className="col-12 col-lg-6 mb-4">
                                    <input type="text" placeholder='Last Name' id='last-name' />
                                 </div>
                                 <div className="col-12 mb-4">
                                    <input type="text" placeholder='Subject' id='subject' />
                                 </div>
                                 <div className="col-12 mb-4">
                                    <textarea name="message" id="message" placeholder='Message'></textarea>
                                 </div>
                                 <div className="contact-message-btn">
                                    <button type='button'>SEND MESSAGE</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* GMAP EMBED */}
               <div className="mapouter mt-5">
                  <div className="gmap_canvas">
                     <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed"></iframe>
                  </div>
               </div>
            </div>
         </div>
      </main>
  )
}

export default Contact