import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const cursorDot = dotRef.current;
        const cursorOutline = outlineRef.current;

        const moveCursor = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (cursorDot) {
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
            }

            if (cursorOutline) {
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });
            }
        };

        window.addEventListener('mousemove', moveCursor);

        // Hover effects
        const handleMouseEnter = () => {
            if (cursorOutline) {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(220, 111, 61, 0.1)';
            }
        };

        const handleMouseLeave = () => {
            if (cursorOutline) {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
            }
        };

        const interactables = document.querySelectorAll('a, button, input, textarea');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []); // Fixed dependency array


    // Simplified:
    useEffect(() => {
        const handleMouseOver = (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('input')) {
                if (outlineRef.current) {
                    outlineRef.current.style.width = '60px';
                    outlineRef.current.style.height = '60px';
                    outlineRef.current.style.backgroundColor = 'rgba(220, 111, 61, 0.1)';
                }
            }
        };
        const handleMouseOut = (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('input')) {
                if (outlineRef.current) {
                    outlineRef.current.style.width = '40px';
                    outlineRef.current.style.height = '40px';
                    outlineRef.current.style.backgroundColor = 'transparent';
                }
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={dotRef}></div>
            <div className="cursor-outline" ref={outlineRef}></div>
        </>
    );
};

export default CustomCursor;
