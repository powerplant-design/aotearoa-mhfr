import Link from "next/link";
import Image from "next/image";
import Icon from "@/public/zag.svg";

import Style from "@/app/keepsafe/keepsafe.module.css";

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image src={Icon} alt='Icon' />
                <h2 className={Style.H2}>Stay Together</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p>
                        We need to make sure you&apos;re not alone while feeling
                        this way—is it ok for me to stay with you?
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/call-03'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/stay-02'>
                    NO
                </Link>
                <Link className={Style.Link} href='/keepsafe/stay-03'>
                    YES
                </Link>
            </div>
        </>
    );
}
