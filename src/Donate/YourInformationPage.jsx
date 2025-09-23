import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopLayout from './TopLayout';


// Hardcoded data for demonstration purposes
// This data should ideally be in a shared file or fetched from an API.
const hardcodedPaymentMethods = [
    {
        id: 'btc_bep20',
        name: 'Bitcoin',
        network: 'Bitcoin',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRy3YcL3EkYKkbglqzbNNRkA6ntNtThDnsw&s', // Placeholder image
        walletAddress: '0x1234...abcd',
    },
    {
        id: 'eth_erc20',
        name: 'Ethereum',
        network: 'Ethereum',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7icQv25VPT1aeohcCXy9UUFYnsaZbNV-Bg&s', // Placeholder image
        walletAddress: '0x5678...efgh',
    },
    {
        id: 'usdt_trc20',
        name: 'USDT',
        network: 'TRC20',
        image: 'https://img.freepik.com/premium-psd/green-circle-with-large-t-it-that-is-labeled-t_767610-17.jpg?semt=ais_incoming&w=740&q=80', // Placeholder image
        walletAddress: 'TXYZ...1234',
    },
    {
        id: 'sol',
        name: 'Solana',
        network: 'SOL',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAktSqh4O6__chLyCQlfI05ZGyoUmBOVrSKA&s', // Placeholder image
        walletAddress: 'SoL...5678',
    },
];

const donationAmounts = [50, 100, 250, 500, 1000, 5000];

const YourInformationPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        amount: '',
        paymentMethodId: null,
    });

    const [isAnonymous, setIsAnonymous] = useState(false);

    // Load data from localStorage on component mount to pre-fill form
    useEffect(() => {
        const savedData = localStorage.getItem('donationData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAmountClick = (amount) => {
        setFormData(prev => ({ ...prev, amount: amount.toString() }));
    };

    const handlePaymentMethodSelect = (id) => {
        setFormData(prev => ({ ...prev, paymentMethodId: id }));
    };

    const handleAnonymousToggle = (e) => {
        const checked = e.target.checked;
        setIsAnonymous(checked);
        if (checked) {
            // Clear personal info if user wants to be anonymous
            setFormData(prev => ({
                ...prev,
                fullName: '',
                email: '',
                phoneNumber: ''
            }));
        }
    };

    const handleContinue = () => {
        if ((!isAnonymous && (!formData.fullName || !formData.email)) || !formData.amount || !formData.paymentMethodId) {
            alert('Please fill all required fields, and select a donation amount and payment method.');
            return;
        }
        localStorage.setItem('donationData', JSON.stringify(formData));
        navigate('/donate/payment'); // Navigate to the next step
    };

    return (
        <div className="your-information-page">
            {/* Component-specific styles for the anonymous toggle and disabled inputs */}
            <style>{`
                .anonymous-toggle label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    font-size: 0.95rem;
                    color: #555;
                }

                .anonymous-toggle input[type="checkbox"] {
                    margin-right: 10px;
                    width: 18px;
                    height: 18px;
                    cursor: pointer;
                }

                .form-grid input:disabled,
                .form-group input:disabled {
                    background-color: #f2f2f2;
                    cursor: not-allowed;
                    border-color: #e0e0e0;
                    color: #999;
                }
            `}</style>

            <TopLayout activeSection="information" />

            <div className="container donation-form-container">
                <div className="form-section-wrapper">
                    {/* User Information Section */}
                    <div className="form-header">
                        <span className="material-symbols-outlined icon-lg">person</span>
                        <h3>Your Information</h3>
                    </div>
                    <div className="form-group anonymous-toggle">
                        <label htmlFor="anonymousCheck">
                            <input
                                type="checkbox"
                                id="anonymousCheck"
                                checked={isAnonymous}
                                onChange={handleAnonymousToggle}
                            />
                            I'd like to stay anonymous
                        </label>
                    </div>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" disabled={isAnonymous} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" disabled={isAnonymous} />
                        </div>
                    </div><div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="(123) 456-7890" disabled={isAnonymous} />
                        </div>
                </div>

                <div className="form-section-wrapper">
                    {/* Donation Amount Section */}
                    <div className="form-header">
                        <span className="material-symbols-outlined icon-lg">volunteer_activism</span>
                        <h3>Donation Amount</h3>
                    </div>
                    <div className="amount-selection">
                        {donationAmounts.map(amount => (
                            <button
                                key={amount}
                                className={`amount-card ${formData.amount === amount.toString() ? 'selected' : ''}`}
                                onClick={() => handleAmountClick(amount)}
                            >
                                ${amount}
                            </button>
                        ))}
                    </div>
                    <div className="form-group custom-amount-group">
                        <label htmlFor="amount">Or enter a custom amount</label>
                        <div className="input-with-icon">
                            <span>$</span>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                </div>

                <div className="form-section-wrapper">
                    {/* Payment Method Section */}
                    <div className="form-header">
                        <span className="material-symbols-outlined icon-lg">credit_card</span>
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-method-selection">
                        {hardcodedPaymentMethods.map(method => (
                            <div
                                key={method.id}
                                className={`payment-method-card ${formData.paymentMethodId === method.id ? 'selected' : ''}`}
                                onClick={() => handlePaymentMethodSelect(method.id)}
                            >
                                <div className="payment-method-image">
                                    <img src={method.image} alt={method.name} />
                                </div>
                                <div className="payment-method-name">
                                    {method.name} ({method.network})
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleContinue} className="continue-button">
                    Continue to Payment Details
                </button>
            </div>
        </div>
    );
};

export default YourInformationPage;