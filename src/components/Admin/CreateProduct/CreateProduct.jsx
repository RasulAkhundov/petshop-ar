import React, { useState } from 'react';
import './CreateProduct.scss';
import $ from 'jquery';
import axios from 'axios';

const CreateProduct = () => {

   const [productImage, setProductImage] = useState(null);
   const [productDetails, setProductDetails] = useState({
      product_name: '',
      product_new_price: '',
      product_old_price: '',
      product_description: ''
   })

   ////CREATE PRODUCT HANDLE CHANGE
   const handleChange = (event) => {
      const { name, value } = event.target;
      setProductDetails((prevState) => {
         return {
            ...prevState,
            [name]: value
         }
      })
   }

   ///CREATE PRODUCT FUNCTION
   const createProduct = async (e) => {
      e.preventDefault();

      if(productImage == null ||
         productDetails.product_name === '' ||
         productDetails.product_new_price === '' ||
         productDetails.product_old_price === '' ||
         productDetails.product_description === '') {
         $('#error-modal').text('Please fill in all the inputs');
         $('#error-modal').css('display', 'flex');
         setTimeout(() => {
            $('#error-modal').css('display', 'none');
         }, 2000)
      } else {
         const formData = new FormData();
         Object.values(productImage).forEach(file => {
            formData.append('image', file);
         })
         formData.append('productName', productDetails.product_name);
         formData.append('productNewPrice', productDetails.product_new_price);
         formData.append('productOldPrice', productDetails.product_old_price);
         formData.append('productDescription', productDetails.product_description);
   
         await axios.post(`${process.env.REACT_APP_API_URL}/api/create-product`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
         })
         .then(res => {
            $('#error-modal').css('display', 'none');
            $('#sucsess-modal').css('display', 'flex');
            $('#sucsess-modal').text('Sucsess!');
            window.location.reload();
            return res.data;
         })
         .catch(err => {
            if (err) {
               console.log('error from create product front end ' + err)
            }
         })
      }
   }

   return (
      <div className="create-product-area">
         <h3>Create Product: </h3>
         <div className="row">
            <div className="col-12 col-lg-6 mb-3">
               <div className="widget">
                  <label htmlFor="image">Image Upload (PNG, JPEG, JPG) Max 5 Image: </label>
                  <span id='image-upload-error' style={{
                     display: 'none',
                     color: '#A72237',
                     fontSize: '14px',
                     fontFamily: 'Nunito, sans-serif'
                  }}>Input can't be empty</span>
                  <input
                     name='image'
                     type="file"
                     id="image"
                     multiple='multiple'
                     accept='image/*'
                     onChange={(e) => setProductImage(e.target.files)}
                     required
                     placeholder='Product image'
                  />
               </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
               <div className="widget">
                  <label htmlFor="product-name">Product Name: </label>
                  <span id='product-name-error' style={{
                     display: 'none',
                     color: '#A72237',
                     fontSize: '14px',
                     fontFamily: 'Nunito, sans-serif'
                  }}>Input can't be empty</span>
                  <input
                     value={productDetails.productName}
                     type="text"
                     name='product_name'
                     id='product-name'
                     placeholder='Product Name'
                     onChange={handleChange}
                     required
                  />
               </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
               <div className="widget">
                  <label htmlFor="new-price">Product New Price: </label>
                  <span id='new-price-error' style={{
                     display: 'none',
                     color: '#A72237',
                     fontSize: '14px',
                     fontFamily: 'Nunito, sans-serif'
                  }}>Input can't be empty</span>
                  <input
                     value={productDetails.productNewPrice}
                     type="number"
                     name='product_new_price'
                     id='product-new-price'
                     placeholder='New Price'
                     onChange={handleChange}
                     required
                  />
               </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
               <div className="widget">
                  <label htmlFor="old-price">Product Old Price: </label>
                  <span id='old-price-error' style={{
                     display: 'none',
                     color: '#A72237',
                     fontSize: '14px',
                     fontFamily: 'Nunito, sans-serif'
                  }}>Input can't be empty</span>
                  <input
                     value={productDetails.productOldPrice}
                     type="number"
                     name='product_old_price'
                     id='product-old-price'
                     placeholder='Old Price'
                     onChange={handleChange}
                     required
                  />
               </div>
            </div>
            <div className="col-12 mb-4">
               <div className="widget">
                  <label htmlFor="product-description">Product Description: </label>
                  <span id='product-description-error' style={{
                     display: 'none',
                     color: '#A72237',
                     fontSize: '14px',
                     fontFamily: 'Nunito, sans-serif'
                  }}>Input can't be empty</span>
                  <textarea
                     value={productDetails.productDescription}
                     name="product_description"
                     id='product-description'
                     placeholder='Product Description'
                     style={{ minHeight: '100px' }}
                     onChange={handleChange}
                     required
                  ></textarea>
               </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
               <button type='button' onClick={createProduct}>CREATE PRODUCT</button>
            </div>
         </div>
      </div>
   )
}

export default CreateProduct