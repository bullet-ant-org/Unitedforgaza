import React, { useRef, useEffect, useState } from 'react';

const impactData = [
  { icon: 'group', value: '25,000+', label: 'People Helped' },
  { icon: 'payments', value: '$1.2M+', label: 'Funds Raised' },
  { icon: 'public', value: '18,000+', label: 'Donors Worldwide' },
  { icon: 'verified', value: '100%', label: 'Transparency' },
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
        <p className="text-muted">{item.label}</p>
      </div>
    </div>
  );
};

const Impact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3 className="display-6 fw-bold mb-5">
              Our Impact Together
            </h3>
            <p>Thanks to your generous donations, we've made a huge difference in the lives of children, families, and refugees in Gaza.</p>
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
export default Impact;