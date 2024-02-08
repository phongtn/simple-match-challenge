import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Inter as FontSans} from "next/font/google";
import React from "react";
import {GoogleAnalytics} from "@next/third-parties/google";

import {cn} from "@/lib/utils";
import "../../styles/globals.css";

const inter = Inter({subsets: ["latin"]});
const fontSans = FontSans({subsets: ["latin"], variable: "--font-sans",})

export const metadata: Metadata = {
    title: {
        template: '%s | Simple Game for Kids',
        default: 'Simple Game for Kids',
    },
    description: 'Simple math game for Kids to learn multiplication table.',
    metadataBase: new URL('https://game.phongtn.com/'),
};
export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
        </body>
        <GoogleAnalytics gaId="G-YX4R5K8CT3" />
        </html>
    );
}


