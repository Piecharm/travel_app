import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="p-4 bg-gray-800 sm:p-6 dark:bg-[#F7F7F7]">
            <div className="max-w-screen-xl px-4  mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center ">
                    {FOOTER_LINKS.map((columns) => (
                        <FooterRow>
                            <div className="px-5 pt-2">
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {columns.links.map((link) => (
                                        <Link
                                            href="/"
                                            key={link}
                                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                                        >
                                            {link}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </FooterRow>
                    ))}
                </div>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <FooterRow>
                        <ul className="regular-14 flex gap-4 text-gray-30">
                            {SOCIALS.links.map((link) => (
                                <Link
                                    href="/"
                                    key={link}
                                    className="text-base leading-6 text-white hover:text-gray-900"
                                >
                                    <Image
                                        src={link}
                                        alt="logo"
                                        width={24}
                                        height={24}
                                        className="text-base leading-6 text-white hover:text-gray-900"
                                    />
                                </Link>
                            ))}
                        </ul>
                    </FooterRow>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-30">
                    © 2024 Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

type FooterRowProps = {
    children: React.ReactNode;
};

const FooterRow = ({ children }: FooterRowProps) => {
    return <div className="flex flex-wrap gap-5">{children}</div>;
};

export default Footer;
