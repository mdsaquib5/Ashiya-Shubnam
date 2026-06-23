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
        <section id="accomplishments" className="timeline-section">
            <div className="container">
                <div className="section-title text-center mb-10">
                    <div className="title-icon mx-auto">Journey</div>
                    <div className="about-heading">My Accomplishments</div>
                </div>

                <div className="accomplishments-list" style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto' }}>
                    {accomplishments.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="timeline-card"
                                style={{ width: '100%' }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <div className="timeline-date">{item.year}</div>
                                <div className="timeline-title">{item.title}</div>
                                <p>{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Accomplishments;
