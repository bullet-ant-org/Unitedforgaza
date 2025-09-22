import React from 'react';
import { Link } from 'react-router-dom';

const TopLayout = ({ activeSection }) => {
    const sectionIdentifiers = [
        { number: 1, text: 'Your information', id: 'information' },
        { number: 2, text: 'Payment Details', id: 'payment' },
        { number: 3, text: 'Thank you', id: 'thank-you' },
    ];

    return (
        <div>
            <nav className="top-navbar">
                <Link to="/" className="back-to-home text-orange">
                    <span className="material-symbols-outlined">arrow_back</span> Back to Home
                </Link>
            </nav>

            <div className="content-container">
                <div className="content">
                    <h2>Make Your Donation</h2>
                    <p>Your generosity helps provide emergency relief, medical care, shelter and support for children, families and refugees in Gaza.</p>

                    <div className="section-identifiers">
                        {sectionIdentifiers.map(section => (
                            <div key={section.id} className="section-identifier">
                                <div className={`section-info ${activeSection === section.id ? 'active' : ''}`}>
                                    <span
                                        className="section-number">
                                        {section.number}
                                    </span>
                                    <span className="section-text">{section.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopLayout;
