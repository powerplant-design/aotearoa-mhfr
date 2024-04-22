import Image from "next/image";
import IconSun from "@/public/icon-sun.svg";

export default function Page() {
    return (
        <>
            <div className='header'>
                <Image
                    src={IconSun}
                    alt='Convos Icon'
                    width={60}
                    height={60}
                    priority
                />
                <h2 className='H2'>Support Services</h2>
            </div>
            <div className='container'>
                <p>Copy to go here...</p>
            </div>
        </>
    );
}
