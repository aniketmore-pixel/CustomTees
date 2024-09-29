import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext); 
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle mobile menu

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>CustomTees</p>
            </div>
            <div className="hamburger" onClick={handleMenuToggle}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <li onClick={() => { setMenu("shop"); setIsMobileMenuOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("mens"); setIsMobileMenuOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
                    {menu === "mens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("womens"); setIsMobileMenuOpen(false); }}>
                    <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
                    {menu === "womens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("kids"); setIsMobileMenuOpen(false); }}>
                    <Link id="baccha" style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
