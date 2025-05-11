"use client";
import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";
import { useParams } from "next/navigation";
const myFont = localFont({ src: "../public/fonts/BrightfateRegular.otf" });

export default function Home() {
    const params = useParams();
    const region = params.subdomain;
    return (
        <div className='container centerer'>
            {/* <h1 className={`${myFont.className}`}>{region}</h1> */}
            <h1 className={`${myFont.className}`}>Aotearoa</h1>
            <Image
                src='/logo-opotiki.png'
                alt='Opotiki Logo'
                width={340}
                height={340}
                priority
            />
            <div className='navFooter'>
                <Link className='Link' href='/support'>
                    SUPPORT SERVICES
                </Link>
            </div>
        </div>
    );
}
