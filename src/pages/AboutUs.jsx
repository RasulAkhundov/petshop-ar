import React from 'react';
import '../css/AboutUsArea.scss';
import BreadCrumb from '../components/BreadCrumb';
import AboutUsArea from '../components/AboutUs';
import Service from '../components/Service';
import OurTeam from '../components/OurTeam';
import CountUp from 'react-countup';

const breadCrumbName = {
   name: 'Contact'
}

const AboutUs = () => {
  return (
      <main>
         <BreadCrumb breadCrumbName={breadCrumbName} />
         <AboutUsArea/>
         <div className="project-count-area">
            <div className="container">
               <div className="single-count-wrapper">
                  <div className="single-count">
                     <div className="count-title">
                        <h2 id="count"><CountUp end={18}/></h2>
                        <span>Years in Business</span>
                     </div>
                  </div>
                  <div className="single-count">
                     <div className="count-title">
                        <h2 id="count"><CountUp end={290}/></h2>
                        <span>Happy People</span>
                     </div>
                  </div>
                  <div className="single-count">
                     <div className="count-title">
                        <h2 id="count"><CountUp end={24}/></h2>
                        <span>Billion Sales</span>
                     </div>
                  </div>
                  <div className="single-count">
                     <div className="count-title">
                        <h2 id="count"><CountUp end={17}/></h2>
                        <span>Award Winning</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Service/>
         <OurTeam/>
      </main>
  )
}

export default AboutUs