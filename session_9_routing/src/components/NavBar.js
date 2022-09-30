import { NavLink } from 'react-router-dom';

const activeClass = (params) => {
    return params.isActive ? 'active-menu-item' : '';
};

const NavBar = () => {
    return (
        <ul>
            <li>
                <NavLink className={activeClass} to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink className={activeClass} to="/welcome">Welcome</NavLink>
            </li>
            <li>
                <NavLink className={activeClass} to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink className={activeClass} to="/profile">Profile</NavLink>
            </li>
        </ul>
    );
};

export default NavBar;