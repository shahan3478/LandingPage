import React from 'react';
import { AnnouncementBar } from '@/app/components/Annoucementheader';

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
    // This simply passes your SideBar.tsx content through without adding anything extra

    return( <>
        <AnnouncementBar />
        {children}
    </>);
}