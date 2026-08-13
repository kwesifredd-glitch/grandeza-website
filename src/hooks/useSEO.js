import { useEffect } from 'react';

const SITE_URL = 'https://www.grandezaconstruction.com.gh';
const DEFAULT_IMAGE = `${SITE_URL}/images/Home-banner.jpg`;
const SITE_NAME = 'Grandeza Construction Limited';
const TWITTER_HANDLE = '@GrandezaGhana';

/**
 * useSEO — dynamically sets <title>, <meta> description, Open Graph,
 * and Twitter Card tags for each page.
 *
 * @param {Object} options
 * @param {string} options.title        - Page title (appended with site name)
 * @param {string} options.description  - Meta description (max ~160 chars)
 * @param {string} [options.canonicalPath] - Path segment e.g. '/about' (defaults to '/')
 * @param {string} [options.image]      - Absolute OG image URL
 * @param {string} [options.type]       - OG type (default 'website')
 * @param {string} [options.keywords]   - Comma-separated keywords
 */
const useSEO = ({
    title,
    description,
    canonicalPath = '/',
    image = DEFAULT_IMAGE,
    type = 'website',
    keywords = '',
}) => {
    useEffect(() => {
        // ── Title ───────────────────────────────────────────────────────────
        const fullTitle = `${title} | ${SITE_NAME}`;
        document.title = fullTitle;

        // ── Helper to upsert a <meta> tag ────────────────────────────────────
        const setMeta = (selector, attr, content) => {
            let el = document.querySelector(selector);
            if (!el) {
                el = document.createElement('meta');
                const [key, val] = attr.split('=');
                el.setAttribute(key, val.replace(/"/g, ''));
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        // ── Helper to upsert a <link> tag ────────────────────────────────────
        const setLink = (rel, href) => {
            let el = document.querySelector(`link[rel="${rel}"]`);
            if (!el) {
                el = document.createElement('link');
                el.setAttribute('rel', rel);
                document.head.appendChild(el);
            }
            el.setAttribute('href', href);
        };

        const canonical = `${SITE_URL}${canonicalPath}`;

        // ── Standard meta ────────────────────────────────────────────────────
        setMeta('meta[name="description"]', 'name=description', description);
        if (keywords) setMeta('meta[name="keywords"]', 'name=keywords', keywords);

        // ── Canonical ────────────────────────────────────────────────────────
        setLink('canonical', canonical);

        // ── Open Graph ───────────────────────────────────────────────────────
        setMeta('meta[property="og:title"]', 'property=og:title', fullTitle);
        setMeta('meta[property="og:description"]', 'property=og:description', description);
        setMeta('meta[property="og:url"]', 'property=og:url', canonical);
        setMeta('meta[property="og:image"]', 'property=og:image', image);
        setMeta('meta[property="og:type"]', 'property=og:type', type);
        setMeta('meta[property="og:site_name"]', 'property=og:site_name', SITE_NAME);

        // ── Twitter Card ─────────────────────────────────────────────────────
        setMeta('meta[name="twitter:card"]', 'name=twitter:card', 'summary_large_image');
        setMeta('meta[name="twitter:site"]', 'name=twitter:site', TWITTER_HANDLE);
        setMeta('meta[name="twitter:title"]', 'name=twitter:title', fullTitle);
        setMeta('meta[name="twitter:description"]', 'name=twitter:description', description);
        setMeta('meta[name="twitter:image"]', 'name=twitter:image', image);
    }, [title, description, canonicalPath, image, type, keywords]);
};

export default useSEO;
