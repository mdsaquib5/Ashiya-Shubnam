'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Contact = () => {
    return (
        <section id="consultation" className="contact-section">
            <div className="container">
                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="contact-image-wrapper">
                        <Image
                            src="/contact-bg.webp"
                            alt="Contact Ashiya"
                            width={562}
                            height={1000}
                            className="contact-image"
                        />
                    </div>

                    <div className="contact-form-container">
                        <h2 className="contact-title">Contact me</h2>
                        <p className="contact-subtitle">Questions, Thoughts, Or Just Want To Say Hello?</p>

                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="contact-input"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="contact-input"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Enter your subject"
                                className="contact-input"
                                required
                            />
                            <textarea
                                placeholder="Enter your message"
                                className="contact-input"
                                required
                            ></textarea>

                            <div className="mt-2">
                                <button type="submit" className="primary-btn btn">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
