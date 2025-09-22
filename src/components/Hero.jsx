import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Component-level Constants ---
// Storing data in constants makes the component easier to read and update.
const STATS_DATA = [
    { id: 'stat-1', value: '15,000+', label: 'People Aided' },
    { id: 'stat-2', value: '$1.2M+', label: 'Received in Donations' }
];

const DONATION_AMOUNTS = ['50', '100', '250', '500', '1000', '5000'];

const Hero = () => {
  const navigate = useNavigate();

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle "Donate Now" button click
  const handleDonateClick = () => {
    scrollToSection('donate');
  };
    // Function to handle "Learn More" button click
    const handleLearnMoreClick = () => {
        scrollToSection('testimonials');
      };

  // States to track donation amount
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonateSubmit = () => {
    const amount = customAmount || selectedAmount;

    // Get existing data from localStorage or initialize an empty object
    const existingData = JSON.parse(localStorage.getItem('donationData')) || {};

    // Prepare new data, only adding amount if it's selected/entered
    const newData = {
        ...existingData,
        // Only add amount if it's a positive number string
        ...(amount && parseFloat(amount) > 0 && { amount: amount })
    };

    localStorage.setItem('donationData', JSON.stringify(newData));
    navigate('/donate/information');
  };

  return (
    <div className="container" id="home">
      <div className="row hero-section align-items-center">
          {/* Left Column: Information and CTA */}
          <div className="col-12 col-lg-6">

              {/* Emergency Relief Fund Pill */}
              <div className="d-inline-flex align-items-center border rounded-pill px-3 py-2 mb-2 bg-primary-1">
                  <span className="material-symbols-outlined me-2" style={{ color: 'black' }}>favorite</span>
                  <span>Emergency Relief Fund</span>
              </div>

              {/* Main Heading */}
              <h1 className='hero-title'>
                  Help <span className='text-gradient'>Children and Refugees</span> in Gaza
              </h1>

              {/* Description Paragraph */}
              <p className="lead my-4">
                  Your small donation can make a huge difference in the lives of children and refugees facing this crisis in Gaza. Contribute today to provide essential aid and hope.
              </p>

              {/* Stats Section: Now mapped from a constant for maintainability */}
              <div className="d-flex flex-wrap gap-4 my-4">
                
                  {STATS_DATA.map(stat => (
                      <div key={stat.id} className="d-flex align-items-center">
                          <div className="dot me-2"></div>
                          <span><strong>{stat.value}</strong> {stat.label}</span>
                      </div>
                  ))}
              </div>

              {/* Action Buttons */}

              <div className="d-flex flex-wrap gap-3 mt-5">
                  <button className="btn btn-primary btn-lg d-flex align-items-center" onClick={handleDonateClick}>
                      Donate Now <span className="material-symbols-outlined ms-2">arrow_forward</span>
                  </button>
                  <button className="btn btn-light btn-lg d-flex align-items-center border" onClick={handleLearnMoreClick}>
                      Learn More <span className="material-symbols-outlined ms-2">arrow_downward</span>
                  </button>                 
              </div>
          </div>

          {/* Right Column: Donation Form */}
          
          <section id="donate" className="col-12 col-lg-6 mt-5 mt-lg-0">
              <div className="card shadow-primary rounded-4 p-2 p-md-4">
                  <div className="card-body">
                      <h2 className='donation-title text-center'>Make a Difference Today</h2>
                      <p className='text-center text-muted'>Choose your donation amount</p>

                      
                      <p className='text-start fw-bold mb-2'>Select amount:</p>
                      <div className="row g-2 mb-3">
                          {DONATION_AMOUNTS.map(amount => {
                              const isActive = selectedAmount === amount;
                              return (
                                  <div key={amount} className="col-4">
                                      <button 
                                          className={`btn rounded-4 w-100 money ${isActive ? 'btn-primary-1' : 'btn-outline-primary'}`}
                                          onClick={() => {
                                            setSelectedAmount(amount);
                                            setCustomAmount('');
                                          }}
                                      >${amount}</button>
                                  </div>
                              )
                          })}
                      </div>

                      <div className='text-start mb-3'>
                          <label htmlFor="customAmount" className="form-label">Or enter your custom amount</label>
                          <input
                            type="number"
                            className="form-control rounded-4"
                            id="customAmount"
                            placeholder="$"
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value);
                              setSelectedAmount(null);
                            }} />
                      </div>

                      <div className="d-grid">
                          <button className="btn btn-primary btn-lg" onClick={handleDonateSubmit}>Donate Now</button>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    </div>

  )
}

export default Hero;