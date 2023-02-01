import React from 'react';
import '../stylesheets/Pets.css';

function Pets() {
return (
    <div className='pet-container'>
        <img className='pet-image'
        src={require('../images/pet-baloo.png')} alt='baloo'/>
        <div className='container-text-pet'>
            <p className='pet-name'>Baloo</p>
            <p className='text-pet'>Qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem</p>
        </div>
    

        
    


    </div>
)
}

export default Pets;