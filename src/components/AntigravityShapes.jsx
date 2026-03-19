import { useEffect, useRef } from 'react';

const AntigravityShapes = () => {
    const sceneRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
                const yOffset = (window.innerHeight / 2 - e.clientY) / speed;
                // Use standard CSS transform
                shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="hero-shapes" id="scene" ref={sceneRef}>
            <div className="shape" style={{ width: '100px', height: '100px', top: '20%', left: '10%', animation: 'float 6s ease-in-out infinite' }}></div>
            <div className="shape outline" style={{ width: '150px', height: '150px', top: '60%', left: '80%', borderColor: 'var(--primary-color)', animation: 'float-reverse 8s ease-in-out infinite' }}></div>
            <div className="shape square" style={{ width: '50px', height: '50px', top: '80%', left: '20%', background: 'var(--white)', opacity: 0.1, animation: 'float 7s ease-in-out infinite' }}></div>
        </div>
    );
};

export default AntigravityShapes;
