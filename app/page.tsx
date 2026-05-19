import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

import localFont from "next/font/local";
import regions from "@/regions";
const myFont = localFont({ src: "../public/fonts/BrightfateRegular.otf" });

export default function Home() {
    const slug = headers().get("x-region");
    const heading = regions.find((r) => r.slug === slug)?.name ?? "Aotearoa";

    return (
        <div className='container centerer'>
            <h1
                className={myFont.className}
                style={{ textAlign: "center", margin: "0 auto" }}
            >
                {heading}
            </h1>
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
