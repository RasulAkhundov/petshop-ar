import React, { useState } from 'react';
import '../css/Collections.scss';
import $ from 'jquery';
import axios from 'axios';
import BreadCrumb from '../components/BreadCrumb';

const breadCrumbName = {
   name: 'Product'
}
const Collections = ({ user, products }) => {

   const [productData, setProductData] = useState([]);
   const [modal, setModal] = useState(false);
   const [productSelect, setProductSelect] = useState({
      size: 'xl',
      color: 'gray',
      material: 'cotton',
      number: 1,
   });
   const [productOne, setProductOne] = useState('');

   ///ADD TO CART CHANGE
   const addToCartChange = (e) => {
      const { name, value } = e.target;
      setProductSelect((prevState) => {
         return {
            ...prevState,
            [name]: value
         }
      })
   }

   ///MODAL OPEN FUNCTION
   const modalOpen = async (_id) => {

      $('body').css('overflow-y', 'hidden');
      $(".modal_add_to_cart").addClass('modal_active');

      ///GETTING ONE PRODUCT FOR ID
      const productOne = await axios.get(`${process.env.REACT_APP_API_URL}/api/get-product/${_id}`).then(res => res.data.productOne);
      setProductOne(productOne);

   }

   ///CLOSE MODAL FUNCTION
   const closeModal = () => {
      $('body').css('overflow-y', 'visible')
      $('.modal_add_to_cart').removeClass('modal_active');
   }

   ///ADD TO CART FUNCTION
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
                  $('body').css('overflow-y', 'visible')
                  $('.modal_add_to_cart').removeClass('modal_active');
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
         <BreadCrumb breadCrumbName={breadCrumbName} />
         <section className='collection_section'>
            <div className="modal_add_to_cart" onClick={closeModal}>
               <div className="modal_dialoq">
                  <div className="modal_body" onClick={e => e.stopPropagation()}>
                     <i className="fa-solid fa-xmark close_icon" onClick={closeModal}></i>
                     {productOne &&
                        <div className="row">
                           <div className="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center align-items-start modal_content_left">
                              <img src={productOne && require('../uploads/product-images/' + productOne.image[0].imageFilename1)} className="img-fluid" alt="image" />
                           </div>
                           <div className="col-12 col-md-7 modal_content-right">
                              <h3 className="product_title" id='product_title' name="title" value={productData[2]}>{productOne.productName}</h3>
                              <div className="product_price">
                                 <span className='new' id='product_new_price' name="price" value={productData[3]} onChange={addToCartChange}>${productOne.productNewPrice}.00</span>
                                 <span className='old'>${productOne.productOldPrice}.00</span>
                              </div>
                              <p className='product_description'>{productOne.productDescription}</p>
                              <div className="selector_wrapper">
                                 <label htmlFor="size_select">Size:</label>
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
                              <div className="selector_wrapper">
                                 <label htmlFor="color_select">Color:</label>
                                 <select
                                    name="color"
                                    value={productSelect.color}
                                    id="color_select"
                                    onChange={addToCartChange}
                                 >
                                    <option value="gray">gray</option>
                                    <option value="black">black</option>
                                    <option value="brown">brown</option>
                                    <option value="magenta">magenta</option>
                                 </select>
                              </div>
                              <div className="selector_wrapper">
                                 <label htmlFor="material_select">Material:</label>
                                 <select
                                    name="material"
                                    value={productSelect.material}
                                    id="material_select"
                                    onChange={addToCartChange}
                                 >
                                    <option value="cotton">cotton</option>
                                    <option value="wool">wool</option>
                                 </select>
                              </div>
                              <div className="modal_footer_content">
                                 <input
                                    name='number'
                                    value={productSelect.number}
                                    type="number"
                                    min={1}
                                    placeholder="1"
                                    onChange={addToCartChange}
                                 />
                                 <button type='button' onClick={() => addToCart(productOne._id)} id="add-to-cart-btn">ADD TO CART</button>
                                 <i className="fa-regular fa-heart"></i>
                              </div>
                           </div>
                        </div>
                     }
                  </div>
               </div>
            </div>
            <div className="shop-area">
               <div className="container">
                  <div className="row flex-column flex-lg-row-reverse align-items-center align-items-lg-start">
                     <div className="col-12 col-lg-9 mb-4 mb-lg-0">
                        <div className="shop-topbar-wrapper">
                           <div className="product-sorting">
                              <label htmlFor="SortBy">Sort By:</label>
                              <select name="SortBy" id="sortBy">
                                 <option value="featured">FEATURED</option>
                                 <option value="best-selling">BEST SELLING</option>
                                 <option value="title-ascending">Alphabetically, A-Z</option>
                                 <option value="title-descending">Alphabetically, Z-A</option>
                                 <option value="price-ascending">Price, low to high</option>
                                 <option value="price-descending">Price, high to low</option>
                                 <option value="created-descending">Date, new to old</option>
                                 <option value="created-ascending">Date, old to new</option>
                              </select>
                           </div>
                           <div className="grid-list-options">
                              <ul>
                                 <li className='active'><img src={require('../assets/grid.png')} alt="" /></li>
                                 <li><i className="fa-solid fa-align-justify"></i></li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-view">
                           <div className="row">
                              {products && products.map((product, i) => (
                                 <div className="col-12 col-sm-6 col-lg-4 mb-4" key={i} data-aos="fade-up" data-aos-duration="300" data-aos-easing="linear">
                                    <div className="product_wrapper">
                                       <div className="product_image">
                                          <a href={`/products/${product._id}`}><img src={require(`../uploads/product-images/` + `${product.image[0].imageFilename1}`)} alt="" /></a>
                                          <div className="product_action">
                                             <i className="fa-regular fa-heart"></i>
                                             <i className="fa-regular fa-plus" onClick={() => modalOpen(product._id)} style={{ fontSize: '25px', lineHeight: '10px' }}></i>
                                             <i className="fa-solid fa-cart-shopping"></i>
                                          </div>
                                       </div>
                                       <div className="product_content">
                                          <a href={`/products/${product._id}`}><h4>{product.productName}</h4></a>
                                          <div className="product_price">
                                             <span className='new'>${product.productNewPrice}.00</span>
                                             <span className='old'>${product.productOldPrice}.00</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="col-12 col-lg-3">
                        <div className="shop-side-bar">
                           <div className="shop-widget">
                              <h4 className='shop-sidebar-title'>Search Products</h4>
                              <div className="side-bar-search">
                                 <input type="text" id='search-input' />
                                 <i className="fa-solid fa-magnifying-glass"></i>
                              </div>
                           </div>
                           <div className="shop-widget mt-5">
                              <h4 className='shop-sidebar-title'>Categories</h4>
                              <ul>
                                 <li>Bone Development <span>11</span></li>
                                 <li>Canned Food <span>18</span></li>
                                 <li>Digestive Care <span>18</span></li>
                                 <li>Dry Food <span>16</span></li>
                              </ul>
                           </div>
                           <div className="shop-widget mt-5">
                              <h4 className='shop-sidebar-title'>Vendors</h4>
                              <ul>
                                 <li>Aurelia</li>
                                 <li>Creature</li>
                                 <li>Generic</li>
                                 <li>Glus</li>
                                 <li>Imara</li>
                              </ul>
                           </div>
                           <div className="shop-widget mt-5">
                              <h4 className='shop-sidebar-title'>Product Types</h4>
                              <ul>
                                 <li>Canned Food</li>
                                 <li>Dry Food</li>
                                 <li>Food Prouches</li>
                                 <li>Food Toppers</li>
                                 <li>Food Types</li>
                              </ul>
                           </div>
                           <div className="shop-widget mt-5">
                              <h4 className='shop-sidebar-title'>Color</h4>
                              <ul>
                                 <li>Gray</li>
                                 <li>Yellow</li>
                                 <li>Black</li>
                                 <li>Brown</li>
                                 <li>Magenta</li>
                              </ul>
                           </div>
                           <div className="shop-widget mt-5">
                              <h4 className='shop-sidebar-title'>Size</h4>
                              <ul>
                                 <li>Xl</li>
                                 <li>Lg</li>
                                 <li>Md</li>
                                 <li>Sm</li>
                                 <li>Xs</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}

export default Collections