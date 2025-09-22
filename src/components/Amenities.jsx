
import React, { useRef, useEffect, useState } from 'react';

const impactData = [
    { icon: '🍲', label: 'Food', description: 'With your generous donations, we have been able to provide food and nourishment for as many people as we can find.' },
    { icon: '👕', label: 'Clothing', description: 'Your contributions allow us to distribute essential clothing, offering warmth and dignity to displaced individuals and families.' },
    { icon: '🏠', label: 'Shelter', description: 'Through your support, we establish and maintain temporary shelters, providing a safe haven for those who have lost their homes.' },
    { icon: '⚕️', label: 'Medical Aid', description: 'We are on the ground delivering crucial medical supplies and healthcare, ensuring that life-saving aid reaches those who need it most.' },
];

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
      if(ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options]);

  return [ref, isVisible];
};

const AnimatedCard = ({ item, index }) => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });
  const animationDelay = `${index * 200}ms`;

  return (
    <div
      ref={ref}
      className={`col-md-6 col-lg-3 mb-4 impact-card ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: animationDelay }}
    >
      <div className="card baba-wrapper text-center p-4">
        <div className="icon-wrapper mb-3">
          <span className="material-symbols-outlined font-jay">{item.icon}</span>
        </div>
        <h3 className="display-6 fw-bold">{item.value}</h3>
        <h3 className="text-black fw-bold">{item.label}</h3>
        <p className="text-muted">{item.description}</p>
      </div>
    </div>
  );
};

const Amenities = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3 className="display-6 fw-bold mb-5">
              How your Donation helps
            </h3>
            <p>Every coin, Every dollar works together towards making the lives of families, refugees and children better in Gaza</p>
          </div>
        </div>

        <div className="row">
          {impactData.map((item, index) => (
            <AnimatedCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Amenities;