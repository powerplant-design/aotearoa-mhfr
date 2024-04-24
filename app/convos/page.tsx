import Image from "next/image";
import Link from "next/link";
// import IconPerson from "@/public/icon-person.svg";

const convos = [
    {
        heading: "Check",
        subheading: "for risk of harm",
        tereo: "Rongo Tātaihono",
    },
    { heading: "Open", subheading: "to feelings", tereo: "Rongo Whakawhiti" },
    { heading: "Notice", subheading: "impact on life", tereo: "Rongo Orotau" },
    {
        heading: "Validate",
        subheading: "feelings and emotions",
        tereo: "Rongo Pūmau",
    },
    { heading: "Offer", subheading: "hope", tereo: "Rongo Tūmanako" },
    {
        heading: "Support",
        subheading: "options and actions",
        tereo: "Rongo Atawhai",
    },
];

export default function Page() {
    return (
        <>
            {/* <div className='header'>
                <Image
                    src={IconPerson}
                    alt='Convos Icon'
                    width={60}
                    height={60}
                    priority
                />
                <h2 className='H2'>CONVOS</h2>
            </div> */}
            <div className='container'>
                {convos.map((convo) => {
                    return (
                        <div className='convo' key={convo.heading}>
                            <h2>{convo.heading}</h2>
                            <h3>{convo.subheading}</h3>
                            <h4>{convo.tereo}</h4>
                        </div>
                    );
                })}
                <p className='supportText'>If you need additional support:</p>
            </div>
            <div className='navFooter'>
                <Link className='Link' href='/support'>
                    SUPPORT SERVICES
                </Link>
            </div>
        </>
    );
}
