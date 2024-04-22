"use client";

import Image from "next/image";
import { useState } from "react";
import NavLinks from "@/app/ui/nav-links";
import styles from "@/app/ui/nav-header.module.css";
import clsx from "clsx";

import hamburger from "@/public/nav-hamburg.svg";
import close from "@/public/nav-close.svg";

export default function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={styles.nav}>
            <button onClick={handleClick}>
                {isOpen ? (
                    <Image src={close} alt='Menu' />
                ) : (
                    <Image src={hamburger} alt='Menu' />
                )}
            </button>

            <h1>MENTAL HEALTH FIRST RESPONSE</h1>

            <div
                className={clsx([styles.navDrawer], {
                    [styles.navOpen]: isOpen,
                })}
            >
                <NavLinks />
            </div>
        </nav>
    );
}
