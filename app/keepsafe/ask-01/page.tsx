import Link from 'next/link';
import Image from 'next/image';
import Icon01 from '@/public/icon-01.svg';

import Style from '../keepsafe.module.css';

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image src={Icon01} alt="Icon" />
                <h2 className={Style.H2}>Ask</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p>“Are you thinking about taking your life?”</p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href="/keepsafe">
                    BACK
                </Link>
                <Link className={Style.Link} href="/convos">
                    NO
                </Link>
                <Link className={Style.Link} href="/keepsafe/ask-02">
                    YES
                </Link>
            </div>
        </>
    );
}
