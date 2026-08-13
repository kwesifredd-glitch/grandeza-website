import AntigravityShapes from '../components/AntigravityShapes';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const Services = () => {
    useSEO({
        title: 'Our Services',
        description: 'Explore Grandeza Construction’s full range of services: building construction, civil engineering, project management, road works, and infrastructure development across Ghana.',
        canonicalPath: '/services',
        keywords: 'construction services Ghana, civil engineering services, building contractor, road construction Ghana, infrastructure services',
        image: 'https://www.grandezaconstruction.com.gh/images/grandeza-site-engineers.jpg',
    });

    return (
        <>
            {/* Page Header */}
            <section className="hero hero-page" style={{
                background: 'linear-gradient(rgba(19, 36, 66, 0.85), rgba(19, 36, 66, 0.85)), url(/images/grandeza-site-engineers.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <AntigravityShapes />
                <div className="container text-center">
                    <div className="hero-content" style={{ margin: '0 auto' }}>
                        <h1 className="heading-xl">Our <span style={{ color: 'var(--primary-color)' }}>Services</span></h1>
                        <p className="text-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>Comprehensive solutions for all your construction needs.</p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon"><i className="fas fa-city"></i></div>
                            <h3>Building Construction</h3>
                            <p>High-quality residential and commercial building construction with attention to detail. From foundations to finishing, we ensure structural integrity and aesthetic excellence.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><i className="fas fa-road"></i></div>
                            <h3>Civil Engineering</h3>
                            <p>Expert civil engineering solutions for infrastructure development and community projects, including roads, bridges, and drainage systems.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><i className="fas fa-drafting-compass"></i></div>
                            <h3>Design & Planning</h3>
                            <p>Comprehensive architectural design and project planning from inception to completion. We turn your vision into actionable blueprints.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><i className="fas fa-tasks"></i></div>
                            <h3>Project Management</h3>
                            <p>Professional management ensuring projects are delivered on time and within budget, coordinating all resources for maximum efficiency.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><i className="fas fa-hard-hat"></i></div>
                            <h3>Renovation & Restoration</h3>
                            <p>Breathing new life into existing structures with modern upgrades while preserving their original character and structural stability.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><i className="fas fa-handshake"></i></div>
                            <h3>Consultancy</h3>
                            <p>Expert advice on construction feasibility, cost estimation, and material selection to help you make informed decisions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding" style={{ backgroundColor: 'var(--primary-color)', textAlign: 'center', color: 'var(--white)' }}>
                <div className="container">
                    <h2 className="heading-lg" style={{ color: 'var(--white)' }}>Ready to Build Your Dream?</h2>
                    <p className="text-lead" style={{ color: 'var(--white)', marginBottom: '30px' }}>Let us help you bring your project to life with our expert services.</p>
                    <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'var(--white)', color: 'var(--primary-color)', background: 'var(--white)' }}>Get a Quote</Link>
                </div>
            </section>
        </>
    );
};

export default Services;
