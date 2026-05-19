export interface SupportContact {
    id: number;
    name: string;
    text: string;
    phoneButton?: string;
    phone?: string;
    href: string;
}

export interface RegionSupportSection {
    heading: string;
    contacts: SupportContact[];
}

export interface RegionSupportData {
    sections: RegionSupportSection[];
}

export const aotearoaContacts: SupportContact[] = [
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
        href: "https://www.healthpoint.co.nz/mental-health-addictions/mental-health/0508-tautoko/?region=im%3A7aa8eb2b-75a9-43a6-9286-d15674204a25&programmeArea=im%3A42a1e54a-a52d-4c63-b91a-18714aef1c38&programmeType=im%3Ac8df5627-a0c7-418f-941d-3ec23ea3ccf0",
    },
    {
        id: 3,
        name: "Depression Helpline",
        text: "24/7 Depression Helpline. Talk to a trained counsellor about how you are feeling.",
        phoneButton: "0800 111 757",
        phone: "+0800 111 757",
        href: "https://www.healthpoint.co.nz/mental-health-addictions/mental-health/depression-helpline/",
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

export const localContactsByRegion: Record<string, RegionSupportData> = {
    opotiki: {
        sections: [
            {
                heading: "In Ōpōtiki",
                contacts: [
                    {
                        id: 1,
                        name: "Te Pou Oranga o Whakatōhea",
                        text: "Kaupapa Māori Social & Health Services.",
                        href: "https://www.whakatohea.co.nz/te-pou-oranga-1",
                    },
                    {
                        id: 2,
                        name: "Eastern Bay Iwi Provider Alliance",
                        text: "Here you can be transferred to Tūhoe Hauora or Tūwharetoa ki Kawerau Hauora, to see professionals in specialised fields.",
                        href: "https://www.ebopiwipa.org.nz",
                    },
                    {
                        id: 3,
                        name: "Whakaatu Whanaunga Trust",
                        text: "Providing advocacy support.",
                        href: "https://www.wwt.org.nz/",
                    },
                ],
            },
            {
                heading: "In Whakatāne",
                contacts: [
                    {
                        id: 1,
                        name: "Adult Community Mental Health Service",
                        text: "24/7 crisis team.",
                        phoneButton: "0800 774 545",
                        phone: "+0800 774 545",
                        href: "https://www.healthpoint.co.nz/public/psychiatry/adult-community-mental-health-service-bay/",
                    },
                    {
                        id: 2,
                        name: "Voyagers",
                        text: "Child, Adolescent and Maternal Mental Health.",
                        phoneButton: "0800 486 947",
                        phone: "+0800 486 947",
                        href: "https://www.healthpoint.co.nz/public/psychiatry/maternal-infant-child-adolescent-mental-health/at/106-commerce-street-whakatane/",
                    },
                ],
            },
        ],
    },
    whakatane: {
        sections: [
            {
                heading: "In Whakatāne",
                contacts: [
                    {
                        id: 1,
                        name: "Adult Community Mental Health Service",
                        text: "24/7 crisis team.",
                        phoneButton: "0800 774 545",
                        phone: "+0800 774 545",
                        href: "https://www.healthpoint.co.nz/public/psychiatry/adult-community-mental-health-service-bay/",
                    },
                    {
                        id: 2,
                        name: "Voyagers",
                        text: "Child, Adolescent and Maternal Mental Health.",
                        phoneButton: "0800 486 947",
                        phone: "+0800 486 947",
                        href: "https://www.healthpoint.co.nz/public/psychiatry/maternal-infant-child-adolescent-mental-health/at/106-commerce-street-whakatane/",
                    },
                ],
            },
        ],
    },
};
