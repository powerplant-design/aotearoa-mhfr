import Link from "next/link";
import Image from "next/image";
import Icon from "@/public/zag.svg";

import Style from "@/app/keepsafe/keepsafe.module.css";

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image src={Icon} alt='Icon' />
                <h2 className={Style.H2}>Call Support</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p>You won&apos;t always feel this way.</p>
                    <p>
                        Let&apos;s make sure you&apos;re not alone until we get
                        some support to help these feelings go away.
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/ask-03'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/call-02'>
                    NEXT
                </Link>
            </div>
        </>
    );
}
