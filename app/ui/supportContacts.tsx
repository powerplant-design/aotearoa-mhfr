import Link from "next/link";
import SupportContactsAotearoa from "@/app/ui/supportContactsAotearoa";
import SupportContactsWhakatane from "@/app/ui/supportContactsWhakatane";
import SupportContactsOpotiki from "@/app/ui/supportContactsOpotiki";

export default function SupportContacts() {
    return (
        <div className='supportContainer'>
            <h2>National Helplines</h2>
            <SupportContactsAotearoa />
            <h2>Local Support</h2>
            <SupportContactsWhakatane />
            <SupportContactsOpotiki />
        </div>
    );
}
