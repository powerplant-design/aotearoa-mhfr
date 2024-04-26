import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className='container centerer'>
            <h1>Ōpōtiki</h1>
            <Image
                src='/logo-opotiki.png'
                alt='Opotiki Logo'
                width={280}
                height={280}
                priority
            />
            <div className='home-content font-bold'>
                <p>
                    This app is a tool for Mental Health First Responders to use
                    when supporting others.
                </p>
                <p>
                    If you are experiencing distress please click below for a
                    list of support services, or get in touch with a trusted
                    friend.
                </p>
            </div>
            <div className='navFooter'>
                <Link className='Link' href='/support'>
                    SUPPORT SERVICES
                </Link>
            </div>
        </div>
    );
}
