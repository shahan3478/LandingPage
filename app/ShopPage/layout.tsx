import React from 'react';
import { AnnouncementBar } from '@/app/components/Annoucementheader';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    // This simply passes your page.tsx content through without adding anything extra

    return(
        <>
            <AnnouncementBar />
            {children}
        </>
    );
}