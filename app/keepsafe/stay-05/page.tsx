import Link from "next/link";
import Image from "next/image";
import Icon03 from "@/public/icon-03.svg";

import Style from "@/app/keepsafe/keepsafe.module.css";

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image src={Icon03} alt='Icon' />
                <h2 className={Style.H2}>Stay Connected</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p className='italic'>
                        Contact new supporter and stay with the person until
                        they are together.
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/stay-01'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/stay-06'>
                    NEXT
                </Link>
            </div>
        </>
    );
}
