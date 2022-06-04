import React from 'react';
import './Products.scss';
import axios from 'axios';

const Products = ({ products }) => {
  
  ////REMOVE PRODUCT FUNCTION
  const deleteProduct = async (_id) => {
    console.log(_id)

    const alert = window.confirm('Do you want to delete this product?');
    if(alert) {
      await axios
      .delete(`${process.env.REACT_APP_API_URL}/api/delete-product/${_id}`)
      .then(res => {
        window.location.reload();
        return res.data;
      })
      .catch(err => {
        if(err) {
          console.log("error from removing user on admin panel front end" + err);
        }
      })
    }
  }

  return (
    <div className="products-area">
      <div className="search-area mb-3">
        <h3>Search for products: </h3>
        <form className="form-inline my-2 my-lg-0 d-flex">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
        </form>
      </div>
      <div className="row">
        {products && products.map((p, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={i} data-aos="fade-up" data-aos-duration="300" data-aos-easing="linear">
            <div className="product_wrapper">
              <div className="product_image">
              <a href={`/products/${p._id}`}><img src={require(`../../../uploads/product-images/` + `${p.image[0].imageFilename1}`)} alt="" /></a>
                <div className="product_action">
                  <i onClick={() => deleteProduct(p._id)} className="fa-solid fa-trash" style={{ background: '#FECDCE', color: '#A72237'}}></i>
                </div>
              </div>
              <div className="product_content">
                <a href={`/products/${p._id}`}><h4>{p.productName}</h4></a>
                <div className="product_price">
                  <span className='new'>${p.productNewPrice}.00</span>
                  <span className='old'>${p.productOldPrice}.00</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;