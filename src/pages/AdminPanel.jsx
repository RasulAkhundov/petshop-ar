import React, { useEffect, useState } from 'react';
import '../css/AdminPanel.scss';
import Dashboard from '../components/Admin/Dashboard/Dashboard';
import Users from '../components/Admin/Users/Users';
import Products from '../components/Admin/Products/Products';
import CreateProduct from '../components/Admin/CreateProduct/CreateProduct';
import jwtDecode from 'jwt-decode';
import $ from 'jquery';

const Admin = ({ user, allUsers, products }) => {

   const [location, setLocation] = useState('dashboard');
   const [decodedUser, setDecodedUser] = useState('');
   const [widgetActive, setWidgetActive] = useState(false);

   const token = window.localStorage.getItem('usr_id');
   useEffect(() => {
      if (token) {
         const userMe = jwtDecode(token);
         setDecodedUser(userMe);
      } else {
         window.location.href = '/';
      }
   }, [])
   if (decodedUser.admin === false) {
      window.location.href = '/';
   }

   ////ASIDE BUTTON ACTIVE
   $('.widget-li').on('click', (e) => {
      $('.widget-li').removeClass('widget-active');
      $(e.target).addClass('widget-active');
   })


   ///LOGOUT FUNCTION
   const logout = () => {
      window.localStorage.removeItem('usr_id');
      window.location.href = '/'
   }

   return (
      <main>
         <div className="error-modal" id='error-modal'></div>
         <div className="sucsess-modal" id='sucsess-modal'></div>
         <div className="admin-area">
            <aside>
               <div className="user-info-content">
                  <img src={require('../assets/no-user-avatar.png')} alt="" />
                  <h4 className='user-info-name'>Rasul Akhundov</h4>
                  <i className="fa-solid fa-arrow-right-from-bracket" onClick={logout}></i>
               </div>
               <div className="content-widget">
                  <h4 className='widget-title'>Main</h4>
                  <ul>
                     <li className='widget-li widget-active' onClick={() => setLocation('dashboard')}><i className="fa-solid fa-house"></i> Dashboard</li>
                  </ul>
               </div>
               <div className="content-widget">
                  <h4 className='widget-title'>Lists</h4>
                  <ul>
                     <li className='widget-li' onClick={() => setLocation('users')}><i className="fa-solid fa-users"></i>Users</li>
                     <li className='widget-li' onClick={() => setLocation('products')}><i className="fa-solid fa-shop"></i> Products</li>
                     <li className='widget-li'><i className="fa-solid fa-credit-card"></i> Orders</li>
                     <li className='widget-li'><i className="fa-solid fa-newspaper"></i> News</li>
                  </ul>
               </div>
               <div className="content-widget">
                  <h4 className='widget-title'>Create</h4>
                  <ul>
                     <li className='widget-li'><i className="fa-solid fa-user"></i>User</li>
                     <li className='widget-li' onClick={() => setLocation('create-product')}><i className="fa-solid fa-shop"></i> Product</li>
                     <li className='widget-li'><i className="fa-solid fa-newspaper"></i> News</li>
                  </ul>
               </div>
            </aside>
            {
               location === "dashboard" ? <Dashboard allUsers={allUsers} />
                  : location === "users" ? <Users user={user} allUsers={allUsers} />
                     : location === 'products' ? <Products products={products} />
                        : location === 'create-product' ? <CreateProduct />
                           : <Dashboard allUsers={allUsers} />
            }
         </div>
      </main>
   )
}

export default Admin