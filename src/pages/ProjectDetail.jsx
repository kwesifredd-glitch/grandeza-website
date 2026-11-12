import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';
import { getProjectById } from '../data/projectsData';
import AntigravityShapes from '../components/AntigravityShapes';
import useSEO from '../hooks/useSEO';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = getProjectById(id);
    const [selectedImage, setSelectedImage] = useState(0);

    // Dynamic SEO per project
    useSEO({
        title: project ? project.title : 'Project',
        description: project
            ? `${project.title} — ${project.location}. ${project.description ? project.description.slice(0, 130) : 'A quality construction project by Grandeza Construction Limited in Ghana.'}`
            : 'Project details — Grandeza Construction Limited.',
        canonicalPath: `/projects/${id}`,
        image: project ? `https://www.grandezaconstruction.com.gh${project.mainImage}` : undefined,
        keywords: project ? `${project.title}, construction Ghana, ${project.category}, Grandeza project` : 'construction project Ghana',
    });

    if (!project) {
        return (
            <div style={{ padding: '200px 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="heading-lg">Project Not Found</h1>
                    <Link to="/projects" className="btn btn-primary" style={{ marginTop: '30px' }}>
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Page Header */}
            <section className="hero hero-page" style={{
                background: `linear-gradient(rgba(19, 36, 66, 0.85), rgba(19, 36, 66, 0.85)), url(${project.mainImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <AntigravityShapes />
                <div className="container">
                    <div className="hero-content" style={{ maxWidth: '900px' }}>
                        <button
                            onClick={() => navigate('/projects')}
                            className="btn btn-outline"
                            style={{
                                marginBottom: '30px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '12px 30px'
                            }}
                        >
                            <ArrowLeft size={20} />
                            Back to Projects
                        </button>
                        <span className="section-subtitle" style={{ color: 'var(--primary-color)' }}>
                            {project.category.toUpperCase()}
                        </span>
                        <h1 className="heading-xl" style={{ fontSize: '3.5rem' }}>{project.title}</h1>
                        <p className="text-lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
                            {project.shortDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Info Bar */}
            <section style={{
                backgroundColor: 'var(--primary-color)',
                padding: '40px 0',
                color: 'var(--white)'
            }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '40px',
                        textAlign: 'center'
                    }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                                <MapPin size={20} />
                                <strong style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</strong>
                            </div>
                            <p style={{ fontSize: '1.125rem', color: 'var(--secondary-color)', fontWeight: 600 }}>{project.location}</p>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Calendar size={20} />
                                <strong style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Year</strong>
                            </div>
                            <p style={{ fontSize: '1.125rem', color: 'var(--secondary-color)', fontWeight: 600 }}>{project.year}</p>
                        </div>

                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Clock size={20} />
                                <strong style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Duration</strong>
                            </div>
                            <p style={{ fontSize: '1.125rem', color: 'var(--secondary-color)', fontWeight: 600 }}>{project.duration}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '80px', alignItems: 'start' }}>
                        {/* Left Column - Description and Images */}
                        <div>
                            {/* Main Image Gallery */}
                            <div style={{ marginBottom: '60px' }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <img decoding="async" fetchPriority="high"
                                        src={project.gallery[selectedImage]}
                                        alt={`${project.title} - Image ${selectedImage + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '500px',
                                            objectFit: 'cover',
                                            border: '1px solid var(--border-color)'
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                                    {project.gallery.map((image, index) => (
                                        <img loading="lazy" decoding="async"
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            onClick={() => setSelectedImage(index)}
                                            style={{
                                                width: '100%',
                                                height: '150px',
                                                objectFit: 'cover',
                                                cursor: 'pointer',
                                                border: selectedImage === index ? '3px solid var(--primary-color)' : '1px solid var(--border-color)',
                                                transition: 'var(--transition)',
                                                opacity: selectedImage === index ? 1 : 0.7
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Project Description */}
                            <div style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ marginBottom: '25px' }}>Project Overview</h2>
                                {project.description.split('\n\n').map((paragraph, index) => (
                                    <p key={index} style={{
                                        marginBottom: '20px',
                                        color: 'var(--text-light)',
                                        lineHeight: 1.8,
                                        fontSize: '1rem'
                                    }}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Scope of Work */}
                            <div style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ marginBottom: '25px' }}>Scope of Work</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                    {project.scope.map((item, index) => (
                                        <div key={index} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '15px',
                                            padding: '15px',
                                            backgroundColor: 'var(--light-gray)',
                                            borderLeft: '3px solid var(--primary-color)'
                                        }}>
                                            <CheckCircle size={20} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <span style={{ fontSize: '0.938rem', color: 'var(--text-color)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Challenges & Solutions */}
                            <div style={{ marginBottom: '60px' }}>
                                <h2 className="heading-lg" style={{ marginBottom: '25px' }}>Challenges & Solutions</h2>
                                <div style={{
                                    padding: '30px',
                                    backgroundColor: 'var(--light-gray)',
                                    borderLeft: '4px solid var(--primary-color)'
                                }}>
                                    <p style={{
                                        color: 'var(--text-light)',
                                        lineHeight: 1.8,
                                        fontSize: '1rem'
                                    }}>
                                        {project.challenges}
                                    </p>
                                </div>
                            </div>

                            {/* Project Outcome */}
                            <div>
                                <h2 className="heading-lg" style={{ marginBottom: '25px' }}>Project Outcome</h2>
                                <div style={{
                                    padding: '30px',
                                    backgroundColor: 'rgba(226, 101, 57, 0.05)',
                                    border: '1px solid var(--primary-color)'
                                }}>
                                    <p style={{
                                        color: 'var(--text-color)',
                                        lineHeight: 1.8,
                                        fontSize: '1rem',
                                        fontWeight: 500
                                    }}>
                                        {project.outcome}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Project Details */}
                        <div style={{ position: 'sticky', top: '120px' }}>
                            <div style={{
                                backgroundColor: 'var(--secondary-color)',
                                color: 'var(--white)',
                                padding: '40px',
                                marginBottom: '30px'
                            }}>
                                <h3 className="heading-md" style={{
                                    color: 'var(--white)',
                                    marginBottom: '30px',
                                    fontSize: '1.5rem'
                                }}>
                                    Project Details
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                    <div>
                                        <p style={{
                                            fontSize: '0.875rem',
                                            color: 'var(--primary-color)',
                                            marginBottom: '8px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontWeight: 600
                                        }}>
                                            Client
                                        </p>
                                        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>{project.client}</p>
                                    </div>
                                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '25px' }}>
                                        <p style={{
                                            fontSize: '0.875rem',
                                            color: 'var(--primary-color)',
                                            marginBottom: '8px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontWeight: 600
                                        }}>
                                            Location
                                        </p>
                                        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>{project.location}</p>
                                    </div>
                                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '25px' }}>
                                        <p style={{
                                            fontSize: '0.875rem',
                                            color: 'var(--primary-color)',
                                            marginBottom: '8px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontWeight: 600
                                        }}>
                                            Category
                                        </p>
                                        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>{project.category}</p>
                                    </div>

                                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '25px' }}>
                                        <p style={{
                                            fontSize: '0.875rem',
                                            color: 'var(--primary-color)',
                                            marginBottom: '8px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontWeight: 600
                                        }}>
                                            Completion Year
                                        </p>
                                        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>{project.year}</p>
                                    </div>
                                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '25px' }}>
                                        <p style={{
                                            fontSize: '0.875rem',
                                            color: 'var(--primary-color)',
                                            marginBottom: '8px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            fontWeight: 600
                                        }}>
                                            Duration
                                        </p>
                                        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>{project.duration}</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div style={{
                                backgroundColor: 'var(--light-gray)',
                                padding: '40px',
                                textAlign: 'center'
                            }}>
                                <h4 className="heading-md" style={{ marginBottom: '20px' }}>
                                    Have a Similar Project?
                                </h4>
                                <p style={{
                                    color: 'var(--text-light)',
                                    marginBottom: '30px',
                                    fontSize: '0.938rem',
                                    lineHeight: 1.7
                                }}>
                                    Let's discuss how we can bring your vision to life with the same excellence.
                                </p>
                                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetail;
