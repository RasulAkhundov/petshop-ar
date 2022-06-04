import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from '../src/components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import Collections from './pages/Collections';
import BlogNews from './pages/BlogNews';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import SingleProducts from './pages/SingleProducts';
import NotFound from './pages/NotFound';
import Admin from './pages/AdminPanel';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

function App() {

  const [scrollUp, setScrollUp] = useState(false);
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState('');
  const [products, setProducts] = useState('');
  const [loading, setLoding] = useState(false);

  const token = window.localStorage.getItem('usr_id');
  useEffect(() => {
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
      async function fetchData() {
        ///USER ME GETTING
        const usr = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/${decodedUser._id}`).then(res => res.data.userInfo);
        setUser(usr);
        //Getting all users
        const users = await axios.get(`${process.env.REACT_APP_API_URL}/api/all-users`).then(res => res.data.users);
        setAllUsers(users);
      }
      fetchData();
      setLoding(true);
    }
    ///Getting all Products
    async function fetchData() {
      const products = await axios.get(`${process.env.REACT_APP_API_URL}/api/get-products`).then(res => res.data.products);
      setProducts(products);
    }
    fetchData();
  }, [])

  const scrollUpActive = () => {
    if (window.scrollY > 300) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
  }

  window.addEventListener('scroll', scrollUpActive);

  const scrollAction = () => {
    window.scrollTo(0, 0)
  }

  const navBarUser = user;

  return (
    <Router>
      <div className="App">
        {
          scrollUp === true &&
          <div className='scroll_up' onClick={scrollAction}>
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        }
        <Navbar user={user ? navBarUser : ""} />
        <Routes>
          <Route path='/' element={<Home user={user} products={products} />} />
          <Route path='/account/login' element={<LoginRegister />} />
          <Route path='/collections/all' element={<Collections user={user} products={products} />} />
          <Route path='/blogs/news' element={<BlogNews user={user} />} />
          <Route path='/pages/about-us' element={<AboutUs user={user} />} />
          <Route path='/pages/contact' element={<Contact user={user} />} />
          <Route path={`/products/:id`} element={<SingleProducts products={products}/>} />
          <Route path='/pages/admin' element={<Admin user={user} allUsers={allUsers} products={products} />} />
          <Route path='/404' element={<NotFound />} />
          <Route
            path="*"
            element={<Navigate to="/404" replace />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
