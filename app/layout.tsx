import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/app/ui/fonts";
import bg from "@/public/bg.jpg";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import NavHeader from "@/app/ui/navHeader";

export const metadata: Metadata = {
    title: "Ōpōtiki App",
    description: "Mental Health First Response",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={`${poppins.className} antialiased bg`} lang='en'>
            <body className='md:py-8'>
                <div
                    className='main md:rounded-2xl h-full'
                    // style={{
                    //     backgroundImage: `url(${bg.src})`,
                    // }}
                >
                    <NavHeader />
                    {children}
                </div>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
