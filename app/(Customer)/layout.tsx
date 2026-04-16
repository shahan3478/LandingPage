"use client";

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { useState } from 'react';
import DashboardHeader from '@/app/components/Dashboard/Dashboardheader/Header';
import DashboardSidebar from '@/app/components/Dashboard/DashboardSidebar/SideBar';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <html lang="en">
        <body className={poppins.className}>
        <div className="flex flex-col h-screen overflow-hidden">
            <DashboardHeader onToggleSidebar={toggleSidebar} />

            <div className="flex flex-1 overflow-hidden relative">
                <DashboardSidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />


                <main className="flex-1 overflow-y-auto bg-[#F7F8F9] p-4 md:p-6 lg:p-8 lg:ml-[18rem] xl:ml-[20rem] pb-12">
                    {children}
                </main>
            </div>
        </div>
        </body>
        </html>
    );
}