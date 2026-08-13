import AntigravityShapes from '../components/AntigravityShapes';
import useSEO from '../hooks/useSEO';

const Blog = () => {
    useSEO({
        title: 'Blog & News',
        description: 'Stay updated with the latest news, insights, and industry updates from Grandeza Construction Limited — Ghana’s leading construction and civil engineering firm.',
        canonicalPath: '/blog',
        keywords: 'construction news Ghana, civil engineering blog, Grandeza news, building industry Ghana',
        image: 'https://www.grandezaconstruction.com.gh/images/grandeza-site-engineers.jpg',
    });

    const posts = [
        {
            image: '/images/grandeza-site-engineers.jpg',
            date: 'Oct 24, 2025',
            title: 'Grandeza Breaks Ground on New Eco-Project',
            excerpt: 'We are proud to announce the commencement of the Green Valley Complex, a sustainable development initiative incorporating eco-friendly construction methods...'
        },
        {
            image: '/images/grandeza-team-site.jpg',
            date: 'Sep 15, 2025',
            title: 'Safety Milestone: 1 Million Man-Hours',
            excerpt: 'Our commitment to safety has resulted in a significant milestone. Celebrating 1 million safe man-hours without Lost Time Injury across all our sites...'
        },
        {
            image: '/images/grandeza-engineers-team.jpg',
            date: 'Aug 01, 2025',
            title: 'Innovations in Civil Engineering',
            excerpt: 'Exploring the latest technologies in road construction and how Grandeza is adopting them for better infrastructure development across Ghana...'
        },
        {
            image: '/images/construction-worker-hardhat-blueprints-and-const-2021-12-09-12-50-53-utc.jpg',
            date: 'Jul 12, 2025',
            title: 'Community Outreach Program',
            excerpt: 'Grandeza employees volunteered to help renovate a local school, giving back to the community we serve through skills transfer and mentorship...'
        },
        {
            image: '/images/Home-banner.jpg',
            date: 'Jun 20, 2025',
            title: 'Sustainable Building Practices',
            excerpt: 'How we are incorporating green building standards and sustainable materials in our construction projects to reduce environmental impact...'
        },
        {
            image: '/images/high-angle-measuring-tools-desk-still-life.jpg',
            date: 'May 05, 2025',
            title: 'Excellence in Project Management',
            excerpt: 'Behind the scenes look at our project management processes that ensure on-time delivery and client satisfaction across all our builds...'
        }
    ];

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
                        <h1 className="heading-xl">News & <span style={{ color: 'var(--primary-color)' }}>Insights</span></h1>
                        <p className="text-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>Company updates, industry trends, and thought leadership</p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '40px' }}>
                        {posts.map((post, index) => (
                            <div key={index} style={{ background: 'var(--white)', border: '1px solid var(--border-color)', overflow: 'hidden', transition: 'var(--transition)', cursor: 'pointer' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ height: '280px', overflow: 'hidden' }}>
                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }}
                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                                </div>
                                <div style={{ padding: '35px 30px' }}>
                                    <span style={{ color: 'var(--text-light)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px' }}>{post.date}</span>
                                    <h3 style={{ fontSize: '1.5rem', margin: '15px 0 18px', fontWeight: 700, color: 'var(--secondary-color)' }}>{post.title}</h3>
                                    <p style={{ color: 'var(--text-light)', marginBottom: '25px', lineHeight: 1.7 }}>{post.excerpt}</p>
                                    <a href="#" style={{ color: 'var(--primary-color)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
