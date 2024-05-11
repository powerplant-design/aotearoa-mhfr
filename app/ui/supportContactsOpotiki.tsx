import Link from "next/link";

const supportContacts = [
    {
        id: 1,
        name: "Te  Pou Oranga o Whakatōhea",
        text: "Kaupapa Māori Social & Health Services.",
        // phoneButton: "0800 774 545",
        // phone: "+0800 774 545",
        href: "https://www.whakatohea.co.nz/te-ratonga",
    },
    {
        id: 2,
        name: "Eastern Bay Iwi Provider Alliance",
        text: "Here you can be transferred to Tūhoe Hauora or Tūwharetoa ki Kawerau Hauora, to see professionals in specialised fields.",
        // phoneButton: "0800 486 947",
        // phone: "+0800 486 947",
        href: "http://www.tuwharetoa.org.nz/ebipa/",
    },
    {
        id: 3,
        name: "Whakaatu Whanaunga Trust",
        text: "Providing advocacy support.",
        // phoneButton: "0800 486 947",
        // phone: "+0800 486 947",
        href: "https://www.wwt.org.nz/",
    },
];

export default function SupportContactsOpotiki() {
    return (
        <div className='supportWrapper'>
            <h3 className='H3'>In Ōpōtiki</h3>
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
                            {/* <Link
                                className='Link supportCall'
                                href={`tel:${support.phone}`}
                            >
                                <button className='supportButton'>
                                    {support.phoneButton}
                                </button>
                            </Link> */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
