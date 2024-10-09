import Link from "next/link";

const supportContacts = [
    {
        id: 1,
        name: "Adult Community Mental Health Service",
        text: "24/7 crisis team.",
        phoneButton: "0800 774 545",
        phone: "+0800 774 545",
        href: "https://www.healthpoint.co.nz/public/psychiatry/adult-community-mental-health-service-bay/",
    },
    {
        id: 2,
        name: "Voyagers",
        text: "Child, Adolescent and Maternal Mental Health.",
        phoneButton: "0800 486 947",
        phone: "+0800 486 947",
        href: "https://www.healthpoint.co.nz/public/psychiatry/maternal-infant-child-adolescent-mental-health/at/106-commerce-street-whakatane/",
    },
];

export default function SupportContactsWhakatane() {
    return (
        <div className='supportWrapper'>
            <h3 className='H3'>In Whakatāne</h3>
            {supportContacts.map((support) => {
                return (
                    <div key={support.id} className='supportContact'>
                        <h4 className='H3'>{support.name}</h4>
                        <p className='supportCopy'>{support.text}</p>
                        <div className='supportButtons'>
                            <Link
                                className='Link'
                                href={support.href}
                                target='_blank'
                            >
                                <button className='supportButton'>
                                    WEBSITE
                                </button>
                            </Link>
                            <Link
                                className='Link supportCall'
                                href={`tel:${support.phone}`}
                            >
                                <button className='supportButton'>
                                    {support.phoneButton}
                                </button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
