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
                        I will need to go, who would you like to stay with you
                        while I&apos;m away?
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/stay-03'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/stay-05'>
                    NEXT
                </Link>
            </div>
        </>
    );
}
