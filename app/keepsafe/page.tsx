import Link from "next/link";
import Image from "next/image";
import Icon01 from "@/public/icon-01.svg";
import Icon02 from "@/public/icon-02.svg";
import Icon03 from "@/public/icon-03.svg";

import Style from "@/app/keepsafe/keepsafe.module.css";

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image src={Icon01} alt='Icon' />
                <h2 className={Style.H2}>Ask</h2>
            </div>
            <div className={Style.header}>
                <Image src={Icon02} alt='Icon' />
                <h2 className={Style.H2}>Call Support</h2>
            </div>
            <div className={Style.header}>
                <Image src={Icon03} alt='Icon' />
                <h2 className={Style.H2}>Stay Together</h2>
            </div>
            <div className={Style.containerFirst}>
                <div className={Style.body}>
                    <p>
                        Use these steps to help when someone is at risk of harm.
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/ask-01'>
                    GET STARTED
                </Link>
            </div>
        </>
    );
}
