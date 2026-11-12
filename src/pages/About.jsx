import AntigravityShapes from '../components/AntigravityShapes';
import { Link } from 'react-router-dom';
import { Play, CheckCircle } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const About = () => {
    useSEO({
        title: 'About Us',
        description: 'Learn about Grandeza Construction Limited — our mission, vision, values, leadership team, and our decade of delivering quality construction and civil engineering projects across Ghana.',
        canonicalPath: '/about',
        keywords: 'about Grandeza Construction, construction company Ghana, civil engineering team, managing director Ghana',
        image: 'https://www.grandezaconstruction.com.gh/images/grandeza-about-hero.jpg',
    });

    return (
        <>
            {/* Page Header */}
            <section className="hero hero-page" style={{
                background: 'linear-gradient(rgba(19, 36, 66, 0.85), rgba(19, 36, 66, 0.85)), url(/images/grandeza-about-hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <AntigravityShapes />
                <div className="container text-center">
                    <div className="hero-content" style={{ margin: '0 auto' }}>
                        <h1 className="heading-xl">About Our <span style={{ color: 'var(--primary-color)' }}>Company</span></h1>
                        <p className="text-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>Building Trust, Delivering Excellence</p>
                    </div>
                </div>
            </section>

            {/* Main About Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="about-grid" style={{ alignItems: 'center' }}>
                        <div className="about-text">
                            <span className="section-subtitle">OUR STORY</span>
                            <h2 className="heading-lg">We understand the importance of innovation and professionalism</h2>
                            <p style={{ marginBottom: '20px' }}>
                                Since our launch in 2023, our vision and focus has been to deliver high-value projects for our clients with the emphasis on communication and attention to detail.
                            </p>
                            <p style={{ marginBottom: '20px' }}>
                                We began Grandeza Construction with one focus: to build a company that can compete with large construction firms while operating with the flexibility and customer-focus of a small, family-run business. We call it small business values with a big business approach.
                            </p>
                            <p style={{ marginBottom: '35px' }}>
                                Today, our business comes from a core group of satisfied clients: a testament to our commitment to building strong, long-term working relationships across Ghana.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <Link to="/services" className="btn btn-primary">Learn More</Link>
                                <button className="btn btn-outline-dark" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Play size={18} fill="var(--secondary-color)" />
                                    Watch Video
                                </button>
                            </div>
                        </div>
                        <div>
                            <img loading="lazy" decoding="async"
                                src="/images/high-angle-measuring-tools-desk-still-life.jpg"
                                alt="Construction Planning"
                                style={{ width: '100%', height: '550px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--secondary-color)', color: 'var(--white)' }}>
                <div className="container text-center">
                    <h2 className="heading-lg" style={{ color: 'var(--white)', marginBottom: '25px' }}>
                        Expertise, discipline and precision
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        maxWidth: '900px',
                        margin: '0 auto',
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.8
                    }}>
                        We are a General Contractor, Project Management, and Construction Consultancy company with a portfolio of projects across Ghana valued at various scales, delivering excellence from inception to completion.
                    </p>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">WHAT WE OFFER</span>
                        <h2 className="heading-lg">We stay current with the latest applications and building technologies</h2>
                        <p className="text-lead">
                            We build the finest homes and structures within our client's budgets and time frame without sacrificing quality and workmanship. We work with you on all of your sustainable building ideas and keep you up to date on the latest building practices and materials.
                        </p>
                    </div>

                    <div className="services-grid" style={{ marginTop: '60px' }}>
                        <div className="service-card">
                            <i className="fas fa-tasks service-icon"></i>
                            <h3>Construction Management</h3>
                            <p>This area delivers the control you want over all critical aspects of your project, ensuring quality, timeline, and budget adherence.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-user-tie service-icon"></i>
                            <h3>Owner's Representation</h3>
                            <p>A good owner's representative saves their client time, money and a lot of headaches throughout the construction process.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-hard-hat service-icon"></i>
                            <h3>General Contractor</h3>
                            <p>Clients hire Grandeza because we deliver great value, without question, maintaining the highest standards of craftsmanship.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-city service-icon"></i>
                            <h3>Building Construction</h3>
                            <p>Residential, commercial and industrial building projects executed with precision and attention to detail.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-road service-icon"></i>
                            <h3>Civil Engineering</h3>
                            <p>Infrastructure development including roads, bridges, and community projects that empower growth.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-leaf service-icon"></i>
                            <h3>Sustainable Solutions</h3>
                            <p>Green energy ideas and sustainable building practices for environmentally responsible construction.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--light-gray)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">OUR VALUES</span>
                        <h2 className="heading-lg">Why Choose Grandeza Construction</h2>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '40px',
                        marginTop: '60px'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'var(--primary-color)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                color: 'var(--white)',
                                fontSize: '2rem'
                            }}>
                                <i className="fas fa-certificate"></i>
                            </div>
                            <h3 className="heading-md">Quality Assurance</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                ISO 9001 certified with rigorous quality control processes ensuring excellence in every project.
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'var(--primary-color)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                color: 'var(--white)',
                                fontSize: '2rem'
                            }}>
                                <i className="fas fa-users"></i>
                            </div>
                            <h3 className="heading-md">Expert Team</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Highly skilled professionals with years of combined experience in construction and engineering.
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'var(--primary-color)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                color: 'var(--white)',
                                fontSize: '2rem'
                            }}>
                                <i className="fas fa-clock"></i>
                            </div>
                            <h3 className="heading-md">Timely Delivery</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Commitment to completing projects on schedule without compromising on quality or safety.
                            </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'var(--primary-color)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                color: 'var(--white)',
                                fontSize: '2rem'
                            }}>
                                <i className="fas fa-handshake"></i>
                            </div>
                            <h3 className="heading-md">Client Focused</h3>
                            <p style={{ color: 'var(--text-light)' }}>
                                Building lasting relationships through transparency, communication, and exceptional service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">OUR LEADERSHIP</span>
                        <h2 className="heading-lg">Meet The Team</h2>
                        <p className="text-lead">Experienced professionals dedicated to your project's success</p>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '50px',
                        marginTop: '60px'
                    }}>
                        <div className="text-center">
                            <img loading="lazy" decoding="async"
                                src="/images/dugbatey-hoese-teye.jpg"
                                alt="Dugbatey Hoese Teye - Managing Director"
                                style={{
                                    width: '240px',
                                    height: '240px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    marginBottom: '25px',
                                    margin: '0 auto 25px',
                                    border: '5px solid var(--primary-color)'
                                }}
                            />
                            <h3 className="heading-md" style={{ marginBottom: '8px' }}>Dugbatey Hoese Teye</h3>
                            <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '10px', fontSize: '1rem' }}>Managing Director</p>
                            <p style={{ fontSize: '0.938rem', color: 'var(--text-light)' }}>BSc Construction Project Management MCIOB</p>
                        </div>
                        <div className="text-center">
                            <img loading="lazy" decoding="async"
                                src="/images/ebenezer-m-akita.jpg"
                                alt="Ebenezer M. Akita - Director of Projects"
                                style={{
                                    width: '240px',
                                    height: '240px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    marginBottom: '25px',
                                    margin: '0 auto 25px',
                                    border: '5px solid var(--primary-color)'
                                }}
                            />
                            <h3 className="heading-md" style={{ marginBottom: '8px' }}>Ebenezer M. Akita</h3>
                            <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '10px', fontSize: '1rem' }}>Director of Projects / Quality Manager</p>
                            <p style={{ fontSize: '0.938rem', color: 'var(--text-light)' }}>BSc (Design) Dip. Arch AGIA</p>
                        </div>
                        <div className="text-center">
                            <img loading="lazy" decoding="async"
                                src="/images/effie-buraba-bonful.jpg"
                                alt="Effie Buraba Bonful - Director of Information Systems / Finance"
                                style={{
                                    width: '240px',
                                    height: '240px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    marginBottom: '25px',
                                    margin: '0 auto 25px',
                                    border: '5px solid var(--primary-color)'
                                }}
                            />
                            <h3 className="heading-md" style={{ marginBottom: '8px' }}>Effie Buraba Bonful</h3>
                            <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '10px', fontSize: '1rem' }}>Director of Information Systems / Finance</p>
                            <p style={{ fontSize: '0.938rem', color: 'var(--text-light)' }}>EMBA(Finance) BSc (Hons) Computer Science</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="heading-lg" style={{ color: 'var(--white)', marginBottom: '25px' }}>
                            Ready to Work With Us?
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '40px', color: 'rgba(255,255,255,0.95)' }}>
                            Let's discuss your construction project and how our experienced team can bring your vision to life.
                        </p>
                        <Link to="/contact" className="btn btn-outline" style={{
                            borderColor: 'var(--white)',
                            color: 'var(--white)',
                            padding: '18px 45px'
                        }}>
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
