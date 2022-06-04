import React, { useState, useEffect } from 'react';
import '../css/SingleProducts.scss';
import BreadCrumb from '../components/BreadCrumb';
import Products from '../components/Products';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import axios from 'axios';
import $ from 'jquery'

const SingleProducts = ({ user }) => {
   const [productOne, setProductOne] = useState('');
   const [mainImage, setMainImage] = useState();
   const [productSelect, setProductSelect] = useState({
      size: 'xl',
      color: 'gray',
      material: 'cotton',
      number: 1,
   });

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

   ///INPUT ON CHANGE
   const addToCartChange = (e) => {
      const { name, value } = e.target;
      setProductSelect((prevState) => {
         return {
            ...prevState,
            [name]: value
         }
      })
   }

   ////ADD TO CART FUNCTION
   const addToCart = async (_id) => {
      const productImage = productOne && productOne.image[0].imageFilename1;
      let price = productOne.productNewPrice * Number(productSelect.number);
      const cartModel = {
         image: productImage,
         number: Number(productSelect.number),
         price: price,
         size: productSelect.size,
         color: productSelect.color,
         material: productSelect.material,
         title: productOne.productName,
         productID: _id
      }
      console.log(cartModel)
      if (user._id) {
         await axios.post(`${process.env.REACT_APP_API_URL}/api/add-to-cart/${user._id}`, cartModel)
            .then(res => {
               setTimeout(() => {
                  $("#add-to-cart-btn").text('WAIT');
               }, 250);
               setTimeout(() => {
                  $("#add-to-cart-btn").text('ADDED!');
               }, 750);
               setTimeout(() => {
                  $("#add-to-cart-btn").text('ADD TO CART');
                  window.location.reload(true);
               }, 1250);
               return res.data;
            });
      } else {
         window.location.href = "/account/login"
      }
   }

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
                                 <select
                                    name="size"
                                    value={productSelect.size}
                                    id="size_select"
                                    onChange={addToCartChange}
                                 >
                                    <option value="xl">xl</option>
                                    <option value="lg">lg</option>
                                    <option value="md">md</option>
                                    <option value="sm">sm</option>
                                 </select>
                              </div>
                              <div className="selector-wrapper">
                                 <label htmlFor="size">Color</label>
                                 <select
                                    name="color"
                                    value={productSelect.color}
                                    id="color_select"
                                    onChange={addToCartChange}
                                 >
                                    <option value="gray">Gray</option>
                                    <option value="black">Black</option>
                                    <option value="brown">Brown</option>
                                    <option value="magenta">Magenta</option>
                                 </select>
                              </div>
                              <div className="selector-wrapper">
                                 <label htmlFor="size">Material</label>
                                 <select
                                    name="material"
                                    value={productSelect.material}
                                    id="material_select"
                                    onChange={addToCartChange}
                                 >
                                    <option value="cotton">Cotton</option>
                                    <option value="wool">Wool</option>
                                 </select>
                              </div>
                              <div className="selector-wrapper" style={{ marginTop: '35px' }}>
                                 <label htmlFor="qty">QYT:</label>
                                 <input
                                    type="number"
                                    min={1}
                                    placeholder="1"
                                    name='number'
                                    value={productSelect.number}
                                    onChange={addToCartChange}
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="product-details-footer">
                           <button type='button' id="add-to-cart-btn" onClick={() => addToCart(productOne._id)}>ADD TO CART</button>
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