import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopLayout from './TopLayout';


// This data should ideally be in a shared file or fetched from an API.
const hardcodedPaymentMethods = [
    {
        id: 'btc_bep20',
        name: 'Bitcoin',
        network: 'Btc',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGIbDs9XnVLYl1uGN2BRE_Y24DF0JsUXgoA&s', // Placeholder image
        walletAddress: 'bc1q7q9qry8pjnhtymna2td62cxsxs97ydd9pwgj6y',
    },
    {
        id: 'eth_erc20',
        name: 'Ethereum',
        network: 'ETH',
        image: 'https://i.imgur.com/3a3d9D3.png', // Placeholder image
        walletAddress: '0x9a0F9CD08C0b8b28cE3B07b9D4c0dd6DB7AfB3c0',
    },
    {
        id: 'usdt_trc20',
        name: 'USDT',
        network: 'TRC20',
        image: 'https://i.imgur.com/D4CoW2b.png', // Placeholder image
        walletAddress: 'TKVgcqXtD4WATG6FQ4UkuRzBp7WQLPtQGh',
    },
    {
        id: 'sol',
        name: 'Solana',
        network: 'SOL',
        image: 'https://i.imgur.com/D4CoW2b.png', // Placeholder image
        walletAddress: '9GhJDSD7AdM74By6MebgQAp7jzZ4Spb6LRVBYGL1d6SJ',
    },
];

const PaymentDetailsPage = () => {
    const navigate = useNavigate();
    const [donationData, setDonationData] = useState(null);
    const [selectedMethod, setSelectedMethod] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem('donationData');
        if (!savedData) {
            // If no data, redirect back to the start of the flow
            navigate('/donate/information');
            return;
        }

        const parsedData = JSON.parse(savedData);
        setDonationData(parsedData);

        const method = hardcodedPaymentMethods.find(m => m.id === parsedData.paymentMethodId);
        if (method) {
            setSelectedMethod(method);
        } else {
            // Handle case where payment method is not found
            navigate('/donate/information');
        }
    }, [navigate]);

    const handleCompleteDonation = () => {
        const finalDonationData = {
            ...donationData,
            // No extra payment details to add for crypto
        };
        localStorage.setItem('donationData', JSON.stringify(finalDonationData));
        console.log('Donation Complete:', finalDonationData);
        navigate('/donate/thank-you'); // Navigate to the final step
    };

    if (!selectedMethod || !donationData) {
        return <div>Loading...</div>; // Or a proper loader component
    }

    return (
        <div className="your-information-page">
            <TopLayout activeSection="payment" />

            <div className="container donation-form-container">
                <div className="form-section-wrapper">
                    <div className="form-header">
                        <span className="material-symbols-outlined icon-lg">credit_card</span>
                        <h3>Payment Details</h3>
                    </div>

                    <div className="payment-details-subheader">
                        <h4>Complete your {selectedMethod.name} Donation</h4>
                        <p>You are making a one-time donation of <strong>${donationData.amount}</strong>.</p>
                    </div>

                    <div className="wallet-details-section">
                        <p>Please send your donation to the following address. Ensure you are sending from the <strong>{selectedMethod.network}</strong> network.</p>
                        <div className="wallet-address-box">
                            <div className="wallet-info">
                                <p><strong>{selectedMethod.name} ({selectedMethod.network}) Address:</strong></p>
                                <code>{selectedMethod.walletAddress}</code>
                            </div>
                            <button onClick={() => navigator.clipboard.writeText(selectedMethod.walletAddress)} className="copy-button">
                                <span className="material-symbols-outlined">content_copy</span> Copy
                            </button>
                        </div>
                        {/* Optional: Add a QR code here */}
                    </div>
                </div>

                <div className="donation-page-actions">
                    <button onClick={() => navigate('/donate/information')} className="back-button">
                        Back
                    </button>
                    <button onClick={handleCompleteDonation} className="continue-button">
                        Complete Donation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetailsPage;