import React from 'react'

const FoodCategory = () => {
  return (
    <section className='food_category'>
       <div className="container">
         <div className="row">
            <div className="col-12 col-md-6 col-lg-4" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
               <div className="single_food_category">
                  <img src={require('../assets/food-category-img-1.jpg')} alt="" />
                  <div className="food_category_text">
                     <h3>Dogs Food</h3>
                  </div>
                  <div className="food_category_description">
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor inci ut labore et dolore</p>
                  </div>
               </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
               <div className="single_food_category">
                  <img src={require('../assets/food-category-img-2.jpg')} alt="" />
                  <div className="food_category_text">
                     <h3>Cats Food</h3>
                  </div>
                  <div className="food_category_description">
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor inci ut labore et dolore</p>
                  </div>
               </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
               <div className="single_food_category">
                  <img src={require('../assets/food-category-img-3.jpg')} alt="" />
                  <div className="food_category_text">
                     <h3>Fishs Food</h3>
                  </div>
                  <div className="food_category_description">
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor inci ut labore et dolore</p>
                  </div>
               </div>
            </div>
         </div>
       </div>
    </section>
  )
}

export default FoodCategory