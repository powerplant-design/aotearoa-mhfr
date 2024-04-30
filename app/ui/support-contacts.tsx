import Link from "next/link";

const supportContacts = [
    {
        id: 1,
        name: "Support Contact 1",
        text: "Example copy goes here",
        phone: "+64 123 456",
        href: "/support",
    },
    {
        id: 2,
        name: "Support Contact 2",
        text: "Example copy goes here",
        phone: "+64 123 456",
        href: "/support",
    },
    {
        id: 3,
        name: "Support Contact 3",
        text: "Example copy goes here",
        phone: "+64 123 456",
        href: "/support",
    },
];

export default function SupportContacts() {
    return (
        <div className='supportContainer'>
            {supportContacts.map((support) => {
                return (
                    <div key={support.id} className='supportContact'>
                        <h3 className='H3'>{support.name}</h3>
                        <p>{support.text}</p>
                        <div className='supportButtons'>
                            <Link className='Link' href={support.href}>
                                <button>VISIT SITE</button>
                            </Link>
                            <Link
                                className='Link supportCall'
                                href={`tel:${support.phone}`}
                            >
                                <button>CALL NOW</button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
