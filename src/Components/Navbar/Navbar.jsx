import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext); 
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className='navbar'>
            <div className="nav-header">
                <div className="nav-logo">
                    <img src={logo} alt="CustomTees Logo" />
                    <p>CustomTees</p>
                </div>
                <div className="nav-login-cart">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
                <div className="hamburger" onClick={handleMenuToggle}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <button className="close-button" onClick={closeMenu}>×</button>
                    <ul className="nav-menu">
                        <li onClick={() => { setMenu("shop"); closeMenu(); }}>
                            <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                            {menu === "shop" ? <hr /> : <></>}
                        </li>
                        <li onClick={() => { setMenu("mens"); closeMenu(); }}>
                            <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
                            {menu === "mens" ? <hr /> : <></>}
                        </li>
                        <li onClick={() => { setMenu("womens"); closeMenu(); }}>
                            <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
                            {menu === "womens" ? <hr /> : <></>}
                        </li>
                        <li onClick={() => { setMenu("kids"); closeMenu(); }}>
                            <Link id="baccha" style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
                            {menu === "kids" ? <hr /> : <></>}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
