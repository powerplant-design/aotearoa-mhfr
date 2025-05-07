import Link from "next/link";

const lights = [
    {
        heading: "No one chooses to be unwell",
        subheading: "Any of us could become lost in darkness",
    },
    {
        heading: "Support looks different for everyone",
        subheading: "All of our paths to lightness look different",
    },
    {
        heading: "Barriers to support can be overcome",
        subheading: "Sometimes our path is blocked, or pathways close",
    },
    {
        heading: "Recovery is possible",
        subheading: "There is always a path back to our lightness",
    },
    {
        heading: "Early support reduces recovery time",
        subheading:
            "The sooner we are on the path the easier we will find the light",
    },
    {
        heading: "Everyone can give and receive support",
        subheading: "We can help each other on our paths at the same time",
    },
];

export default function Page() {
    return (
        <>
            <div className='container'>
                {lights.map((light) => {
                    return (
                        <div className='light' key={light.heading}>
                            <h2>{light.heading}</h2>
                            {/* <h3>{light.subheading}</h3> */}
                        </div>
                    );
                })}
                <p className='supportText'>If you need additional support</p>
            </div>
            <div className='navFooter'>
                <Link className='Link' href='/support'>
                    SUPPORT SERVICES
                </Link>
            </div>
        </>
    );
}
