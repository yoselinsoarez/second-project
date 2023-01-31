import React from 'react';
import '../stylesheets/NavBar.css';

const NavBar = () => {
return (
    <div className='NavBar'>
        <span className='nav-logo'>AdoptPets</span>
        <div className='nav-items'>
            <a href='/home'>Home</a>
            <a href='/about'>About us</a>
            <a href='/contact'>Contact us</a>
        </div>

    </div>
)
}

export default NavBar;