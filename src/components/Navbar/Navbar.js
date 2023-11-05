import React, {useEffect, useState} from 'react';
import "./Navbar.scss";
import {Link} from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { setSidebarOn } from '../../store/sidebarSlice';
import { getAllCategories } from '../../store/categorySlice';
import { getAllCarts, getCartItemsCount, getCartTotal } from '../../store/cartSlice';
import CartModal from "../CartModal/CartModal";

const Navbar = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts])

  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <button type = "button" className='sidebar-show-btn text-white' onClick={() => dispatch(setSidebarOn())}>
            <i className='fas fa-bars'></i>
          </button>
          <Link to = "/" className='navbar-brand flex align-center'>
            <span className='navbar-brand-ico'>
              <i className='fa-solid fa-bag-shopping'></i>
            </span>
            <span className='navbar-brand-txt mx-2'>
              <span className='fw-7'>e</span>Buy
            </span>
          </Link>
        </div>

        <div className='navbar-collapse w-50'>
          <div className='navbar-search bg-white'>
            <div className='flex align-center'>
              <input type = "text" className='form-control fs-14' placeholder='Search your preferred items here' onChange={(e) => handleSearchTerm(e)} />
              <Link to = {`search/${searchTerm}`} className='text-blue search-btn flex align-center justify-center'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </Link>
            </div>
          </div>
        </div>
        
        <div className='login-btn-cnt'>
          <button type = "button" className='bg-white fs-15 fw-5 login-btn px-3 py-2 text-blue w-100' onClick={() => {}}>
            Login
          </button>
        </div>

        <div className='navbar-cart flex align-center'>
          <Link to = "/cart" className='cart-btn'>
            <i className='fa-solid fa-cart-shopping'></i>
            <div className='cart-items-value'>{itemsCount}</div>
            <CartModal carts = {carts} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar