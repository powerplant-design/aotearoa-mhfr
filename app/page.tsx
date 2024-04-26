import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import localFont from "next/font/local";
const myFont = localFont({ src: "../public/fonts/BrightfateRegular.otf" });

export default function Home() {
    return (
        <div className='container centerer'>
            <h1 className={`${myFont.className}`}>Ōpōtiki</h1>
            <Image
                src='/logo-opotiki.png'
                alt='Opotiki Logo'
                width={300}
                height={300}
                priority
            />
            <div className='home-content-modal'>
                <div className='home-content font-bold'>
                    <p>
                        This app is a tool for Mental Health First Responders to
                        use when supporting others.
                    </p>
                    <p>
                        If you are experiencing distress please check our
                        support services, or get in touch with a trusted friend.
                    </p>
                    {/* <button
                        onClick={handleclick}
                        className='home-content-button'
                    >
                        LET&apos;S DO THIS
                    </button> */}
                </div>
            </div>
            <div className='navFooter'>
                <Link className='Link' href='/support'>
                    SUPPORT SERVICES
                </Link>
            </div>
        </div>
    );
}
