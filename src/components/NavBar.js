import { NavLink } from 'react-router-dom';
import '../stylesheets/NavBar.css';
import { ImHeart } from 'react-icons/im';

function NavBar() {
    return (
        <div className="NavBar">
            <span className="nav-logo">
                AdoptAPet <ImHeart style={{ color: 'red' }} />
            </span>

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
