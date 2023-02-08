import '../stylesheets/AboutUS.css';

import logo from '../images/logo.png';
import { Card } from 'react-bootstrap';

function AboutUsForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name"></input>
            <input type="email" placeholder="Email" name="email"></input>
            <textarea placeholder="Message" name="message" />
            <button type="submit">Submit</button>
        </form>
    );
}

function AboutUsTitle() {
    return (
        <div>
            <h2 className="title">
                If you want to be a volunteer, you can complete this form. Thank
                you!
            </h2>
        </div>
    );
}

function AboutUsLogo() {
    return (
        <div className="img-logo">
            <img className="img-about" src={logo} alt="logo" />
        </div>
    );
}

function AboutUsFooter() {
    return (
        <Card
            className="card"
            style={{
                backgroundColor: '#17202a',
                color: '#fff',
                alignItems: 'center',
                marginTop: '1rem',
            }}
        >
            <Card.Body>
                AdoptAPet - All rights reserved &copy;
                {new Date().getFullYear()}
            </Card.Body>
        </Card>
    );
}

function AboutUs() {
    return (
        <>
            <AboutUsTitle />
            <AboutUsLogo />
            <AboutUsForm />
            <AboutUsFooter />
        </>
    );
}

export default AboutUs;
