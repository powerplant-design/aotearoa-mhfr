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
                    <p>
                        “Do you have a support option you would like me to call,
                        or shall we find one together?”
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/call-01'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/call-03'>
                    NEXT
                </Link>
            </div>
        </>
    );
}
