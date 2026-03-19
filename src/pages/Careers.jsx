import AntigravityShapes from '../components/AntigravityShapes';
import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <>
            {/* Page Header */}
            <section className="hero hero-page" style={{
                background: 'linear-gradient(rgba(19, 36, 66, 0.85), rgba(19, 36, 66, 0.85)), url(/images/grandeza-team-site.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <AntigravityShapes />
                <div className="container text-center">
                    <div className="hero-content" style={{ margin: '0 auto' }}>
                        <h1 className="heading-xl">Join Our <span style={{ color: 'var(--primary-color)' }}>Team</span></h1>
                        <p className="text-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>Build your career with Ghana's leading construction firm</p>
                    </div>
                </div>
            </section>

            {/* Intro & Benefits */}
            <section className="section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <span className="section-subtitle">WHY WORK WITH US</span>
                            <h2 className="heading-lg">Culture of Excellence</h2>
                            <p>
                                At Grandeza Construction, we believe our people are our greatest asset. We foster a culture of safety, innovation, and professional growth where every team member is valued.
                            </p>
                            <p>
                                Join a team that is passionate about building sustainable infrastructure that empowers communities. We offer competitive benefits, continuous training, and clear paths for career advancement.
                            </p>
                            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ padding: '20px', background: 'var(--light-gray)', border: '1px solid var(--border-color)' }}>
                                    <h4 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}><i className="fas fa-graduation-cap"></i> Training</h4>
                                    <p style={{ fontSize: '0.938rem', color: 'var(--text-light)', margin: 0 }}>Professional development programs</p>
                                </div>
                                <div style={{ padding: '20px', background: 'var(--light-gray)', border: '1px solid var(--border-color)' }}>
                                    <h4 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}><i className="fas fa-shield-alt"></i> Safety</h4>
                                    <p style={{ fontSize: '0.938rem', color: 'var(--text-light)', margin: 0 }}>Industry-leading safety standards</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="/images/grandeza-engineers-team.jpg" alt="Team Work" style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">OPPORTUNITIES</span>
                        <h2 className="heading-lg">Current Job Openings</h2>
                    </div>

                    <div style={{ marginTop: '50px', display: 'grid', gap: '25px' }}>
                        {/* Job 1 */}
                        <div style={{ background: 'white', padding: '40px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px', transition: 'var(--transition)' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderLeft = '5px solid var(--primary-color)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderLeft = '1px solid var(--border-color)'}>
                            <div>
                                <h3 style={{ fontSize: '1.625rem', marginBottom: '12px', fontWeight: 700 }}>Senior Civil Engineer</h3>
                                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '12px' }}>
                                    <span style={{ color: 'var(--text-light)', fontSize: '0.938rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-color)' }}></i> Accra, Ghana
                                    </span>
                                    <span style={{ color: 'var(--text-light)', fontSize: '0.938rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fas fa-clock" style={{ color: 'var(--primary-color)' }}></i> Full Time
                                    </span>
                                    <span style={{ color: 'var(--text-light)', fontSize: '0.938rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fas fa-dollar-sign" style={{ color: 'var(--primary-color)' }}></i> Competitive
                                    </span>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                        </div>

                        {/* Job 2 */}
                        <div style={{ background: 'white', padding: '40px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px', transition: 'var(--transition)' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderLeft = '5px solid var(--primary-color)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderLeft = '1px solid var(--border-color)'}>
                            <div>
                                <h3 style={{ fontSize: '1.625rem', marginBottom: '12px', fontWeight: 700 }}>Site Supervisor</h3>
                                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '12px' }}>
                                    <span style={{ color: 'var(--text-light)', fontSize: '0.938rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-color)' }}></i> Kumasi, Ghana
                                    </span>
                                    <span style={{ color: 'var(--text-light)', fontSize: '0.938rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fas fa-clock" style={{ color: 'var(--primary-color)' }}></i> Contract
                                    </span>
                                    <span style={{ color: 'var(--text-light)', fontSize: '0.938rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fas fa-dollar-sign" style={{ color: 'var(--primary-color)' }}></i> Competitive
                                    </span>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                        </div>

                        {/* Job 3 */}
                        <div style={{ background: 'white', padding: '40px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px', transition: 'var(--transition)' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderLeft = '5px solid var(--primary-color)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderLeft = '1px solid var(--border-color)'}>
                            <div>
                                <h3 style={{ fontSize: '1.625rem', marginBottom: '12px', fontWeight: 700 }}>Architectural Drafter</h3>
                                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '12px' }}>
                                    <span style={{ color: 'var(--text-light)', fontSize: '0.938rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-color)' }}></i> Accra, Ghana
                                    </span>
                                    <span style={{ color: 'var(--text-light)', fontSize: '0.938rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fas fa-clock" style={{ color: 'var(--primary-color)' }}></i> Full Time
                                    </span>
                                    <span style={{ color: 'var(--text-light)', fontSize: '0.938rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fas fa-dollar-sign" style={{ color: 'var(--primary-color)' }}></i> Competitive
                                    </span>
                                </div>
                            </div>
                            <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Careers;
