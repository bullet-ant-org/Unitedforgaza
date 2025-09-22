import React, { useRef, useEffect, useState } from 'react';
import 'animate.css';

// --- Image Placeholders ---
// TODO: Replace these placeholder URLs with your actual, high-quality image assets.
const impactImages = {
    hero: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop', // A subtle, hopeful background
    emergency: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2070&auto=format&fit=crop', // People receiving aid
    foodWater: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop', // Hands holding food or water
    healthcare: 'https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=2070&auto=format&fit=crop', // Medical professional at work
    children: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop', // Children smiling or playing
};

// --- Data for Stats Section ---
const impactStats = [
    { value: '1.2M+', label: 'Meals Provided', icon: 'restaurant' },
    { value: '50K+', label: 'Medical Kits', icon: 'medical_services' },
    { value: '25K+', label: 'Families Sheltered', icon: 'roofing' },
    { value: '100K+', label: 'Liters of Clean Water', icon: 'water_drop' },
];

// --- Custom Hook for In-View Detection ---
const useInView = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};

// --- Reusable Animated Component ---
// This component applies animations from Animate.css when it scrolls into view.
const AnimatedElement = ({ children, animation, delay = '0s' }) => {
    const [ref, isVisible] = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={isVisible ? `animate__animated ${animation}` : 'opacity-0'}
            style={{ animationDelay: delay }}
        >
            {children}
        </div>
    );
};

// --- Main OurImpact Component ---
const OurImpact = () => {
    return (
        <div className="our-impact-page">
            {/* --- Hero Section --- */}
            <section className="impact-hero" style={{ backgroundImage: `url(${impactImages.hero})` }}>
                <div className="container text-center">
                    <AnimatedElement animation="animate__fadeInUp" delay="0.2s">
                        <h1 className="display-3 fw-bold">Our Collective Impact</h1>
                    </AnimatedElement>
                    <AnimatedElement animation="animate__fadeInUp" delay="0.4s">
                        <p className="lead mt-3 mx-auto" style={{ maxWidth: '800px' }}>
                            Every contribution, no matter the size, translates into direct, life-changing action. See the profound difference we're making together on the ground in Gaza.
                        </p>
                    </AnimatedElement>
                </div>
            </section>

            {/* --- Stats Section --- */}
            <section className="stats-section py-5">
                <div className="container">
                    <div className="row g-4 text-center">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <AnimatedElement animation="animate__fadeInUp" delay={`${index * 0.15}s`}>
                                    <div className="stat-card">
                                        <span className="material-symbols-outlined display-4 text-accent mb-3">{stat.icon}</span>
                                        <h2 className="display-5 fw-bold">{stat.value}</h2>
                                        <p className="text-muted fw-semibold mb-0">{stat.label}</p>
                                    </div>
                                </AnimatedElement>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Detailed Impact Sections --- */}
            {/* Section 1: Emergency Response */}
            <section className="impact-feature-section py-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <AnimatedElement animation="animate__fadeInLeft">
                                <img src={impactImages.emergency} alt="Emergency shelter tents" className="img-fluid rounded-4 shadow-lg" loading="lazy" />
                            </AnimatedElement>
                        </div>
                        <div className="col-lg-6">
                            <AnimatedElement animation="animate__fadeInRight">
                                <span className="text-accent fw-bold text-uppercase">Immediate Relief</span>
                                <h2 className="display-6 fw-bold mt-2 mb-3">Emergency Response & Shelter</h2>
                                <p className="fs-5">When disaster strikes, every second counts. Your contributions enable our rapid response teams to provide immediate, life-saving aid.</p>
                                <p className="text-muted">We establish secure shelters, offering a safe haven for families displaced by conflict. These temporary homes are more than just roofs over heads; they are spaces of safety and community where healing can begin.</p>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Food & Water */}
            <section className="impact-feature-section bg-light-gray py-5">
                <div className="container">
                    <div className="row align-items-center g-5 flex-lg-row-reverse">
                        <div className="col-lg-6">
                            <AnimatedElement animation="animate__fadeInRight">
                                <img src={impactImages.foodWater} alt="Access to clean water" className="img-fluid rounded-4 shadow-lg" loading="lazy" />
                            </AnimatedElement>
                        </div>
                        <div className="col-lg-6">
                            <AnimatedElement animation="animate__fadeInLeft">
                                <span className="text-accent fw-bold text-uppercase">Sustainable Support</span>
                                <h2 className="display-6 fw-bold mt-2 mb-3">Food Security & Clean Water</h2>
                                <p className="fs-5">Access to nutritious food and clean water is a fundamental human right. We work tirelessly to combat hunger and prevent waterborne diseases.</p>
                                <p className="text-muted">We distribute food parcels packed with essentials and invest in sustainable solutions like water purification systems, ensuring communities have a reliable source of sustenance.</p>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Healthcare */}
            <section className="impact-feature-section py-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <AnimatedElement animation="animate__fadeInLeft">
                                <img src={impactImages.healthcare} alt="Doctor with medical equipment" className="img-fluid rounded-4 shadow-lg" loading="lazy" />
                            </AnimatedElement>
                        </div>
                        <div className="col-lg-6">
                            <AnimatedElement animation="animate__fadeInRight">
                                <span className="text-accent fw-bold text-uppercase">Critical Care</span>
                                <h2 className="display-6 fw-bold mt-2 mb-3">Healthcare & Medical Aid</h2>
                                <p className="fs-5">In a crisis, healthcare is the bedrock of survival. Your support equips hospitals and mobile clinics with essential medicines, surgical supplies, and advanced medical equipment.</p>
                                <p className="text-muted">Our funded medical teams work around the clock, treating injuries and providing vital maternal and child healthcare. We are committed to saving lives and restoring health.</p>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Children */}
            <section className="impact-feature-section bg-light-gray py-5">
                <div className="container">
                    <div className="row align-items-center g-5 flex-lg-row-reverse">
                        <div className="col-lg-6">
                            <AnimatedElement animation="animate__fadeInRight">
                                <img src={impactImages.children} alt="Children playing safely" className="img-fluid rounded-4 shadow-lg" loading="lazy" />
                            </AnimatedElement>
                        </div>
                        <div className="col-lg-6">
                            <AnimatedElement animation="animate__fadeInLeft">
                                <span className="text-accent fw-bold text-uppercase">Protecting the Future</span>
                                <h2 className="display-6 fw-bold mt-2 mb-3">Safe Spaces for Children</h2>
                                <p className="fs-5">Children are the most vulnerable. We focus on creating child-friendly spaces where they can play, learn, and simply be children again, away from the trauma of their surroundings.</p>
                                <p className="text-muted">These centers provide psychological support, educational activities, and a sense of normalcy, helping to heal the next generation.</p>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="impact-cta-section py-5 text-center">
                <div className="container">
                    <AnimatedElement animation="animate__fadeInUp">
                        <h2 className="display-5 fw-bold">Be a Part of the Impact</h2>
                        <p className="lead my-4 mx-auto" style={{ maxWidth: '600px' }}>
                            Your contribution has the power to change lives. Join us in our mission to bring hope and relief to Gaza.
                        </p>
                        <a href="#donate" className="btn btn-primary btn-lg d-inline-flex align-items-center">
                            <span className="material-symbols-outlined me-2">volunteer_activism</span>
                            Donate Now & Make a Difference
                        </a>
                    </AnimatedElement>
                </div>
            </section>

        </div>
    );
};

export default OurImpact;
