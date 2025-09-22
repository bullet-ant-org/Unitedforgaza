import React, { useState, useEffect, useRef } from 'react';

// --- Component Data ---
// Storing images in an array makes it easy to manage and map over.
const galleryImages = [
    { id: 1, src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2023-10/231026-gaza-children-hospital-jm-1022-4c3900.jpg', alt: 'Children playing amidst rubble' },
    { id: 2, src: 'https://static.ffx.io/images/$zoom_0.239%2C$multiply_0.5855%2C$ratio_1.776846%2C$width_1059%2C$x_76%2C$y_19/t_crop_custom/q_86%2Cf_auto/ca8f853e8149fb037b893625cac2a39afc44782d', alt: 'A family receiving aid' },
    { id: 3, src: 'https://ichef.bbci.co.uk/news/480/cpsprodpb/2eb7/live/a02a6500-5fce-11f0-8a86-378d494e3c54.jpg.webp', alt: 'Volunteers distributing food' },
    { id: 4, src: 'https://static.independent.co.uk/2024/05/22/08/Israel_Palestinians_63667.jpg', alt: 'A makeshift school for refugee children' },
    { id: 5, src: 'https://www.middleeasteye.net/sites/default/files/images-story/Palestinian%20children%20hold%20posters%20during%20a%20protest%20in%20solidarity%20with%20children%20in%20the%20Gaza%20Strip%2C%20in%20the%20city%20of%20Ramallah%20on%20November%2C4%2C%202023-afp.jpg', alt: 'Medical staff attending to a patient' },
    { id: 6, src: 'https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2023/06/1-2-scaled.jpg?ssl=1', alt: 'A child holding a sign' }
];

/**
 * A custom hook to detect when an element enters the viewport.
 * @param {Object} options - IntersectionObserver options.
 * @returns {[React.RefObject, boolean]} - A ref to attach to the element and a boolean indicating if it's in view.
 */
const useInView = (options) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // When the element is intersecting, we set the state and stop observing.
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            // Clean up the observer on component unmount.
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]); // Only re-run if ref or options change

    return [ref, isInView];
};

/**
 * A component that wraps each image and handles its own animation state.
 * It uses the useInView hook to trigger the animation.
 */
const AnimatedImage = ({ src, alt }) => {
    // threshold: 0.1 means animation triggers when 10% of the item is visible.
    const [ref, inView] = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            // The 'gallery-item' class handles the initial hidden state and transition.
            // The 'is-visible' class is added when the item is in view, triggering the animation.
            className={`gallery-item ${inView ? 'is-visible' : ''}`}
        >
            <img src={src} alt={alt} className="img-fluid rounded-4 shadow" />
        </div>
    );
};

const Gallery = () => {
  return (
    <section className="container py-5" id="gallery">
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold mb-3"><span className="material-symbols-outlined text-orange font-jay">
camera
</span> Faces of Hope</h2>
                <p className="lead text-muted mb-5">
                    
                    Meet the children, families and refugees whose lives are being transformed by your support. Each photo tells a story of resilience, hope, and the impact of your support and Generosity.
                </p>
            </div>
        </div>

        <div className="row g-4">
            {galleryImages.map((image) => (
                // Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop
                <div key={image.id} className="col-12 col-md-6 col-lg-4">
                    <AnimatedImage src={image.src} alt={image.alt} className="image-size"/>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Gallery;
