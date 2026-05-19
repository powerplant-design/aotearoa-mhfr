import Link from "next/link";
import {
    aotearoaContacts,
    localContactsByRegion,
    type SupportContact,
} from "@/app/lib/support-contacts";

function ContactList({ contacts }: { contacts: SupportContact[] }) {
    return (
        <>
            {contacts.map((contact) => (
                <div key={contact.id} className='supportContact'>
                    <h3 className='H3'>{contact.name}</h3>
                    <p className='supportCopy'>{contact.text}</p>
                    <div className='supportButtons'>
                        <Link
                            className='Link'
                            href={contact.href}
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <button className='supportButton'>WEBSITE</button>
                        </Link>
                        {contact.phone && (
                            <Link
                                className='Link supportCall'
                                href={`tel:${contact.phone}`}
                            >
                                <button className='supportButton'>
                                    {contact.phoneButton}
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}

export default function SupportContacts({ region }: { region?: string | null }) {
    const local = region ? localContactsByRegion[region] : null;

    return (
        <div className='supportContainer'>
            {local && (
                <>
                    <h2>Local Support</h2>
                    {local.sections.map((section) => (
                        <div key={section.heading} className='supportWrapper'>
                            <h3 className='H3'>{section.heading}</h3>
                            <ContactList contacts={section.contacts} />
                        </div>
                    ))}
                </>
            )}
            <h2>Aotearoa Helplines</h2>
            <div className='supportWrapper'>
                <ContactList contacts={aotearoaContacts} />
            </div>
        </div>
    );
}
