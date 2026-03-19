import AntigravityShapes from '../components/AntigravityShapes';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Community', 'Government', 'Residential', 'Commercial', 'Civil', 'Healthcare'];

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <>
            {/* Page Header */}
            <section className="hero hero-page" style={{
                background: 'linear-gradient(rgba(19, 36, 66, 0.85), rgba(19, 36, 66, 0.85)), url(/images/Home-banner.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <AntigravityShapes />
                <div className="container text-center">
                    <div className="hero-content" style={{ margin: '0 auto' }}>
                        <h1 className="heading-xl">Our <span style={{ color: 'var(--primary-color)' }}>Projects</span></h1>
                        <p className="text-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            Explore our portfolio of completed construction projects across Ghana
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section-padding">
                <div className="container">
                    {/* Filter Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '15px',
                        marginBottom: '60px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                style={{
                                    padding: '14px 32px',
                                    border: '2px solid',
                                    borderColor: filter === category ? 'var(--primary-color)' : 'var(--border-color)',
                                    backgroundColor: filter === category ? 'var(--primary-color)' : 'transparent',
                                    color: filter === category ? 'var(--white)' : 'var(--text-color)',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    cursor: 'pointer',
                                    transition: 'var(--transition)',
                                    borderRadius: '0'
                                }}
                                onMouseEnter={(e) => {
                                    if (filter !== category) {
                                        e.target.style.borderColor = 'var(--primary-color)';
                                        e.target.style.color = 'var(--primary-color)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (filter !== category) {
                                        e.target.style.borderColor = 'var(--border-color)';
                                        e.target.style.color = 'var(--text-color)';
                                    }
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <Link
                                key={project.id}
                                to={`/projects/${project.id}`}
                                className="project-card"
                            >
                                <img src={project.mainImage} alt={project.title} />
                                <div className="project-overlay">
                                    <span className="project-cat">{project.category}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        fontSize: '0.938rem',
                                        marginTop: '10px',
                                        marginBottom: '15px'
                                    }}>
                                        {project.shortDescription}
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        gap: '20px',
                                        fontSize: '0.875rem',
                                        color: 'rgba(255,255,255,0.7)'
                                    }}>
                                        <div>📍 {project.location}</div>
                                        <div>📅 {project.year}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredProjects.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '60px 0' }}>
                            <h3 className="heading-md" style={{ color: 'var(--text-light)' }}>
                                No projects found in this category
                            </h3>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding" style={{
                backgroundColor: 'var(--primary-color)',
                color: 'var(--white)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="heading-lg" style={{ color: 'var(--white)', marginBottom: '25px' }}>
                            Ready to Start Your Project?
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '40px', color: 'rgba(255,255,255,0.95)' }}>
                            Join our list of satisfied clients and let us bring your construction vision to life.
                        </p>
                        <Link to="/contact" className="btn btn-outline" style={{
                            borderColor: 'var(--white)',
                            color: 'var(--white)',
                            padding: '18px 45px'
                        }}>
                            Get a Free Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
