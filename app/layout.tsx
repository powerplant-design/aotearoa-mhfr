import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/app/ui/fonts";
import bg from "@/public/bg.jpg";
import { headers } from "next/headers";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import NavHeader from "@/app/ui/navHeader";
import regions from "@/regions";

export const metadata: Metadata = {
    title: "Aotearoa MHFR",
    description: "Mental Health First Response",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const slug = headers().get("x-region");
    const regionName = regions.find((r) => r.slug === slug)?.name ?? null;

    return (
        <html className={`${poppins.className} antialiased`} lang='en'>
            <body className='md:py-8'>
                <div
                    className={`main md:rounded-2xl h-full`}
                    style={{
                        backgroundImage: `url(${bg.src})`,
                        backgroundSize: "cover",
                    }}
                >
                    <NavHeader region={slug} regionName={regionName} />
                    {children}
                </div>
            </body>
        </html>
    );
}
