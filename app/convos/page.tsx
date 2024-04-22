import Image from "next/image";
import IconPerson from "@/public/icon-person.svg";

export default function Page() {
    return (
        <>
            <div className='header'>
                <Image
                    src={IconPerson}
                    alt='Convos Icon'
                    width={60}
                    height={60}
                    priority
                />
                <h2 className='H2'>CONVOS</h2>
            </div>
            <div className='container'>
                <p>Copy to go here...</p>
            </div>
        </>
    );
}
