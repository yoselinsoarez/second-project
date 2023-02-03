import React from 'react';
import '../stylesheets/Testimonials.css';
import { Col, Card } from 'react-bootstrap';
import testimonial1 from '../images/testimonial1.png';
import testimonial2 from '../images/testimonial2.png';
import testimonial3 from '../images/testimonial3.png';
import testimonial4 from '../images/testimonial4.png';
import testimonial5 from '../images/testimonial5.png';
import testimonial6 from '../images/testimonial6.png';

const images = [
    {
        src: testimonial1,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        src: testimonial2,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        src: testimonial3,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        src: testimonial4,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        src: testimonial5,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
        src: testimonial6,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
];

function Testimonials() {
    return (
        <div className="testimonials-container">
            {images.map(({ src, title, text }) => (
                <Col xs={3} className="testimonial" key={src}>
                    <Card style={{ borderRadius: '15px' }}>
                        <Card.Img variant="top" src={src} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>
    );
}

export default Testimonials;
