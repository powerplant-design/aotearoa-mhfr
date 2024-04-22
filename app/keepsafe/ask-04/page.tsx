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
                    <p>
                        Thank you for telling me because I&apos;m here to keep
                        us safe from those plans and steps.
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/ask-03'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/call-01'>
                    NEXT
                </Link>
            </div>
        </>
    );
}
