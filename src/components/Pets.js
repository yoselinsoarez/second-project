import React from 'react';
import '../stylesheets/Pets.css';

function Pets(props) {
return (
    <div className='pet-container'>
        <img className='pet-image'
        src={require (`../images/pet-${props.image}.png`)} alt='pets images'/>
        <div className='container-text-pet'>
            <p className='pet-name'>{props.name}</p>
            <p className='text-pet'>{props.text}</p>


        </div>

    </div>
)
}

export default Pets;