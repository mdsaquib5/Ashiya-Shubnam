import Link from "next/link";
import { GiPill } from "react-icons/gi";

const Logo = () => {
    return (
        <div className="logo">
            <Link href="/">
                Ashiya <GiPill />.Shubnam
            </Link>
        </div>
    )
}

export default Logo;