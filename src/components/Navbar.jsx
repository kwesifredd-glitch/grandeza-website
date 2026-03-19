import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header id="header" className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                <nav>
                    <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/images/Grandeza-logo-landscape-white.png" alt="Grandeza Logo" style={{ height: '70px', width: 'auto' }} />
                    </Link>
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <li><Link to="/" className={isActive('/')}>Home</Link></li>
                        <li><Link to="/about" className={isActive('/about')}>About</Link></li>
                        <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
                        <li><Link to="/projects" className={isActive('/projects')}>Projects</Link></li>
                        <li><Link to="/blog" className={isActive('/blog')}>News</Link></li>
                        <li><Link to="/careers" className={isActive('/careers')}>Careers</Link></li>
                        <li><Link to="/contact" className="btn btn-primary" style={{ padding: '12px 28px' }}>Get a Quote</Link></li>
                    </ul>
                    <div className="hamburger" onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
