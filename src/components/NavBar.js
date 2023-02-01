import {NavLink} from 'react-router-dom';
import '../stylesheets/NavBar.css';

function NavBar () {
return (
    <div className='NavBar'>
        <span className='nav-logo'>AdoptPets</span>
        <div className='nav-items'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/aboutus'>About us</NavLink>
        <NavLink to='/pets'>Pets</NavLink>
        
        
        
        </div>

    </div>
)
}

export default NavBar;