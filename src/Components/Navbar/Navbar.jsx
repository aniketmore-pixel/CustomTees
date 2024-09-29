import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext); 
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>CustomTees</p>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li onClick={() => { setMenu("shop"); toggleMenu(); }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("mens"); toggleMenu(); }}>
                    <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
                    {menu === "mens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("womens"); toggleMenu(); }}>
                    <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
                    {menu === "womens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("kids"); toggleMenu(); }}>
                    <Link id="baccha" style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
