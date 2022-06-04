import React, { useState, useEffect } from 'react';
import '../css/SingleProducts.scss';
import BreadCrumb from '../components/BreadCrumb';
import Products from '../components/Products';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import axios from 'axios'

const SingleProducts = () => {
   const [productOne, setProductOne] = useState('');
   const [mainImage, setMainImage] = useState()

   let id = window.location.pathname.slice(10);
   const BreadCrumbName = {
      name: productOne.productName
   }
   useEffect(() => {
      ///GETTING ONE PRODUCT FOR ID
      async function fetchData() {
         const productOne = await axios.get(`${process.env.REACT_APP_API_URL}/api/get-product/${id}`).then(res => res.data.productOne);
         setProductOne(productOne);
         setMainImage(productOne.image[0].imageFilename1)
      }
      fetchData();
   }, [])

   return (
      <main>
         <BreadCrumb breadCrumbName={BreadCrumbName} />
         <div className="shop-area">
            <div className="container">
               <div className="row">
                  <div className="col-12 col-md-6 mb-5 mb-md-0">
                     <div className="product-details-img">
                        <img className='product-main-image mb-3' src={mainImage && require('../uploads/product-images/' + mainImage)} alt="" />
                        <Swiper
                           slidesPerView={4}
                           loop={true}
                           navigation={true}
                           modules={[Navigation]}
                           className="mySwiper">
                           <div className="row">
                              <SwiperSlide onClick={() => setMainImage(productOne.image[0].imageFilename1)}>
                                 <div className="col-3 p-0" style={{ width: '100%' }}>
                                    <img src={productOne && require('../uploads/product-images/' + productOne.image[0].imageFilename1)} alt="" />
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide onClick={() => setMainImage(productOne.image[0].imageFilename2)}>
                                 <div className="col-3 p-0" style={{ width: '100%' }}>
                                    <img src={productOne && productOne.image[0].imageFilename2 && require('../uploads/product-images/' + productOne.image[0].imageFilename2)} alt="" />
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide onClick={() => setMainImage(productOne.image[0].imageFilename3)}>
                                 <div className="col-3 p-0" style={{ width: '100%' }}>
                                    <img src={productOne && productOne.image[0].imageFilename3 && require('../uploads/product-images/' + productOne.image[0].imageFilename3)} alt="" />
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide onClick={() => setMainImage(productOne.image[0].imageFilename4)}>
                                 <div className="col-3 p-0" style={{ width: '100%' }}>
                                    <img src={productOne && productOne.image[0].imageFilename4 && require('../uploads/product-images/' + productOne.image[0].imageFilename4)} alt="" />
                                 </div>
                              </SwiperSlide>
                           </div>
                        </Swiper>
                     </div>
                  </div>
                  <div className="col-12 col-md-6">
                     <div className="product-details-content">
                        <h2 className='content-name'>{productOne.productName}</h2>
                        <div className="product-rating">
                           <span>
                              <span>
                                 <i className="fa-regular fa-star"></i>
                                 <i className="fa-regular fa-star"></i>
                                 <i className="fa-regular fa-star"></i>
                                 <i className="fa-regular fa-star"></i>
                                 <i className="fa-regular fa-star"></i>
                              </span>
                              <span>No reviews</span>
                           </span>
                        </div>
                        <div className="product_price">
                           <span className='new'>${productOne.productNewPrice}.00</span>
                           <span className='old'>${productOne.productOldPrice}.00</span>
                        </div>
                        <div className="in-stock">
                           <span>In Stock</span>
                        </div>
                        <p className='content-description'>{productOne.productDescription}</p>
                        <div className="product-details-style">
                           <div className="quick-view-select">
                              <div className="selector-wrapper">
                                 <label htmlFor="size">Size</label>
                                 <select>
                                    <option value="xl">xl</option>
                                    <option value="lg">lg</option>
                                    <option value="md">md</option>
                                    <option value="sm">sm</option>
                                 </select>
                              </div>
                              <div className="selector-wrapper">
                                 <label htmlFor="size">Color</label>
                                 <select>
                                    <option value="xl">Black</option>
                                    <option value="lg">Magenta</option>
                                    <option value="md">Yellow</option>
                                    <option value="sm">Purple</option>
                                 </select>
                              </div>
                              <div className="selector-wrapper">
                                 <label htmlFor="size">Material</label>
                                 <select>
                                    <option value="xl">Wool</option>
                                    <option value="lg">Cotton</option>
                                 </select>
                              </div>
                              <div className="selector-wrapper" style={{ marginTop: '35px' }}>
                                 <label htmlFor="qty">QYT:</label>
                                 <input type="number" min={1} placeholder="1" />
                              </div>
                           </div>
                        </div>
                        <div className="product-details-footer">
                           <button type='button' id="add-to-cart-btn">ADD TO CART</button>
                           <i className="fa-regular fa-heart"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   )
}

export default SingleProducts