import Link from "next/link";
import Image from "next/image";

import Style from "@/app/keepsafe/keepsafe.module.css";

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image
                    src='/zag.svg'
                    alt='Vercel Logo'
                    width={60}
                    height={60}
                    priority
                />
                <h2 className={Style.H2}>STAY TOGETHER</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p>More copy to continue here...</p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/flow-01'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/flow-02'>
                    {/* NOT LINKED YET */}
                    NEXT
                </Link>
            </div>
        </>
    );
}
