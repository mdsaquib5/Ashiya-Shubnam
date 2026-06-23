"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxInstagramLogo } from "react-icons/rx";
import Logo from "../shared/Logo";

const Footer = () => {
    const pathname = usePathname();

    if (pathname && pathname.startsWith('/admin')) {
        return null;
    }
    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <Logo />
                    <div className="social-media">
                        <Link href={'https://www.instagram.com/ashiya.shabnam/'} target="_blank"><RxInstagramLogo /></Link>
                    </div>
                </div>
                <div className="chat" id="anim">
                    <span>H</span>
                    <span>e</span>
                    <span>a</span>
                    <span>l</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                    <span>&nbsp;</span>
                    <span>W</span>
                    <span>o</span>
                    <span>r</span>
                    <span>d</span>
                    <span>s</span>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2026 Ashiya Shabnam. All rights reserved.</p>
                    <div className="footer-link">
                        Developed by:
                        <Link href={'https://noohark.com'} target="_blank">NoohArk.com</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;