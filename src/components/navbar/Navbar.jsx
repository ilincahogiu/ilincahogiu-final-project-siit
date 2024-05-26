import './Navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (
    <nav className="nav">
            <Link to="/" className="site-title">Site Name</Link>
            <ul>
                <CustomLink to="/booking">Rezervări</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/login">Autentificare</CustomLink>
                <CustomLink to="/register">Înregistrare</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    );
}