import Image from "next/image";
import { GiMortar, GiPill, GiHealthCapsule } from "react-icons/gi";

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-main blend-layout">
                    <div className="about-img-container">
                        <div className="floating-icon icon-1"><GiMortar /></div>
                        <div className="floating-icon icon-2"><GiPill /></div>
                        <div className="floating-icon icon-3"><GiHealthCapsule /></div>

                        <div className="about-img-masked">
                            <Image src="/about-us-image.webp" alt="Ashiya" width={540} height={960} priority />
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="section-title">
                            <div className="title-icon">About Me</div>
                            <div className="about-heading">A Pharmacist with a Poet's Heart</div>
                        </div>
                        <p>Hello! I'm <strong>Ashiya Shabnam</strong>, a young Indian poet and a pharmacy student currently pursuing my Bachelor of Pharmacy at Jamia Hamdard University, New Delhi. In November 2024, I published my first poetry book titled <em>“Daastan-e-Mohabbat”</em>, which beautifully explores themes of love, pain, and emotional reflection. The book has received a positive response for its heartfelt expression.</p>
                        <p>I am also active on social media platforms like Instagram and YouTube, where I share my poetry, personal thoughts, and travel vlogs. Recently, I completed a summer internship at <strong>Narayana Health</strong>, showing my commitment to both academics and creativity.</p>
                        <p>I represent today’s modern generation—a young woman balancing education and passion, using my voice to express feelings and connect with people through my art.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;