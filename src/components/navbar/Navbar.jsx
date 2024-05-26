import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav className="nav">
            <Link to="/" className="site-title">Site Name</Link>
            <ul>
                <CustomLink to="/booking">Rezervări</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/login">Autentificare</CustomLink>
                <CustomLink to="/register">Creare cont</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname

    return (
    <li className={path === href ? "active" : ""}>
        <a href={href} {...props}>{children}</a>
    </li>
    )
}

export default Navbar;