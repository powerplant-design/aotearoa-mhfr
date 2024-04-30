import Link from "next/link";
import Image from "next/image";
import Icon02 from "@/public/icon-02.svg";

import Style from "@/app/keepsafe/keepsafe.module.css";

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image src={Icon02} alt='Icon' />
                <h2 className={Style.H2}>Call Support</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p className='italic'>
                        Contact support options with the consent of the person
                        you are supporting.
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link
                    className={`${Style.Link} ${Style.linkWide}`}
                    href='/support/step'
                >
                    SUPPORT OPTIONS
                </Link>
                <Link className={Style.Link} href='/keepsafe/call-02'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/stay-01'>
                    CONTACTED
                </Link>
            </div>
        </>
    );
}
