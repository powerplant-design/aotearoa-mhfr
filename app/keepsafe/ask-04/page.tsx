import Link from "next/link";
import Image from "next/image";
import Icon from "@/public/zag.svg";

import Style from "@/app/keepsafe/keepsafe.module.css";

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image src={Icon} alt='Icon' />
                <h2 className={Style.H2}>Ask</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p>“Have you taken any steps towards those plans?”</p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/ask-03'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/call-01'>
                    NO
                </Link>
                <Link className={Style.Link} href='/keepsafe/ask-05'>
                    YES
                </Link>
            </div>
        </>
    );
}
