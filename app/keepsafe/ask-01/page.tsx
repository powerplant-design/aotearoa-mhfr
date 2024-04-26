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
                    <p>“Are you thinking about taking your life?”</p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/convos'>
                    NO
                </Link>
                <Link className={Style.Link} href='/keepsafe/ask-02'>
                    YES
                </Link>
            </div>
        </>
    );
}
