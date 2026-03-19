import AntigravityShapes from '../components/AntigravityShapes';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <>
            {/* Page Header */}
            <section className="hero hero-page" style={{
                background: 'linear-gradient(rgba(19, 36, 66, 0.85), rgba(19, 36, 66, 0.85)), url(/images/construction-worker-hardhat-blueprints-and-const-2021-12-09-12-50-53-utc.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <AntigravityShapes />
                <div className="container text-center">
                    <div className="hero-content" style={{ margin: '0 auto' }}>
                        <h1 className="heading-xl">Get In <span style={{ color: 'var(--primary-color)' }}>Touch</span></h1>
                        <p className="text-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>We'd love to hear about your project.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-padding">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h3 className="heading-md" style={{ marginBottom: '30px' }}>Contact Information</h3>

                            <div className="contact-info-item">
                                <div className="icon-box"><i className="fas fa-map-marker-alt"></i></div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>AZ 317 Nuumo Larweh Street<br />Spintex, Accra, Ghana</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon-box"><i className="fas fa-phone-alt"></i></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+233 24 972 3920</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon-box"><i className="fas fa-envelope"></i></div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>admin@grandezaconstr.com</p>
                                </div>
                            </div>

                            <div className="social-icons" style={{ marginTop: '50px' }}>
                                <a href="#"><Linkedin size={20} /></a>
                                <a href="#"><Facebook size={20} /></a>
                                <a href="#"><Instagram size={20} /></a>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h3 className="heading-md" style={{ marginBottom: '30px' }}>Send a Message</h3>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Company Name (Optional)" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" defaultValue="">
                                        <option value="" disabled>Project Type</option>
                                        <option value="building">Building Construction</option>
                                        <option value="civil">Civil Engineering</option>
                                        <option value="consultancy">Consultancy</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Project Details" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map (Optional Placeholder) */}
            <section>
                <div style={{ width: '100%', height: '400px', backgroundColor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}><i className="fas fa-map"></i> Google Map Integration Area</p>
                </div>
            </section>
        </>
    );
};

export default Contact;
