"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import NavLinks from "@/app/ui/nav-links";

import styles from "@/app/ui/nav-header.module.css";
import clsx from "clsx";

import hamburger from "@/public/nav-hamburg.svg";
import close from "@/public/nav-close.svg";

const links = [
    { name: "Home", href: "/" },
    { name: "Keepsafe Flow", href: "/keepsafe" },
    { name: "CONVOS", href: "/convos" },
    { name: "Support Services", href: "/support" },
    { name: "Guiding Lights", href: "/guiding-lights" },
];

export default function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <button onClick={handleClick}>
                {isOpen ? (
                    <Image src={close} alt='Menu' />
                ) : (
                    <Image src={hamburger} alt='Menu' />
                )}
            </button>

            <h1>{pathname}</h1>

            <div
                className={clsx([styles.navDrawer], {
                    [styles.navOpen]: isOpen,
                })}
            >
                <>
                    {links.map((link) => {
                        // const LinkIcon = link.icon;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx([styles.navLink], {
                                    [styles.navLinkFocused]:
                                        pathname === link.href,
                                })}
                                // HOW TO CHANGE STATE OF NAV-HEADER ON CLICK?
                                onClick={handleClick}
                            >
                                {/* <LinkIcon className='w-6' /> */}
                                <p className=''>{link.name}</p>
                            </Link>
                        );
                    })}
                </>
            </div>
        </nav>
    );
}
