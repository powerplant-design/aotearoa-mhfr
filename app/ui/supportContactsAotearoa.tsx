import Link from "next/link";

const supportContacts = [
    {
        id: 1,
        name: "1737: tahi whitu toru whitu",
        text: "Talk with a trained counsellor 24/7.",
        phoneButton: "CALL 1737",
        phone: "+1737",
        href: "https://1737.org.nz/",
    },
    {
        id: 2,
        name: "TAUTOKO",
        text: "24/7 free-to-call suicide crisis helpline.",
        phoneButton: "0508 TAUTOKO",
        phone: "+0508 828 865",
        href: "https://www.healthpoint.co.nz/mental-health-addictions/mental-health-addictions/0508-tautoko/",
    },
    {
        id: 3,
        name: "Depression Helpline",
        text: "24/7 Depression Helpline. Talk to a trained counsellor about how you are feeling.",
        phoneButton: "0800 111 757",
        phone: "+0800 111 757",
        href: "https://www.healthpoint.co.nz/mental-health-addictions/mental-health-addictions/depression-helpline/",
    },
    {
        id: 4,
        name: "Lifeline",
        text: "Our compassionate team is available to offer support, and provide a safe space for you whenever you need it.",
        phoneButton: "0800 LIFELINE",
        phone: "+0800 543 354",
        href: "https://www.lifeline.org.nz/",
    },
    {
        id: 5,
        name: "Youthline",
        text: "Free txt: 234, email talk@youthline.co.nz or:",
        phoneButton: "0800 376 633",
        phone: "+0800 376 633",
        href: "https://youthline.co.nz/",
    },
    {
        id: 6,
        name: "Gumboot Friday",
        text: "Need help? We've got you. Free counselling for anyone 25 and under.",
        phoneButton: "NO NUMBER",
        phone: "",
        href: "https://www.gumbootfriday.org.nz/",
    },
    {
        id: 7,
        name: "Healthline",
        text: "24 hours a day, 7 days a week over-the-phone health service you can call for free health advice, information and treatment from professional healthcare providers.",
        phoneButton: "0800 611 116",
        phone: "+0800 611 116",
        href: "https://info.health.nz/services-support/health-and-disability-providers/healthline/",
    },
];

export default function SupportContacts() {
    return (
        <div className='supportWrapper'>
            {supportContacts.map((support) => {
                return (
                    <div key={support.id} className='supportContact'>
                        <h3 className='H3'>{support.name}</h3>
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
