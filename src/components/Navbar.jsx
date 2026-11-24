import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

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

    // While the phone menu is open: stop the page behind from scrolling, and let Escape close it
    useEffect(() => {
        document.body.classList.toggle('menu-open', isOpen);
        if (!isOpen) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.classList.remove('menu-open');
        };
    }, [isOpen]);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/services', label: 'Services' },
        { to: '/projects', label: 'Projects' },
        { to: '/blog', label: 'News' },
        { to: '/careers', label: 'Careers' },
    ];

    return (
        <header id="header" className={`${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-is-open' : ''}`}>
            <div className="container">
                <nav>
                    <Link to="/" className="logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/images/Grandeza-logo-landscape-white.png" alt="Grandeza Logo" style={{ height: '70px', width: 'auto' }} />
                    </Link>
                    <ul id="site-menu" className={`nav-links ${isOpen ? 'active' : ''}`}>
                        {links.map((l) => (
                            <li key={l.to}>
                                <Link
                                    to={l.to}
                                    className={isActive(l.to)}
                                    aria-current={isActive(l.to) ? 'page' : undefined}
                                    onClick={closeMenu}
                                >
                                    {l.label}
                                    <ArrowUpRight className="nav-arrow" size={22} aria-hidden="true" />
                                </Link>
                            </li>
                        ))}
                        <li className="nav-cta">
                            <Link to="/contact" className="btn btn-primary" onClick={closeMenu} style={{ padding: '12px 28px' }}>Get a Quote</Link>
                        </li>
                        <li className="nav-contact">
                            <a href="tel:+233249723920"><Phone size={16} aria-hidden="true" /> +233 24 972 3920</a>
                            <a href="mailto:admin@grandezaconstr.com"><Mail size={16} aria-hidden="true" /> admin@grandezaconstr.com</a>
                            <span>Mon - Fri: 8:00am - 5:00pm</span>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="hamburger"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-controls="site-menu"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
