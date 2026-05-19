import Link from "next/link";
import SupportContacts from "@/app/ui/supportContacts";

export default function Page({
    searchParams,
}: {
    searchParams: { from?: string };
}) {
    const fromSteps = searchParams.from === 'steps';

    return (
        <>
            <div className={fromSteps ? 'container' : 'container noMarginBottom'}>
                <SupportContacts />
            </div>
            {fromSteps && (
                <div className='navFooter navFooterFixed'>
                    <Link className='Link' href='/keepsafe/call-03'>
                        RETURN TO KEEP SAFE STEPS
                    </Link>
                </div>
            )}
        </>
    );
}
