import { AnnouncementBar } from '@/app/components/Annoucementheader';
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Mayfair Highstreet",
    description: "Pakistan's first concierge commerce service",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>


        {children}
        </body>
        </html>
    );
}