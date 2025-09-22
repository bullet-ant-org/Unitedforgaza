import React from 'react';
import { Link } from 'react-router-dom';

// Data for the founding members
const foundingCircle = [
  {
    imgSrc: 'https://www.sfcg.org/wp-content/uploads/2024/04/WhatsApp-Image-2024-03-28-at-12.19.30_7c5ac3d8-e1712074181398.jpg',
    name: 'Dr. Anya Sharma',
    title: 'Human Rights Lawyer',
    bio: 'An international law expert who has advocated for civilian rights in conflict zones for over two decades.'
  },
  {
    imgSrc: 'https://img.freepik.com/free-photo/high-angle-male-journalist_23-2148524068.jpg',
    name: 'Jamal El-Amin',
    title: 'Veteran Photojournalist',
    bio: 'A Pulitzer-nominated photographer whose work on the front lines has shaped global understanding of humanitarian crises.'
  },
  {
    imgSrc: 'https://www.fairobserver.com/wp-content/uploads/2018/11/Committee-to-Protect-Journalists-Journalist-Journalism-safety-newspaper-reporter.jpg',
    name: 'Isabelle Laurent',
    title: 'Documentary Filmmaker',
    bio: 'An award-winning director focused on telling the human stories behind the headlines, giving a voice to the voiceless.'
  },
   {
    imgSrc: 'https://www.nyfa.edu/wp-content/uploads/2022/11/lester-holt.png',
    name: 'Marcus Thorne',
    title: 'Emergency Physician',
    bio: 'A doctor with extensive experience providing critical medical care in disaster-stricken areas worldwide.'
  }
];

const AboutUs = () => {
  return (
    <div className="about-us-page bg-white">
      {/* Section 1: Hero */}
      <section className="about-hero text-center text-white d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="display-3 fw-bold">A Coalition of Conscience</h1>
          <p className="lead mt-3 mx-auto" style={{ maxWidth: '700px' }}>
            We are journalists, doctors, artists, and advocates bound by a single conviction: humanity must come first.
          </p>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="our-story-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" alt="Group planning" className="img-fluid rounded-4 shadow-lg" />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold display-6 mb-3">From Witness to Action</h2>
              <p className="text-muted fs-5">
                It began with a shared conviction. As professionals on the front lines of global events, we have dedicated our lives to bearing witness. Faced with the escalating humanitarian crisis in Gaza, we knew that witnessing was not enough. We had to act.
              </p>
              <p className="text-muted">
                United For Gaza was born not in a boardroom, but from late-night calls, shared grief, and a resolute belief in our common humanity. It is a promise to turn awareness into tangible aid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Guiding Principles */}
      <section className="principles-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">Our Guiding Principles</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="principle-card text-center p-4">
                <span className="material-symbols-outlined icon-circle mb-3">visibility</span>
                <h4 className="fw-bold">Bearing Witness</h4>
                <p className="text-muted">We are committed to sharing the unfiltered stories of the people of Gaza, bringing truth to the forefront.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="principle-card text-center p-4">
                <span className="material-symbols-outlined icon-circle mb-3">verified_user</span>
                <h4 className="fw-bold">Unwavering Transparency</h4>
                <p className="text-muted">Every donation is tracked. 100% of your contribution goes directly to aid, with all administrative costs covered by the founders.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="principle-card text-center p-4">
                <span className="material-symbols-outlined icon-circle mb-3">rocket_launch</span>
                <h4 className="fw-bold">Direct & Swift Action</h4>
                <p className="text-muted">We bypass bureaucracy to deliver life-saving aid—food, water, medicine, and shelter—to those who need it most, immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Founding Circle */}
      <section className="founding-circle-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">The Founding Circle</h2>
            <p className="lead text-muted mt-3 mx-auto" style={{ maxWidth: '800px' }}>
              This initiative is guided by a collective of respected voices. We volunteer our time, platforms, and expertise to ensure this mission's integrity and impact.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {foundingCircle.map((person, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="founder-card text-center">
                  <img src={person.imgSrc} alt={person.name} className="founder-img rounded-circle mb-3" />
                  <h5 className="fw-bold mb-1">{person.name}</h5>
                  <p className="text-orange fw-semibold">{person.title}</p>
                  <p className="text-muted small">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Get Involved */}
      <section className="get-involved-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold display-6">Join a Movement of Hope</h2>
              <p className="text-muted fs-5">This is more than a charity; it's a collective action. Your contribution, no matter the size, is a powerful statement of solidarity and a direct lifeline to a child, a family, a community in need.</p>
              <div className="d-flex mt-4">
                <Link to="/donate/information" className="btn btn-primary btn-lg d-inline-flex align-items-center me-3">
                  <span className="material-symbols-outlined me-2">volunteer_activism</span>
                  Donate Now
                </Link>
                <Link to="#" className="btn btn-outline-secondary btn-lg d-inline-flex align-items-center">
                  <span className="material-symbols-outlined me-2">email</span>
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXwpS_Hlu18uLbOQ_6E74PEdn8bbOCkj0ScJ6N9q64DDRUJI_B4LmenzHSsyfbiBj4Xo&usqp=CAU" alt="Hands holding" className="img-fluid rounded-4 shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

