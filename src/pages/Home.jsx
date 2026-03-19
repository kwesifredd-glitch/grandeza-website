import AntigravityShapes from '../components/AntigravityShapes';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/images/Home-banner.jpg',
        '/images/grandeza-site-engineers.jpg',
        '/images/grandeza-team-site.jpg',
        '/images/construction-worker-hardhat-blueprints-and-const-2021-12-09-12-50-53-utc.jpg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {/* Hero Section with Image Slider */}
            <section id="home" className="hero" style={{
                position: 'relative',
                height: '100vh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                transition: 'background-image 1s ease-in-out',
                background: `linear-gradient(rgba(19, 36, 66, 0.7), rgba(19, 36, 66, 0.7)), url(${slides[currentSlide]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <AntigravityShapes />
                <div className="container">
                    <div className="hero-content">
                        <span className="section-subtitle" style={{ color: 'var(--primary-color)' }}>BUILDING THE FUTURE</span>
                        <h1 className="heading-xl">
                            Building Visions,<br /> Creating Reality
                        </h1>
                        <p className="text-lead" style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.9)' }}>
                            Grandeza Construction delivers excellence in every project, from residential developments to major infrastructure. We build with precision, passion, and integrity.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                Get a Quote <ArrowRight size={20} />
                            </Link>
                            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px', borderColor: 'var(--white)', color: 'var(--white)' }}>
                                <Play size={20} fill="var(--white)" /> Watch Video
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider Indicators */}
                <div style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '10px',
                    zIndex: 10
                }}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            style={{
                                width: currentSlide === index ? '40px' : '12px',
                                height: '12px',
                                borderRadius: '6px',
                                backgroundColor: currentSlide === index ? 'var(--primary-color)' : 'rgba(255,255,255,0.4)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h2>15+</h2>
                            <p>Years Combined Experience</p>
                        </div>
                        <div className="stat-item">
                            <h2>120+</h2>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h2>98%</h2>
                            <p>Client Satisfaction</p>
                        </div>
                        <div className="stat-item">
                            <h2>50+</h2>
                            <p>Expert Team Members</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div>
                            <img
                                src="/images/grandeza-team-site.jpg"
                                alt="Construction Team at Work"
                                style={{ width: '100%', height: '550px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="about-text">
                            <span className="section-subtitle">WHO WE ARE</span>
                            <h2 className="heading-lg">Inspiring & Empowering Through Construction</h2>
                            <p>
                                Grandeza Construction Limited, incorporated in Ghana in 2023, is a premier building and civil engineering firm committed to excellence in every project we undertake.
                            </p>
                            <p>
                                Our mission extends beyond construction—we aim to inspire and empower people to foster national development through quality infrastructure and innovative solutions.
                            </p>
                            <div style={{ marginTop: '30px', marginBottom: '35px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '18px' }}>
                                    <CheckCircle size={24} color="var(--primary-color)" />
                                    <span style={{ fontSize: '1rem', fontWeight: 600 }}>Certified & Licensed Professionals</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '18px' }}>
                                    <CheckCircle size={24} color="var(--primary-color)" />
                                    <span style={{ fontSize: '1rem', fontWeight: 600 }}>Quality Assured Workmanship</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <CheckCircle size={24} color="var(--primary-color)" />
                                    <span style={{ fontSize: '1rem', fontWeight: 600 }}>On-Time Project Delivery</span>
                                </div>
                            </div>
                            <Link to="/about" className="btn btn-outline-dark">Learn More About Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">WHAT WE DO</span>
                        <h2 className="heading-lg">Comprehensive Construction Services</h2>
                        <p className="text-lead">We stay current with the latest applications and building technologies to deliver exceptional results</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <i className="fas fa-city service-icon"></i>
                            <h3>Building Construction</h3>
                            <p>High-quality residential, commercial, and industrial building construction with meticulous attention to detail and structural integrity.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-road service-icon"></i>
                            <h3>Civil Engineering</h3>
                            <p>Comprehensive infrastructure solutions including roads, bridges, drainage systems, and community development projects.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-tasks service-icon"></i>
                            <h3>Project Management</h3>
                            <p>End-to-end project coordination ensuring timely delivery, budget adherence, and quality standards from inception to completion.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-drafting-compass service-icon"></i>
                            <h3>Design & Planning</h3>
                            <p>Innovative architectural design and comprehensive planning services that transform your vision into reality.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-hard-hat service-icon"></i>
                            <h3>Renovation & Restoration</h3>
                            <p>Expert renovation services breathing new life into existing structures while preserving architectural integrity.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-handshake service-icon"></i>
                            <h3>Consultancy Services</h3>
                            <p>Professional construction consulting for feasibility studies, cost estimation, and technical advisory services.</p>
                        </div>
                    </div>
                    <div className="text-center" style={{ marginTop: '60px' }}>
                        <Link to="/services" className="btn btn-primary">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">OUR PROCESS</span>
                        <h2 className="heading-lg">Building Design & Construction — Step by Step</h2>
                        <p className="text-lead">A systematic approach ensuring quality and efficiency at every stage</p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="process-number">01</div>
                            <h3>Initial Consultation</h3>
                            <p>We meet to understand your vision, requirements, objectives, and budget parameters for the project.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">02</div>
                            <h3>Design & Planning</h3>
                            <p>Our architects and engineers create detailed blueprints, obtain permits, and develop comprehensive project plans.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">03</div>
                            <h3>Construction Phase</h3>
                            <p>Skilled craftsmen execute the build with precision, adhering to timelines, safety standards, and quality benchmarks.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-number">04</div>
                            <h3>Final Handover</h3>
                            <p>Thorough inspection, quality assurance, and delivery of your completed project ready for occupancy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Preview */}
            <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">OUR PORTFOLIO</span>
                        <h2 className="heading-lg">Featured Projects</h2>
                        <p className="text-lead">View our completed projects, then get in touch with us</p>
                    </div>
                    <div className="projects-grid">
                        {projectsData.slice(0, 3).map((project) => (
                            <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
                                <img src={project.mainImage} alt={project.title} />
                                <div className="project-overlay">
                                    <span className="project-cat">{project.category}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.938rem', marginTop: '10px' }}>{project.shortDescription}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '50px' }}>
                        <Link to="/projects" className="btn btn-outline-dark">View All Projects</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="heading-lg" style={{ color: 'var(--white)', marginBottom: '25px' }}>Ready to Start Your Construction Project?</h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '40px', color: 'rgba(255,255,255,0.95)' }}>
                            Let's discuss how we can bring your vision to life. Our team is ready to provide expert guidance and exceptional service.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>Get a Free Quote</Link>
                            <Link to="/services" className="btn" style={{ backgroundColor: 'var(--secondary-color)', color: 'var(--white)', borderColor: 'var(--secondary-color)' }}>Our Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
