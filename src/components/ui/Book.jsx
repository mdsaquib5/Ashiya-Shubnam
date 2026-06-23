'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Book = () => {
    return (
        <section id="book" className="book-parallax-section">
            <div className="container">
                <motion.div
                    className="book-parallax-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >

                    <h2 className="book-parallax-title">Daastan-e-Mohabbat</h2>
                    <p className="book-parallax-text">
                        Immerse yourself in a journey of love, pain, and profound emotional reflection. 'Daastan-e-Mohabbat' is not just a collection of poems, but a mirror to the soul's deepest untold stories. Grab your copy and experience the magic of words.
                    </p>

                    <motion.a
                        href="https://www.amazon.in/Daastan-mohabbat-Ashiya-Shabnam-ebook/dp/B0DNFXTRKB"
                        target="_blank"
                        rel="noreferrer"
                        className="primary-btn btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Shop Now
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Book;
