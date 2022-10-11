import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h4>Skill Test</h4>
            </div>
            <div className='navigation'>
                <Link to='/'>Home</Link>
            </div>
            
        </nav>
    );
};

export default Header;