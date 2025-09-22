import React, { useState, useEffect, useRef } from 'react';


// Data for the testimonials section
const testimonialsData = [
  {
    imgSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    quote: 'The support we received was life-changing. We are immensely grateful for the hope and help provided during our darkest times.',
    name: 'Fatima Al-Masri',
    title: 'Gaza Resident & Mother'
  },
  {
    imgSrc: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    quote: 'As a volunteer, seeing the direct impact of these donations is overwhelming. Every contribution brings a smile and eases suffering.',
    name: 'Ahmed Khalil',
    title: 'Field Volunteer'
  },
  {
    imgSrc: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    quote: 'I never thought I would see my children get proper medical care. This organization is a lifeline for so many of us.',
    name: 'Aisha Yousef',
    title: 'Aid Recipient'
  },
  {
    imgSrc: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    quote: 'Donating from overseas, you hope your money makes a difference. Seeing these stories confirms that it truly does. Proud to be a supporter.',
    name: 'David Chen',
    title: 'International Donor - Canada'
  },
  {
    imgSrc: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    quote: 'The provision of clean water and food has been nothing short of a miracle for our community. Thank you for your tireless work.',
    name: 'Layla Ibrahim',
    title: 'Community Leader'
  },
  {
    imgSrc: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    quote: 'The transparency and dedication of this cause are why I continue to support it. You can see exactly where the help is going.',
    name: 'Maria Garcia',
    title: 'Monthly Supporter - Spain'
  }
];

const useInView = (options) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
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

    return [ref, isInView];
};

const Testimonials = () => {
  const [containerRef, isVisible] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="testimonials" ref={containerRef} className="py-5 testimonials-section">
      <div className="container">
        <div className="mgb-40 padb-30 auto-invert line-b-4 align-center text-center mb-5">
            <h4 className="text-orange fw-bold display-3 text-uppercase">Voices of Hope</h4>
            <h1 className="fw-bold display-5">Stories From Our Community</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={`col-12 col-md-6 col-lg-4 testimonial-item ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <p className="fst-italic text-muted">"{testimonial.quote}"</p>
                <h5 className="fw-bold mt-auto mb-1 pt-3">{testimonial.name}</h5>
                <small className="text-uppercase text-secondary">{testimonial.title}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
