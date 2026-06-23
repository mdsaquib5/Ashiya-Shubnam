"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
    "Pharmacist",
    "Aspiring Researcher",
    "Writer",
    "Indian Poet",
    "Public Speaker"
];

const Hero = () => {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);


    useEffect(() => {
        if (isDeleting && subIndex === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        if (!isDeleting && subIndex === roles[index].length) {
            const timeout = setTimeout(() => setIsDeleting(true), 1500);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, index, roles]);

    return (
        <div className="hero-bg">
            <div className="container">
                <div className="hero-main">
                    <div className="hero-content">
                        <div className="hero-heading">Hey, I'm <span>Ashiya Shabnam</span></div>
                        <div className="profile">I am a <span className="highlight-text">{roles[index].substring(0, subIndex)}<span className="typing-cursor"></span></span></div>
                        <p>Pharmacy, Research, Poetry & Public Speaking With Elegance</p>
                        <Link href="#about" className="btn primary-btn">About me</Link>
                    </div>
                    <div className="hero-img">
                        <Image src="/profile-image.webp" alt="hero-img" width={640} height={949} priority />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero;