import { useEffect } from 'react';

/*
 * Motion for the Services photo cards.
 * - Reveal: each card rises in as it scrolls into view (staggered by column).
 * - Tilt: on mouse/pen devices the card leans toward the pointer and a soft
 *   light follows it.
 * - Parallax: the photo drifts inside its frame as the card moves through the
 *   screen (this is what gives phones movement while scrolling).
 * Everything is skipped when the visitor asks for reduced motion.
 */
export default function useCardMotion(gridRef) {
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return undefined;
        const cards = Array.from(grid.querySelectorAll('.service-card--photo'));
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduce || !('IntersectionObserver' in window)) {
            cards.forEach((c) => c.classList.add('is-visible'));
            return undefined;
        }

        grid.classList.add('motion-ready');

        // Stagger by position in the row, so each row cascades left to right
        const setDelays = () => {
            const firstTop = cards[0]?.offsetTop ?? 0;
            const perRow = cards.filter((c) => c.offsetTop === firstTop).length || 1;
            cards.forEach((c, i) => c.style.setProperty('--reveal-delay', `${(i % perRow) * 120}ms`));
        };
        setDelays();

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
        cards.forEach((c) => io.observe(c));

        // Scroll-linked photo parallax
        let frame = 0;
        const updateParallax = () => {
            frame = 0;
            const vh = window.innerHeight;
            cards.forEach((c) => {
                const r = c.getBoundingClientRect();
                if (r.bottom < 0 || r.top > vh) return;
                // -1 when the card enters at the bottom, 1 when it leaves at the top
                const p = 1 - ((r.top + r.height / 2) / (vh + r.height)) * 2;
                c.style.setProperty('--parallax', Math.max(-1, Math.min(1, p)).toFixed(3));
            });
        };
        const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateParallax); };
        updateParallax();
        window.addEventListener('scroll', onScroll, { passive: true });
        const onResize = () => { setDelays(); onScroll(); };
        window.addEventListener('resize', onResize);

        // Pointer tilt (mouse and pen only, never touch)
        const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        const cleanups = [];
        if (finePointer) {
            cards.forEach((c) => {
                let raf = 0;
                const move = (e) => {
                    const r = c.getBoundingClientRect();
                    const x = (e.clientX - r.left) / r.width;
                    const y = (e.clientY - r.top) / r.height;
                    cancelAnimationFrame(raf);
                    raf = requestAnimationFrame(() => {
                        c.style.setProperty('--rx', `${((0.5 - y) * 7).toFixed(2)}deg`);
                        c.style.setProperty('--ry', `${((x - 0.5) * 9).toFixed(2)}deg`);
                        c.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`);
                        c.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`);
                    });
                };
                const enter = () => c.classList.add('is-tilting');
                const leave = () => {
                    cancelAnimationFrame(raf);
                    c.classList.remove('is-tilting');
                    c.style.setProperty('--rx', '0deg');
                    c.style.setProperty('--ry', '0deg');
                };
                c.addEventListener('pointerenter', enter);
                c.addEventListener('pointermove', move);
                c.addEventListener('pointerleave', leave);
                cleanups.push(() => {
                    c.removeEventListener('pointerenter', enter);
                    c.removeEventListener('pointermove', move);
                    c.removeEventListener('pointerleave', leave);
                });
            });
        }

        return () => {
            io.disconnect();
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            cleanups.forEach((fn) => fn());
            grid.classList.remove('motion-ready');
        };
    }, [gridRef]);
}
