import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='navbar'>
            <div className="nav-header">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>CustomTees</p>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`line ${isOpen ? 'active' : ''}`}></div>
                    <div className={`line ${isOpen ? 'active' : ''}`}></div>
                    <div className={`line ${isOpen ? 'active' : ''}`}></div>
                </div>
            </div>
            {isOpen && (
                <div className="mobile-menu">
                    <ul className="nav-menu">
                        <li onClick={() => { setMenu("shop"); toggleMenu(); }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("mens"); toggleMenu(); }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("womens"); toggleMenu(); }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("kids"); toggleMenu(); }}><Link id="baccha" style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
                    </ul>
                    <div className="nav-login-cart">
                        <Link to='/login'><button>Login</button></Link>
                        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                        <div className="nav-cart-count">{getTotalCartItems()}</div>
                    </div>
                </div>
            )}
            <div className="nav-login-cart desktop">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
