import React, { useState, useEffect, useRef } from 'react';

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

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [formRef, isVisible] = useInView({ threshold: 0.2, triggerOnce: true });

    const handleSubmit = (e) => {
        e.preventDefault();
        // As requested, this just wipes the form fields without submitting data.
        console.log("Form 'sent'. Clearing fields.");
        setEmail('');
        setMessage('');
    };

    return (
        <section ref={formRef} className={`contact-section py-5 bg-light ${isVisible ? 'is-visible' : ''}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="display-5 fw-bold mb-3">Get in Touch</h2>
                        <p className="lead text-muted mb-5">
                            Have a question or want to share your story? We would love to hear from you.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-lg">
                            <div className="card-body p-4 p-md-5">
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailInput"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="emailInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <textarea
                                            className="form-control"
                                            placeholder="Leave a message here"
                                            id="messageTextarea"
                                            style={{ height: '150px' }}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                        <label htmlFor="messageTextarea">Your Message</label>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg d-inline-flex align-items-center justify-content-center" type="submit">
                                            <span className="material-symbols-outlined me-2">send</span>
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;