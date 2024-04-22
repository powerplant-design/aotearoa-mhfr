import Image from "next/image";
import Icon from "@/public/icon-light.svg";

export default function Page() {
    return (
        <>
            <div className='header'>
                <Image
                    src={Icon}
                    alt='Convos Icon'
                    width={60}
                    height={60}
                    priority
                />
                <h2 className='H2'>Guiding Lights</h2>
            </div>
            <div className='container'>
                <p>Copy to go here...</p>
            </div>
        </>
    );
}
