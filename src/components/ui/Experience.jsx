'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const experiences = [
    {
        year: "2023-24",
        title: "Conference & Presentation",
        subtitle: "27th ISP Convention Jamia Hamdard",
        desc: "Presented Review Based Poster on [Chronological review on plants used for the treatment of Acne Vulgaris] at an international level conference.",
        img: "/jamia-hamdard.webp",
        imgPosition: "100% 80%",
        align: "left"
    },
    {
        year: "2024",
        title: "Intern, Narayana Health",
        subtitle: "27th June - 27th July 2024",
        desc: "Processed and dispensed medications, transferred prescriptions, and maintained pharmacy stock. Communicated with patients to enhance customer satisfaction and collaborated with healthcare professionals. Educated and advised patients on nonprescription medication use.",
        img: "/narayana-health.webp",
        imgPosition: "100% 20%",
        align: "right"
    }
];

const Experience = () => {
    return (
        <section id="experiences" className="experience-section">
            <div className="container">
                <div className="section-title text-center mb-10">
                    <div className="title-icon mx-auto">Career</div>
                    <div className="about-heading">Work Experience</div>
                </div>

                <div className="experience-container">
                    {experiences.map((item, index) => {
                        const isLeft = item.align === "left";
                        return (
                            <motion.div
                                key={index}
                                className={`exp-card ${isLeft ? 'exp-card-left' : 'exp-card-right'}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <div className="exp-image-wrapper">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={600}
                                        height={500}
                                        className="exp-image"
                                        style={{ objectPosition: item.imgPosition || 'center' }}
                                    />
                                    <div className="exp-year-badge">{item.year}</div>
                                </div>

                                <div className="exp-content">
                                    <h3 className="exp-title">{item.title}</h3>
                                    <h4 className="exp-subtitle">{item.subtitle}</h4>
                                    <p className="exp-desc">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
