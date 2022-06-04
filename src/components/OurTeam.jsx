import React from 'react'

const OurTeam = () => {
  return (
      <div className="team-area">
         <div className="container">
            <div className="section-title">
               <h2>Our Team</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
            <div className="row">
               <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="team-wrapper">
                     <div className="team-img">
                        <img src={require('../assets/team-img-1.jpg')} className="img-fluid" alt="" />
                     </div>
                     <div className="team-content">
                        <h4>Mr. Mike Banding</h4>
                        <span>Manager</span>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="team-wrapper">
                     <div className="team-img">
                        <img src={require('../assets/team-img-2.jpg')} className="img-fluid" alt="" />
                     </div>
                     <div className="team-content">
                        <h4>Mr. Mike Banding</h4>
                        <span>Manager</span>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-6 col-lg-3 mb-4 mb-md-0">
                  <div className="team-wrapper">
                     <div className="team-img">
                        <img src={require('../assets/team-img-3.jpg')} className="img-fluid" alt="" />
                     </div>
                     <div className="team-content">
                        <h4>Mr. Mike Banding</h4>
                        <span>Manager</span>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-md-6 col-lg-3">
                  <div className="team-wrapper">
                     <div className="team-img">
                        <img src={require('../assets/team-img-4.jpg')} className="img-fluid" alt="" />
                     </div>
                     <div className="team-content">
                        <h4>Mr. Mike Banding</h4>
                        <span>Manager</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default OurTeam