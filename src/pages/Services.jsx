import AntigravityShapes from '../components/AntigravityShapes';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building2, Route, DraftingCompass, ClipboardList, HardHat, Handshake } from 'lucide-react';
import { useRef } from 'react';
import useSEO from '../hooks/useSEO';
import useCardMotion from '../hooks/useCardMotion';

const services = [
    {
        icon: Building2,
        title: 'Building Construction',
        text: 'High-quality residential and commercial buildings, built with attention to detail.',
        points: ['Residential and commercial buildings', 'Foundations through to finishing', 'Structural integrity and quality finishes'],
        image: '/images/services/building-construction.jpg',
        alt: 'A completed modern building by Grandeza Construction',
    },
    {
        icon: Route,
        title: 'Civil Engineering',
        text: 'Infrastructure and community projects engineered to last.',
        points: ['Roads and bridges', 'Drainage systems', 'Site works and community infrastructure'],
        image: '/images/services/civil-engineering.jpg',
        alt: 'Road paving and drainage works by Grandeza Construction',
    },
    {
        icon: DraftingCompass,
        title: 'Design & Planning',
        text: 'Architectural design and planning that turns your vision into actionable blueprints.',
        points: ['Architectural design', 'Project planning and blueprints', 'From inception to completion'],
        image: '/images/services/design-planning.jpg',
        alt: 'Architect working on building plans with a Grandeza hard hat',
    },
    {
        icon: ClipboardList,
        title: 'Project Management',
        text: 'Professional management that keeps your project on time and within budget.',
        points: ['On-time, on-budget delivery', 'Coordination of all resources', 'One team accountable from start to finish'],
        image: '/images/services/project-management.jpg',
        alt: 'Grandeza project manager checking progress on a construction site',
    },
    {
        icon: HardHat,
        title: 'Renovation & Restoration',
        text: 'New life for existing structures, with their character preserved.',
        points: ['Modern upgrades', 'Original character preserved', 'Structural stability assured'],
        image: '/images/services/renovation-restoration.jpg',
        alt: 'Grandeza team restoring the facade of a heritage building',
    },
    {
        icon: Handshake,
        title: 'Consultancy',
        text: 'Expert advice to help you make informed decisions before you build.',
        points: ['Construction feasibility', 'Cost estimation', 'Material selection'],
        image: '/images/services/consultancy.jpg',
        alt: 'Grandeza consultant advising a client',
    },
];

const Services = () => {
    const gridRef = useRef(null);
    useCardMotion(gridRef);
    useSEO({
        title: 'Our Services',
        description: 'Explore Grandeza Construction’s full range of services: building construction, civil engineering, project management, road works, and infrastructure development across Ghana.',
        canonicalPath: '/services',
        keywords: 'construction services Ghana, civil engineering services, building contractor, road construction Ghana, infrastructure services',
        image: 'https://www.grandezaconstr.com/images/grandeza-site-engineers.jpg',
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
                    <div className="services-grid services-grid--photo" ref={gridRef}>
                        {services.map((sv) => (
                            <article className="service-card service-card--photo" key={sv.title}>
                                <span className="service-glare" aria-hidden="true" />
                                <div className="service-media">
                                    <img src={sv.image} alt={sv.alt} loading="lazy" decoding="async" />
                                </div>
                                <div className="service-body">
                                    <div className="service-icon"><sv.icon size={28} strokeWidth={1.8} aria-hidden="true" /></div>
                                    <h3>{sv.title}</h3>
                                    <p>{sv.text}</p>
                                    <ul className="service-points">
                                        {sv.points.map((pt, i) => (
                                            <li key={pt} style={{ '--i': i }}><CheckCircle size={16} aria-hidden="true" />{pt}</li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="service-link">
                                        Get a quote <ArrowRight size={18} aria-hidden="true" />
                                    </Link>
                                </div>
                            </article>
                        ))}
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
