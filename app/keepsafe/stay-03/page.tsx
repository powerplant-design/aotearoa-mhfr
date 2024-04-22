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
                    <p className='italic'>
                        Stay for as long as is neccesary until they are
                        connected with support services.
                    </p>
                    <p className='italic'>
                        If you need to leave, follow steps for handover.
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/stay-01'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/keepsafe/stay-04'>
                    NEXT
                </Link>
            </div>
        </>
    );
}
