import React from 'react';

const Story = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="display-6 fw-bold mb-3">Every Person Has a Story</h2>
            <p className="lead text-muted mb-4 size-reduce">
              In the midst of the crisis, every individual has a story to tell—a story of loss, resilience, and unwavering hope for a better life. Your donation and support can help turn their dreams of safety, peace, and a brighter future into a reality.
            </p>
            <a href="#donate" className="btn btn-primary btn-lg d-inline-flex align-items-center rounded-4">
              <span className="material-symbols-outlined me-2">favorite</span>
              Help These People
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;