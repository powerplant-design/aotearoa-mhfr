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
                    <p>“Thank you for telling me.”</p>
                    <p>
                        “I just need to ask a few more questions to help keep
                        you safe.”
                    </p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href="/keepsafe/ask-01">
                    BACK
                </Link>
                <Link className={Style.Link} href="/keepsafe/ask-03">
                    NEXT
                </Link>
            </div>
        </>
    );
}
