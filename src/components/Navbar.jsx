import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Navbar = ({ user }) => {

   const [toggle, setToggle] = useState(false);
   const [shoppingCartToggle, setShoppingCartToggle] = useState(false);
   const [headerFixed, setHeaderFixed] = useState(false);
   const [userMeCarts, setUserMeCarts] = useState([]);
   const [totalPrice, setTotalPrice] = useState(0);
   const [userMe, setuserMe] = useState([]);

   useEffect(() => {
      if(user) {
         setuserMe(user);
         if(user.carts !== undefined) {
            setUserMeCarts(user.carts);
         }
      }
   })

   ///DELETNG CART ELEMENT
   const deleteCartElement = async (_id) => {
      const cartId = _id;
      const userId = user._id;

      const removeCart = await axios.delete(`${process.env.REACT_APP_API_URL}/api/delete-cart/${cartId}/user-id/${userId}`)
      .then(res => {
         window.location.reload(true);
         return res.data
      })
      .catch(err => {
         if(err) {
            console.log('error from removing cart of user' + err);
         }
      })
   }

   const changeHandler = (e) => {
      if(window.scrollY > 120) {
         console.log()
         setHeaderFixed(true);
      } else {
         setHeaderFixed(false);
      }
   }

   window.addEventListener('scroll', changeHandler);

   const menuToggle = () => {
      if(toggle === false) {
         setToggle(true)
      } else {
         setToggle(false)
      }
   }

   const shoppingCartBtn = () => {
      if(shoppingCartToggle === false) {
         setShoppingCartToggle(true)
      } else {
         setShoppingCartToggle(false)
      }
   }

   const logOut = () => {
      window.localStorage.removeItem('usr_id');
   }

   useEffect(() => {
      let price = 0;
      userMeCarts.map((carts) => {
         setTotalPrice(price += carts.price);
      })
   })

  return (
    <div className={headerFixed === true ? 'navigation-bar navigation-bar-fixed' : 'navigation-bar'}>
       <div className="container">
         <div className="row align-items-center" style={{position: "relative", transition: "all 300ms ease"}}>
               <div className="col-6 col-lg-2 d-flex align-items-center">
                  <div className="logo">
                     <a href='/'><img src={require('../assets/logo.jpg')} alt="" /></a>
                  </div>
               </div>
               <div className="col-8 d-flex align-items-center justify-content-center ul-wrapper">
                  <ul className='navigation_as'>
                     <li><a href='/'>Home</a></li>
                     <li><a href={'/collections/all'}>Food</a></li>
                     <li><a href='/blogs/news'>Blog</a></li>
                     <li><a href='/pages/about-us'>About Us</a></li>
                     <li><a href='/pages/contact'>Contact</a></li>
                     {
                        userMe.admin == true &&
                        <a href='/pages/admin'><li>Admin</li></a>
                     }
                  </ul>
               </div>
               <div className="col-6 col-lg-2 d-flex align-items-center justify-content-end">
                  <div className="search_login_cart_wrapper">
                     <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                     </div>
                     <div className="login">
                        {
                           userMe._id ?
                           <a href='/'><i className="fa-solid fa-arrow-right-from-bracket" onClick={logOut}></i></a>
                           :
                           <a href='/account/login'><i className="fa-regular fa-user"></i></a>
                        }
                     </div>
                     <div className="cart">
                        <i className="fa-solid fa-bag-shopping" onClick={shoppingCartBtn}></i>
                        <div className="cart_adding_number" id="cart_adding_number" onClick={shoppingCartBtn}>
                           {userMeCarts.length > 0 ? userMeCarts.length : 0}
                        </div>
                        <div className={shoppingCartToggle === false ? 'shopping_cart_content' : 'shopping_cart_content shopping-cart-active'}>
                        {
                           userMeCarts.length > 0 ?
                           <div className="shopping_cart_cover">
                              {userMeCarts.map((carts, i) => (
                                 <li className='single_shopping_cart mb-3' key={i}>
                                    <div className="shopping_cart_img">
                                       <a href={`/products/${carts.productID}`}><img src={user && require('../uploads/product-images/' + carts.image)} alt="" /></a>
                                    </div>
                                    <div className="shopping_cart_title">
                                       <a href={`/products/${carts.productID}`}><h4>{carts.title} - {carts.size} / {carts.color} / {carts.material}</h4></a>
                                       <h6>Qty: {carts.number}</h6>
                                       <span className='money'>${carts.price}.00</span>
                                    </div>
                                    <div className="shopping_cart_close">
                                       <i className="fa-regular fa-circle-xmark" id='delete_cart_element' onClick={() => deleteCartElement(carts._id)}></i>
                                    </div>
                                 </li>
                              ))}
                              <div className="shopping_cart_total">
                                 <h4>
                                    Total: 
                                    <span style={{ color: "#F6AB4B" }}>${totalPrice}.00</span>
                                 </h4>
                              </div>
                              <div className="shopping_cart_btn">
                                 <a href='/cart'><button type='button'>VIEW CART</button></a>
                                 <a href='/checkouts/:id'><button type='button'>CHECKOUT</button></a>
                              </div>
                           </div>
                           :
                           <p>Cart cannot find</p>
                        }
                        </div>
                     </div>
                     <div className="menu-toggle" onClick={menuToggle}>
                        {
                           toggle === false ?
                           <div className="line-wrapper">
                              <div className="single-line line"></div>
                              <div className="single-line line"></div>
                              <div className="single-line line"></div>
                           </div>
                           :
                           <span>X</span>
                        }
                     </div>
                  </div>
               </div>
               <div className={toggle === false ? 'menu-nav' : 'menu-nav menu-active'}>
                  <ul>
                     <li><a href='/'>Home</a></li>
                     <li><a href='/collections/all'>Food</a></li>
                     <li><a href='/blogs/news'>Blog</a></li>
                     <li><a href='/pages/about-us'>About Us</a></li>
                     <li><a href='/pages/contact'>Contact</a></li>
                     {
                        userMe.admin == true &&
                        <a href='/pages/admin'><li>Admin</li></a>
                     }
                  </ul>
               </div>
          </div>
       </div>
    </div>
  )
}

export default Navbar