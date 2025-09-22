import React, { useState, useEffect } from 'react'
import TopLayout from './TopLayout'

const Thanks = () => {
  const [donationAmount, setDonationAmount] = useState('');

  useEffect(() => {
    // Retrieve donation data from local storage
    const savedData = localStorage.getItem('donationData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setDonationAmount(parsedData.amount);
    }

    // Optional: You might want to clear the donation data now
    // localStorage.removeItem('donationData');
  }, []);

  return (
    <div className="your-information-page">
      <TopLayout activeSection="thank-you" />
      <div className="container" style={{ textAlign: 'center', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: '700' }}>
          Thank you for your donation of ${donationAmount || '...'}!
        </h1>
        <p className="lead text-muted mt-3">Your support makes a huge difference to the starving kids, widowed wives and everyone affected in Gaza. We will send you an email showing how much your little donation has helped in making the refugees' lives better.</p>
      </div>
    </div>
  )
}

export default Thanks
