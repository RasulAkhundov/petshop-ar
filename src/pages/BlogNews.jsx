import React from 'react';
import '../css/BlogNews.scss';
import $ from 'jquery';
import axios from 'axios';
import BreadCrumb from '../components/BreadCrumb';

const breadCrumbName = {
   name: 'News'
}

const BlogNews = () => {
  return (
    <main>
       <BreadCrumb breadCrumbName={breadCrumbName}/>
       <div className="blog_section">
          <div className="blog-area">
             <div className="container">
                <div className="row flex-column flex-lg-row-reverse align-items-center align-items-lg-start">
                  <div className="col-12 col-lg-9 mb-4 mb-lg-0">
                     <div className="row">
                        <div className="col-12">
                           <div className="blog_wrapper">
                              <div className="blog_img">
                                 <a href="/blogs/news/:id"><img src={require('../assets/news-blog-img-1.jpg')} alt="" /></a>
                              </div>
                              <div className="blog_content">
                                 <a href="/blogs/news/:id"><h4>5 Things You Didn’t Know</h4></a>
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
                        <div className="col-12 mt-4">
                           <div className="blog_wrapper">
                              <div className="blog_img">
                                 <a href="/blogs/news/:id"><img src={require('../assets/news-blog-img-2.jpg')} alt="" /></a>
                              </div>
                              <div className="blog_content">
                                 <a href="/blogs/news/:id"><h4>Alix Debuts a Swim Line for 2018</h4></a>
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
                  <div className="col-12 col-lg-3">
                     <div className="shop-side-bar">
                        <div className="shop-widget">
                           <h4 className='shop-sidebar-title'>Search Posts</h4>
                           <div className="side-bar-search">
                              <input type="text" id='search-input'/>
                              <i className="fa-solid fa-magnifying-glass"></i>
                           </div>
                        </div>
                        <div className="recent-post-widget">
                           <h4>Recent Post</h4>
                           <div className="single-recent-post mt-3">
                              <img src={require('../assets/news-blog-img-1.jpg')} alt="" />
                              <div className="recent-post-content">
                                 <h4>5 Things You Didn’t Know</h4>
                                 <span className='recent-post-date'>Jun 03, 2018</span>
                              </div>
                           </div>
                           <div className="single-recent-post mt-3">
                              <img src={require('../assets/news-blog-img-2.jpg')} alt="" />
                              <div className="recent-post-content">
                                 <h4>5 Things You Didn’t Know</h4>
                                 <span className='recent-post-date'>Jun 03, 2018</span>
                              </div>
                           </div>
                        </div>
                        <div className="shop-widget mt-5">
                           <h4 className='shop-sidebar-title'>Tags</h4>
                           <ul>
                              <li>Bath</li>
                              <li>Cat</li>
                              <li>Clean</li>
                              <li>Dog</li>
                              <li>Dry</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>
       </div>
    </main>
  )
}

export default BlogNews