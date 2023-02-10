import { NavLink } from 'react-router-dom';
import '../stylesheets/NavBar.css';
import { MdPets } from 'react-icons/md';

function NavBar() {
    const links = [
        { to: '/home', title: 'Home' },
        { to: '/pets', title: 'Pets' },
        { to: '/aboutus', title: 'About us' },
        { to: '/testimonials', title: 'Testimonials' },
    ];

    return (
        <div className="NavBar">
            <span className="nav-logo">
                AdoptAPet <MdPets style={{ color: '#fff' }} />
            </span>

            <div className="nav-items">
                {links.map((item, index) => (
                    <NavLink key={index} to={item.to}>
                        {item.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default NavBar;
