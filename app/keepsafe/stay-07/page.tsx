import Link from "next/link";
import Image from "next/image";
import Icon from "@/public/zag.svg";

import Style from "@/app/keepsafe/keepsafe.module.css";

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image src={Icon} alt='Icon' />
                <h2 className={Style.H2}>Supporter Care</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p className='italic'>How are you feeling now?</p>
                    <p className='italic'>
                        These conversations can be tough and supporters need
                        support too.
                    </p>
                    <p className='italic'>
                        Who can you reach out to for support if you need?
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/keepsafe/stay-06'>
                    BACK
                </Link>
                <Link className={Style.Link} href='/support'>
                    SUPPORT
                </Link>
            </div>
        </>
    );
}
