import React from 'react';
import '../stylesheets/Home.css';
import frontpets from '../images/frontpets.png';

/**
 *
 * @returns
 */
function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to our animal adoption page.</h1>
            <h3>Make a new friend</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
            </p>

            <img className="home-img" src={frontpets} alt="img-home" />
        </div>
    );
}

export default Home;
