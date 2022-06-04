import React, {useState} from 'react';
import '../css/LoginRegister.scss';
import BreadCrumb from '../components/BreadCrumb';
import $ from 'jquery';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const breadCrumbName = {
   name: 'Account'
}
const LoginRegister = () => {

   const navigate = useNavigate();

   const [accountBox, setAccountBox] = useState(false);
   const [userDetails, setUserDetails] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
   });
   const [loginDetails, setLoginDetails] = useState({
      email: '',
      password: ''
   })
    //user Token
   const token = window.localStorage.getItem('usr_id');
   if(token) {
      window.location.href = "/"
   }

   const handleChange = (event) => {
      const {name, value} = event.target;
      setUserDetails((prevState) => {
         return {
            ...prevState,
            [name]:value
         }
      })
   }

   const loginHandleChange = (event) => {
      const {name, value} = event.target;
      setLoginDetails((prevState) => {
         return {
            ...prevState,
            [name]:value
         }
      })
   }

   ///EMAIL VALIDATIOn
   const validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
   };

   ///REGISTER VALIdATION
   const validate = (userDetails) => {
      if(userDetails.firstName.length < 1 || userDetails.lastName.length < 1) {
         $(".alert_box").css('display', 'flex');
         $(".alert_box li").text(`Name can't be blank`)
         return false;
      }
      if(userDetails.firstName.length < 3 || userDetails.lastName.length < 3) {
         $(".alert_box").css('display', 'flex');
         $(".alert_box li").text(`Name can't be less than 3`);
         return false;
      }
      if(userDetails.email === "") {
         $(".alert_box").css('display', 'flex');
         $(".alert_box li").text(`Email can't be blank`);
         return false;
      }
      if(!validateEmail(userDetails.email)) {
         $(".alert_box").css('display', 'flex');
         $(".alert_box li").text(`Email is not correct`);
         return false;
      }
      if(userDetails.password.length < 1) {
         $(".alert_box").css('display', 'flex');
         $(".alert_box li").text(`Password can't be blank`);
         return false;
      }
      if(userDetails.password.length < 6) {
         $(".alert_box").css('display', 'flex');
         $(".alert_box li").text(`Password can't be less than 6 character`);
         return false;
      }
      return true;
   }

   ///LOGIN VALIDATION
   const loginValidate = (loginDetails) => {
      if(loginDetails.email === "") {
         $(".alert_box").css('display', 'flex');
         $(".alert_box li").text(`Email can't be blank`);
         return false;
      }
      if(!validateEmail(loginDetails.email)) {
         $(".alert_box").css('display', 'flex');
         $(".alert_box li").text(`Email is not correct`);
         return false;
      }
      if(loginDetails.password.length < 1) {
         $(".alert_box").css('display', 'flex');
         $(".alert_box li").text(`Password can't be blank`);
         return false;
      }
      if(loginDetails.password.length < 6) {
         $(".alert_box").css('display', 'flex');
         $(".alert_box li").text(`Password can't be less than 6 character`);
         return false;
      }
      return true;
   }

   ///REGISTER SUBMIT HANDLER
   const submitHandler = async (e) => {
      e.preventDefault();

      const User = ({
         firstName: userDetails.firstName,
         lastName: userDetails.lastName,
         email: userDetails.email,
         password: userDetails.password
      })
      console.log(User);
      if(validate(userDetails)) {
         console.log("var")
         const token = await axios.post(`${process.env.REACT_APP_API_URL}/api/register`, User)
         .then(res => res.data)
         .catch((err) => {
            console.log(err);
            if(err.response.data.error.errors.email) {
               $(".alert_box").css('display', 'flex');
               $(".alert_box li").text('This Email is already using');
            }
         })
         if(token.user) {
            window.localStorage.setItem('usr_id', token.user);
            window.location.href = "/";
         }
         console.log(token);
      }
   }

   ///LOGIN SUBMIT HANDLER
   const loginSubmitHandler = async (e) => {
      e.preventDefault();

      if(loginValidate(loginDetails)) {
         console.log(loginDetails);
         const User = ({
            email: loginDetails.email,
            password: loginDetails.password
         })
         const token = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, User)
         .then(res => res.data)
         if(token.user) {
            console.log(token.user);
            window.location.href = "/";
            window.localStorage.setItem('usr_id', token.user);
         } else {
            console.log(token.alert)
            $(".alert_box").css('display', 'flex');
            $(".alert_box li").text(`${token.alert.msg}`);
         }
      }
   }

   const changeAccountTrue = () => {
      if(accountBox === false) {
         setAccountBox(true);
         $(".alert_box").css('display', 'none');
      }
   }
   const changeAccountFalse = () => {
      if(accountBox === true) {
         setAccountBox(false);
         $(".alert_box").css('display', 'none');
      }
   }

   return (
      <main>
         <BreadCrumb breadCrumbName={breadCrumbName}/>
         <section className='login-register-area'>
            <div className="container">
               <div className="row justify-content-center align-items-center">
                  <div className="col-12 col-lg-7">
                     <div className="login_register_wrapper">
                        <div className="login_register_tab_list">
                           <h4 className={accountBox === false ? 'active' : ''} onClick={changeAccountFalse}>Log In</h4>
                           <h4 className={accountBox === true ? 'active' : ''} onClick={changeAccountTrue} >Register</h4>
                        </div>
                        <div className="login_panel">
                           {
                              accountBox === false ?
                              <div className="login_register_container">
                                 <ul className='alert_box'>
                                    <li></li>
                                 </ul>
                                 <div className="email_box">
                                    <input
                                    name='email'
                                    value={loginDetails.email}
                                    required
                                    type="email"
                                    id='email'
                                    placeholder='Email'
                                    onChange={loginHandleChange}
                                    />
                                    <label htmlFor="email">Email</label>
                                 </div>
                                 <div className="password_box">
                                    <input
                                    name='password'
                                    value={loginDetails.password}
                                    required
                                    type="password"
                                    id='password'
                                    placeholder='Password'
                                    onChange={loginHandleChange}
                                    />
                                    <label htmlFor="password">Password</label>
                                 </div>
                                 <div className="btn_box">
                                    <button type='button' onClick={loginSubmitHandler}>SIGN IN</button>
                                    <span>Forgot your password?</span>
                                 </div>
                              </div>
                              :
                              <div className="login_register_container active">
                                 <ul className='alert_box'>
                                    <li></li>
                                 </ul>
                                 <div className="FirstName_box">
                                    <input
                                    name='firstName'
                                    value={userDetails.firstName}
                                    required
                                    type="name"
                                    id='FirstName'
                                    placeholder='First Name'
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="FirstName">First Name</label>
                                 </div>
                                 <div className="LastName_box">
                                    <input
                                    name='lastName'
                                    value={userDetails.lastName}
                                    required
                                    type="name"
                                    id='LastName'
                                    placeholder='Last Name'
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="LastName">Last Name</label>
                                 </div>
                                 <div className="email_box">
                                    <input
                                    name='email'
                                    value={userDetails.email}
                                    required
                                    type="email"
                                    id='email'
                                    placeholder='Email'
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="email">Email</label>
                                 </div>
                                 <div className="password_box">
                                    <input
                                    name='password'
                                    value={userDetails.password}
                                    required
                                    type="password"
                                    id='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    />
                                    <label htmlFor="password">Password</label>
                                 </div>
                                 <div className="btn_box">
                                    <button type='button' onClick={submitHandler}>Register</button>
                                 </div>
                              </div>
                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}

export default LoginRegister