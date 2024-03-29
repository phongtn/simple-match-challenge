import type {Metadata} from "next";
import { poppins } from "@/types/fonts"
import React from "react";
import {GoogleAnalytics} from "@next/third-parties/google";
import {Analytics} from "@vercel/analytics/next";

import {cn} from "@/lib/utils";
import "../../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.className)}>
        {children}
        <Analytics />
        </body>
        <GoogleAnalytics gaId="G-YX4R5K8CT3" />
        </html>
    );
}


