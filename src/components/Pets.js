import React from 'react';
import '../stylesheets/Pets.css';

/**
 * with the use of an array of objects that represent each of the animals and their details
 * then I use a map to render them
 */
const pets = [
    {
        id: 1,
        name: 'Baloo',
        image: require('../images/pet-baloo.png'),
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        name: 'Chipi',
        image: require('../images/pet-chipi.png'),
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        name: 'Coco',
        image: require('../images/pet-coco.png'),
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 4,
        name: 'Grey',
        image: require('../images/pet-grey.png'),
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 5,
        name: 'Marley',
        image: require('../images/pet-marley.png'),
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 6,
        name: 'Poly',
        image: require('../images/pet-poly.png'),
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

/**
 *
 * @returns
 */
function Pets() {
    return (
        <>
            <div className="title">
                <h1>These are our pets for adoption:</h1>
            </div>
            <div className="container">
                {pets.map((pet) => (
                    <div className="pet-container" key={pet.id}>
                        <img
                            className="pet-image"
                            src={pet.image}
                            alt={pet.name}
                        />
                        <div className="container-text-pet">
                            <p className="pet-name">{pet.name}</p>
                            <p className="text-pet">{pet.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Pets;
