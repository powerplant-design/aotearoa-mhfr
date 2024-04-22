import Image from "next/image";

export default function Home() {
    return (
        <div className='container centerer'>
            <Image
                src='/opotiki-logo.svg'
                alt='Opotiki Logo'
                // className='dark:invert'
                width={420}
                height={420}
                priority
            />
        </div>
    );
}
