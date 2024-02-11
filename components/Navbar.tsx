import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="flexBetween max-container px-5 relative z-30 bg-[#F7F7F7]  ">
            <Link href="/">
                <Image src="/logo.jpg" alt="logo" width={110} height={29} />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.key}
                        className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden gap-4">
                <Button
                    type="button"
                    title="Login"
                    variant="btn_transparent_blue"
                />
                <Button type="button" title="Sign Up" variant="btn_dark_blue" />
            </div>
            <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    );
};

export default Navbar;
