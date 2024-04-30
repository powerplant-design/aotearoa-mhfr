import Link from "next/link";
import SupportContacts from "@/app/ui/support-contacts";

export default function Page() {
    return (
        <>
            <div className='container'>
                <SupportContacts />
            </div>
            <div className='navFooter'>
                <Link className='Link' href='/keepsafe/call-03'>
                    RETURN TO KEEP SAFE STEPS
                </Link>
            </div>
        </>
    );
}
