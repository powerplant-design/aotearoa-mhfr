"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/app/ui/navHeader.module.css";
import clsx from "clsx";

import hamburger from "@/public/nav-hamburg.svg";
import close from "@/public/nav-close.svg";
import RegionSelector, { type RegionOption } from './RegionSelector';

const links = [
    { name: "Home", href: "/" },
    { name: "CONVOS", href: "/convos" },
    { name: "Keep Safe Steps", href: "/keepsafe" },
    { name: "Support Services", href: "/support" },
    { name: "Guiding Lights", href: "/guiding-lights" },
];

export default function HeaderNav({ region, regionName }: { region?: string | null; regionName?: string | null }) {
    const [isEntered, setIsEntered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<RegionOption | null>(
        region ? { value: region, label: regionName ?? region } : null
    );

    function handleRegionSelect(option: RegionOption) {
        setSelectedRegion(option);
        const host = window.location.host;
        const parts = host.split('.');
        let newHost: string;
        if (option.value === 'aotearoa') {
            newHost = parts.length === 1 ? host : parts.slice(1).join('.');
        } else if (parts.length === 1) {
            newHost = `${option.value}.${host}`;
        } else {
            parts[0] = option.value;
            newHost = parts.join('.');
        }
        window.location.href = `${window.location.protocol}//${newHost}`;
    }

    function handleClose() {
        setIsEntered(!isEntered);
    }

    function handleClick() {
        setIsOpen(!isOpen);
    }

    const pathname = usePathname();
    let title = "";
    if (pathname == "/") title = "MENTAL HEALTH FIRST RESPONSE";
    else if (pathname == "/convos") title = "CONVOS";
    else if (pathname.includes("/keepsafe")) title = "KEEP SAFE STEPS";
    else if (pathname.includes("/support")) title = "SUPPORT SERVICES";
    else if (pathname == "/guiding-lights") title = "GUIDING LIGHTS";

    return (
        <nav className={styles.nav}>
            <button onClick={handleClick}>
                {isOpen ? (
                    <Image src={close} alt='Menu Close' />
                ) : (
                    <Image src={hamburger} alt='Menu Open' />
                )}
            </button>

            <p className='font-bold tracking-wide'>{title}</p>

            <div
                className={clsx([styles.homeContentModal], {
                    [styles.homeContentModalClosed]: pathname != "/",
                    [styles.homeContentModalClosed]: isEntered,
                })}
            >
                <div className={styles.homeContentWrapper}>
                    <div className={styles.homeContent}>
                        <p>
                            This app is a tool for Mental Health First
                            Responders to use when supporting others.
                        </p>
                        <p>
                            If you are experiencing distress please check our
                            support services, or get in touch with a trusted
                            friend.
                        </p>
                        <RegionSelector value={selectedRegion} onChange={handleRegionSelect} />
                        <button
                            onClick={handleClose}
                            className='home-content-button'
                        >
                            ENTER {selectedRegion ? selectedRegion.label.toUpperCase() : regionName ? regionName.toUpperCase() : "AOTEAROA"} MHFR
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={clsx([styles.navDrawer], {
                    [styles.navOpen]: isOpen,
                })}
            >
                <>
                    {links.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx([styles.navLink], {
                                    [styles.navLinkFocused]:
                                        pathname === link.href,
                                })}
                                onClick={handleClick}
                            >
                                <p className=''>{link.name}</p>
                            </Link>
                        );
                    })}
                    <div style={{ marginTop: '1rem' }}>
                        <RegionSelector value={selectedRegion} onChange={handleRegionSelect} />
                    </div>
                    <Image
                        src='/logo-opotiki.png'
                        alt='Opotiki Logo'
                        className={clsx([styles.navImage], {
                            [styles.navImageHide]: !isOpen,
                        })}
                        width={600}
                        height={600}
                        priority
                    />
                </>
            </div>
        </nav>
    );
}
