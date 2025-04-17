import Link from 'next/link';
import Image from 'next/image';
import Icon03 from '@/public/icon-03.svg';

import Style from '../keepsafe.module.css';

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image src={Icon03} alt="Icon" />
                <h2 className={Style.H2}>Stay Connected</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p className="italic">
                        Ensure supporter and supported person have all
                        information, there are backup supporters, and they know
                        when you will be back in touch.
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href="/keepsafe/stay-05">
                    BACK
                </Link>
                <Link className={Style.Link} href="/keepsafe/stay-07">
                    NEXT
                </Link>
            </div>
        </>
    );
}
