import Image from "next/image";
import Link from "next/link";

import localFont from "next/font/local";
const myFont = localFont({ src: "../public/fonts/BrightfateRegular.otf" });

export default function Home() {
    return (
        <div className='container centerer'>
            <h1 className={`${myFont.className}`}>Ōpōtiki</h1>
            <Image
                src='/logo-opotiki.png'
                alt='Opotiki Logo'
                width={360}
                height={360}
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
