import React from 'react'

const NewsBlog = () => {
  return (
      <section className='news-blog-area'>
         <div className="container">
            <div className="section-title">
               <h2>News Blog</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
            <div className="row">
               <div className="col-12 col-xl-6">
                  <div className="blog_wrapper">
                     <div className="blog_img">
                        <a href="/blogs/news"><img src={require('../assets/news-blog-img-1.jpg')} alt="" /></a>
                     </div>
                     <div className="blog_content">
                        <a href="/blogs/news"><h4>5 Things You Didn’t Know</h4></a>
                        <div className="blog_meta">
                           <ul>
                              <li>PetFood-1 Admin - 03.06.2018</li>
                              <li>2 comments</li>
                           </ul>
                        </div>
                        <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy.</p>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-xl-6 mt-5 mt-xl-0">
                  <div className="blog_wrapper">
                     <div className="blog_img">
                        <a href="/blogs/news"><img src={require('../assets/news-blog-img-2.jpg')} alt="" /></a>
                     </div>
                     <div className="blog_content">
                        <a href="/blogs/news"><h4>Alix Debuts a Swim Line for 2018</h4></a>
                        <div className="blog_meta">
                           <ul>
                              <li>PetFood-1 Admin - 03.06.2018</li>
                              <li>3 comments</li>
                           </ul>
                        </div>
                        <p>Lorem ipsu dolor sit amet cons adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  )
}

export default NewsBlog