import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && email.trim()) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 4000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#a0a0a0', position: 'relative' }}>
            <div className="container" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1.2fr 1.5fr',
                    gap: '60px',
                    marginBottom: '60px'
                }}>
                    {/* Column 1: About */}
                    <div>
                        <Link to="/" className="footer-logo" style={{
                            marginBottom: '25px',
                            display: 'block'
                        }}>
                            <img src="/images/Grandeza-logo-landscape-white.png" alt="Grandeza Logo" style={{ height: '75px', width: 'auto' }} />
                        </Link>
                        <p style={{
                            color: '#a0a0a0',
                            lineHeight: 1.8,
                            fontSize: '0.938rem',
                            marginBottom: '35px',
                            maxWidth: '320px'
                        }}>
                            With over 10 years of experience in construction, we partner with owners and design professionals to build high-quality projects across Ghana.
                        </p>
                        <div className="social-icons" style={{ display: 'flex', gap: '12px' }}>
                            <a href="#" style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#a0a0a0',
                                transition: 'var(--transition)',
                                border: '1px solid transparent'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                                    e.currentTarget.style.color = 'var(--primary-color)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.color = '#a0a0a0';
                                }}>
                                <Twitter size={18} />
                            </a>
                            <a href="#" style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#a0a0a0',
                                transition: 'var(--transition)',
                                border: '1px solid transparent'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                                    e.currentTarget.style.color = 'var(--primary-color)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.color = '#a0a0a0';
                                }}>
                                <Facebook size={18} />
                            </a>
                            <a href="#" style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#a0a0a0',
                                transition: 'var(--transition)',
                                border: '1px solid transparent'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                                    e.currentTarget.style.color = 'var(--primary-color)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.color = '#a0a0a0';
                                }}>
                                <Linkedin size={18} />
                            </a>
                            <a href="#" style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#a0a0a0',
                                transition: 'var(--transition)',
                                border: '1px solid transparent'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                                    e.currentTarget.style.color = 'var(--primary-color)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.color = '#a0a0a0';
                                }}>
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div>
                        <h4 style={{
                            color: 'var(--white)',
                            marginBottom: '30px',
                            fontSize: '1.125rem',
                            fontWeight: 700
                        }}>Useful Links</h4>
                        <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px' }}>
                                <Link to="/about" style={{
                                    color: '#a0a0a0',
                                    fontSize: '0.938rem',
                                    transition: 'var(--transition)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--primary-color)';
                                        e.target.style.paddingLeft = '5px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '#a0a0a0';
                                        e.target.style.paddingLeft = '0';
                                    }}>About Us</Link>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <Link to="/services" style={{
                                    color: '#a0a0a0',
                                    fontSize: '0.938rem',
                                    transition: 'var(--transition)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--primary-color)';
                                        e.target.style.paddingLeft = '5px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '#a0a0a0';
                                        e.target.style.paddingLeft = '0';
                                    }}>Services</Link>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <Link to="/projects" style={{
                                    color: '#a0a0a0',
                                    fontSize: '0.938rem',
                                    transition: 'var(--transition)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--primary-color)';
                                        e.target.style.paddingLeft = '5px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '#a0a0a0';
                                        e.target.style.paddingLeft = '0';
                                    }}>Projects</Link>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <Link to="/blog" style={{
                                    color: '#a0a0a0',
                                    fontSize: '0.938rem',
                                    transition: 'var(--transition)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--primary-color)';
                                        e.target.style.paddingLeft = '5px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '#a0a0a0';
                                        e.target.style.paddingLeft = '0';
                                    }}>News</Link>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <Link to="/careers" style={{
                                    color: '#a0a0a0',
                                    fontSize: '0.938rem',
                                    transition: 'var(--transition)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--primary-color)';
                                        e.target.style.paddingLeft = '5px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '#a0a0a0';
                                        e.target.style.paddingLeft = '0';
                                    }}>Careers</Link>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <Link to="/contact" style={{
                                    color: '#a0a0a0',
                                    fontSize: '0.938rem',
                                    transition: 'var(--transition)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--primary-color)';
                                        e.target.style.paddingLeft = '5px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '#a0a0a0';
                                        e.target.style.paddingLeft = '0';
                                    }}>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 style={{
                            color: 'var(--white)',
                            marginBottom: '30px',
                            fontSize: '1.125rem',
                            fontWeight: 700
                        }}>Contact</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <i className="fas fa-clock" style={{ color: 'var(--primary-color)', fontSize: '1rem', marginTop: '3px' }}></i>
                                <span style={{ fontSize: '0.938rem', lineHeight: 1.6 }}>Mon - Fri: 8.00am - 6.00pm</span>
                            </li>
                            <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-color)', fontSize: '1rem', marginTop: '3px' }}></i>
                                <span style={{ fontSize: '0.938rem', lineHeight: 1.6 }}>AZ 317 Nuumo Larweh St,<br />Spintex, Accra, Ghana</span>
                            </li>
                            <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <i className="fas fa-phone-alt" style={{ color: 'var(--primary-color)', fontSize: '1rem', marginTop: '3px' }}></i>
                                <a href="tel:+233249723920" style={{
                                    fontSize: '0.938rem',
                                    color: '#a0a0a0',
                                    transition: 'var(--transition)'
                                }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                                    onMouseLeave={(e) => e.target.style.color = '#a0a0a0'}>
                                    +233 24 972 3920
                                </a>
                            </li>
                            <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <i className="fas fa-envelope" style={{ color: 'var(--primary-color)', fontSize: '1rem', marginTop: '3px' }}></i>
                                <a href="mailto:admin@grandezaconstr.com" style={{
                                    fontSize: '0.938rem',
                                    color: '#a0a0a0',
                                    transition: 'var(--transition)',
                                    wordBreak: 'break-all'
                                }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                                    onMouseLeave={(e) => e.target.style.color = '#a0a0a0'}>
                                    admin@grandezaconstr.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 style={{
                            color: 'var(--white)',
                            marginBottom: '30px',
                            fontSize: '1.125rem',
                            fontWeight: 700
                        }}>Newsletter</h4>
                        <form onSubmit={handleSubscribe} style={{ marginTop: '25px' }}>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    backgroundColor: '#2a2a2a',
                                    border: '1px solid #3a3a3a',
                                    borderRadius: '50px',
                                    color: 'var(--white)',
                                    fontSize: '0.938rem',
                                    marginBottom: '15px',
                                    outline: 'none',
                                    transition: 'var(--transition)'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                                onBlur={(e) => e.target.style.borderColor = '#3a3a3a'}
                            />
                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '16px 20px',
                                    backgroundColor: 'transparent',
                                    border: '2px solid var(--primary-color)',
                                    borderRadius: '50px',
                                    color: 'var(--primary-color)',
                                    fontSize: '0.938rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'var(--transition)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'var(--primary-color)';
                                    e.target.style.color = 'var(--white)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = 'var(--primary-color)';
                                }}
                            >
                                Subscribe!
                            </button>
                            {subscribed && (
                                <p style={{ color: '#4caf50', fontSize: '0.875rem', marginTop: '10px', textAlign: 'center' }}>
                                    Thank you for subscribing!
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: '30px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <p style={{
                        fontSize: '0.875rem',
                        color: '#6a6a6a',
                        margin: 0
                    }}>
                        © {new Date().getFullYear()} Grandeza Construction. All rights reserved. <span style={{ color: '#4a4a4a', margin: '0 8px' }}>|</span> Made by 100 Impressions Ltd
                    </p>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <a href="#" style={{
                            fontSize: '0.875rem',
                            color: '#6a6a6a',
                            transition: 'var(--transition)'
                        }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.target.style.color = '#6a6a6a'}>
                            Terms of Use
                        </a>
                        <a href="#" style={{
                            fontSize: '0.875rem',
                            color: '#6a6a6a',
                            transition: 'var(--transition)'
                        }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.target.style.color = '#6a6a6a'}>
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)',
                    border: 'none',
                    color: 'var(--white)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(220, 111, 61, 0.4)',
                    transition: 'var(--transition)',
                    zIndex: 999
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(220, 111, 61, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(220, 111, 61, 0.4)';
                }}
            >
                <ArrowUp size={24} />
            </button>
        </footer>
    );
};

export default Footer;
