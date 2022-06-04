import React from 'react';

const breadCrumb = ({breadCrumbName}) => {
   return (
      <section className='bread_crumb'>
         <div className="container">
            <h2>{breadCrumbName.name}</h2>
            <div className="location_path">
               <a href="/" style={{ textDecoration: 'none'}} ><span className='first'>Home</span></a>
               <span className='active'>{breadCrumbName.name}</span>
            </div>
         </div>
      </section>
   )
}

export default breadCrumb