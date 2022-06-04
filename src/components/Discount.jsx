import React from 'react'

const Discount = () => {
  return (
    <section className='discount-area'>
       <div className="discount_bg_layer">
          <div className="container">
             <div className="row">
                  <div className="col-12 col-md-6 d-flex justify-content-center" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear">
                     <img src={require('../assets/discount-banner.png')} className="img-fluid" alt="" />
                  </div>
                  <div className="col-12 col-md-6">
                     <div className="discount_content">
                        <h2>Save up to 40%</h2>
                        <h4>$120 - $200</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor inci ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className="discount_btn">
                           <a href="/collections/all"><button type='button'>SHOP NOW</button></a>
                        </div>
                     </div>
                  </div>
             </div>
          </div>
       </div>
    </section>
  )
}

export default Discount