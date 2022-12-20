import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h4><Link to="/" className='logo'><img className='logo-image' src={Logo} alt="logo"/></Link></h4>
            </div>
            <div className='navigation'>
                <Link className='nav-link'  to='/'>Home</Link>
                <Link className='nav-link' to='/stats'>Statistics</Link>
                <Link className='nav-link' to='blogs'>Blogs</Link>
            </div>
            
        </nav>
    );
};

export default Header;