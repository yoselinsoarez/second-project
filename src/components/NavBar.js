import { NavLink } from 'react-router-dom';
import '../stylesheets/NavBar.css';
import logo from '../images/logo.png';

function NavBar() {
    return (
        <div className="NavBar">
            <span className="nav-logo">AdoptAPet</span>
            <img className="logo-img" src={logo} alt="logo" />
            <div className="nav-items">
                {[{ to: '/home', title: 'Home' }].map((item, index) => (
                    <NavLink key={index} to={item.to}>
                        {item.title}
                    </NavLink>
                ))}
                {[{ to: '/aboutus', title: 'About us' }].map((item, index) => (
                    <NavLink key={index} to={item.to}>
                        {item.title}
                    </NavLink>
                ))}
                {[{ to: '/pets', title: 'Pets' }].map((item, index) => (
                    <NavLink key={index} to={item.to}>
                        {item.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default NavBar;
