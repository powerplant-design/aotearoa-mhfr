import Link from "next/link";
import SupportContacts from "@/app/ui/supportContacts";

export default function Page() {
    return (
        <>
            <div className='container'>
                <SupportContacts />
            </div>
            <div className='navFooter navFooterFixed'>
                <Link className='Link' href='/keepsafe/call-03'>
                    RETURN TO KEEP SAFE STEPS
                </Link>
            </div>
        </>
    );
}
