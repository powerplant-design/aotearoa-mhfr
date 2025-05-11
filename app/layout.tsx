import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/app/ui/fonts";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import NavHeader from "@/app/ui/navHeader";

export const metadata: Metadata = {
    title: "Aotearoa MHFR",
    description: "Mental Health First Response",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={`${poppins.className} antialiased`} lang='en'>
            <body className='md:py-8'>
                <div className={`main md:rounded-2xl h-full`}>
                    <NavHeader />
                    {children}
                </div>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
