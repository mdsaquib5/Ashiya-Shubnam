'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaMicrophoneAlt, FaLeaf, FaMicroscope, FaAward } from 'react-icons/fa';

const accomplishments = [
    {
        year: "2022",
        title: "SPER Golden Jubilee Volunteer",
        desc: "Participated in the National Conference on Sustainable Development and MSME Empowerment under AICTE UDYAM initiative.",
        icon: <FaAward />,
    },
    {
        year: "2023",
        title: "Voice of Impact Challenge",
        desc: "Secured certificate for impactful 60-second speech on mental health. Recognized by Epoch Foundation.",
        icon: <FaMicrophoneAlt />,
    },
    {
        year: "2023",
        title: "Tide Turner Plastic Challenge",
        desc: "Participated in India's national awareness drive promoting climate action and health.",
        icon: <FaLeaf />,
    },
    {
        year: "2024",
        title: "First Poetry Book Published",
        desc: "Published 'Daastan-e-Mohabbat', beautifully exploring themes of love, pain, and emotional reflection.",
        icon: <FaBook />,
    },
    {
        year: "2025",
        title: "SPARC-IIT Ropar-Emory Atlanta",
        desc: "Presented a poster on innate and adaptive immunity at an international research workshop.",
        icon: <FaMicroscope />,
    }
];

const Accomplishments = () => {
    return (
        <section id="journey" className="timeline-section">
            <div className="container">
                <div className="section-title text-center mb-10">
                    <div className="title-icon mx-auto">Journey</div>
                    <div className="about-heading">My Accomplishments</div>
                </div>

                <div className="timeline-container">
                    <motion.div
                        className="timeline-line"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    ></motion.div>

                    {accomplishments.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`timeline-row ${isEven ? 'timeline-row-left' : 'timeline-row-right'}`}>

                                <motion.div
                                    className="timeline-card"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="timeline-date">{item.year}</div>
                                    <div className="timeline-title">{item.title}</div>
                                    <p>{item.desc}</p>
                                </motion.div>

                                <motion.div
                                    className="timeline-dot"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                >
                                    {item.icon}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Accomplishments;
