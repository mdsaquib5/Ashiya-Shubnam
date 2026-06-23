import About from "@/components/ui/About";
import Accomplishments from "@/components/ui/Accomplishments";
import Experience from "@/components/ui/Experience";
import Book from "@/components/ui/Book";
import Contact from "@/components/ui/Contact";
import Hero from "@/components/ui/Hero";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Accomplishments />
            <Experience />
            <Contact />
            <Book />
        </>
    );
}