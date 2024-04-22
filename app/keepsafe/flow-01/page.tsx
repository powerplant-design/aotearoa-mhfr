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
                    <p>
                        It’s ok that you’re feeling that way, and we need to
                        keep you safe.
                    </p>
                    <p>You are not alone.</p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/flow-02'>
                    NEXT
                </Link>
            </div>
        </>
    );
}
