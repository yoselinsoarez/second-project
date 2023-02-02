import React from 'react';
import '../stylesheets/Home.css';
import frontpets from '../images/frontpets.png';
import Card from 'react-bootstrap/Card';

/**
 *
 * @returns
 */
function Home() {
    return (
        <>
            <Card className="home-title">
                <Card.Body>
                    Welcome to our animal adoption page, and make your new
                    friend.
                    <br />
                    Animals are great teachers faithful companions.
                    <br />
                    Anyone who has or has had a pet knows how much these
                    creatures can contribute to us. As a rule, they are loyal
                    companions, faithful confidants who are non-judgmental and
                    always have love to offer.
                    <br />
                    That is why we have created this page, so that you can adopt
                    your new friend and give them a home.
                </Card.Body>
            </Card>

            <img className="home-img" src={frontpets} alt="img-home" />
        </>
    );
}

export default Home;
