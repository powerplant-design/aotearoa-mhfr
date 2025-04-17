import Link from 'next/link';
import Image from 'next/image';
import Icon03 from '@/public/icon-03.svg';

import Style from '../keepsafe.module.css';

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image src={Icon03} alt="Icon" />
                <h2 className={Style.H2}>Stay Together</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p className="italic">
                        Stay for as long as is neccesary until they are
                        connected with support services.
                    </p>
                    <p className="italic">
                        If you need to leave, follow next steps to stay
                        connected.
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href="/keepsafe/stay-01">
                    BACK
                </Link>
                <Link className={Style.Link} href="/keepsafe/stay-04">
                    NEXT
                </Link>
            </div>
        </>
    );
}
