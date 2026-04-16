"use client";

import { usePathname } from 'next/navigation';
import {
    ChevronDown,
    MapPin,
    Copy,
    Home,
    ShoppingBag,
    ShoppingCart,
    FileText,
    Box,
    Truck,
    AlertCircle,
    HelpCircle,
    LogOut,
    X
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface DashboardSidebarProps {
    isOpen: boolean;
    onToggleSidebar: () => void;
}

function AddressCard() {
    return (
        <div className="bg-white p-4 lg:p-5 border border-gray-200 shadow-sm rounded-xl space-y-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-900" />
                    <h3 className="text-sm lg:text-base font-bold tracking-tight text-gray-900">Your Dubai Address</h3>
                </div>
                <button className="text-gray-400 hover:text-gray-900" aria-label="Copy address">
                    <Copy className="h-4 w-4" />
                </button>
            </div>
            <div className="space-y-1.5 text-xs lg:text-sm text-gray-600">
                <p className="font-semibold text-gray-900">Dora Nut</p>
                <p className="font-bold text-gray-900">MHS Box # 115, C/o TCS Express</p>
                <p>Warehouse # 5, Abdullah Saif building</p>
                <p>Umramool, Dubai - UAE</p>
                <p>Phone # +971-56-5026475</p>
            </div>
            <Link href="#" className="flex items-center gap-1 text-[11px] lg:text-xs font-medium text-gray-500 hover:text-gray-900 pt-1">
                View full address details
                <ChevronDown className="h-3 w-3 rotate-[-90deg]" strokeWidth={2.5}/>
            </Link>
        </div>
    );
}

const menuItems = [
    { name: 'Home', icon: Home, href: '/CustomerDashboard' },
    { name: 'Self Purchase Order', icon: ShoppingBag, href: '/SelfPurchase' },
    { name: 'Assisted Shopping', icon: ShoppingCart, href: '/assisted-shopping' },
    { name: 'Custom Order', icon: FileText, href: '/custom-order' },
    { name: 'My Orders', icon: Box, href: '/my-orders' },
    { name: 'My Shipments', icon: Truck, href: '/my-shipments' },
    { name: 'Report Tickets', icon: AlertCircle, href: '/tickets' },
    { name: 'Support', icon: HelpCircle, href: '/support' },
];

export default function DashboardSidebar({ isOpen, onToggleSidebar }: DashboardSidebarProps) {
    const pathname = usePathname();
    const sidebarClasses = isOpen ? 'translate-x-0' : '-translate-x-full';

    return (
        <>
            {/* 1. Mobile & Tablet Overlay Panel */}
            <div className={`fixed inset-0 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${sidebarClasses}`}>
                <div onClick={onToggleSidebar} className="fixed inset-0 bg-black/60 z-40" />

                <aside className="fixed left-0 top-0 h-full w-4/5 max-w-sm bg-white z-50 flex flex-col overflow-hidden">
                    <div className="bg-[#111111] p-4 flex items-center justify-between border-b border-gray-800">
                        <Image
                            src="/HighLogo.png"
                            alt="Mayfair Highstreet Logo"
                            width={160}
                            height={50}
                            className="object-contain"
                            priority
                        />
                        <button onClick={onToggleSidebar} className="text-white p-1 hover:opacity-80" aria-label="Close sidebar">
                            <X className="h-6 w-6" strokeWidth={1.5} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto flex flex-col h-full">
                        <div className="p-4 md:p-6 space-y-6">
                            <AddressCard />
                            <nav className="space-y-1">
                                {menuItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm lg:text-base font-semibold group transition ${
                                                isActive
                                                    ? 'bg-black text-[#C6CB3B] hover:bg-gray-900'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            <item.icon className={`h-5 w-5 ${isActive ? 'text-[#C6CB3B]' : 'text-gray-600'}`} />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        <div className="p-4 md:p-6 mt-auto border-t border-gray-100">
                            <Link href="/logout" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm lg:text-base font-semibold text-gray-700 hover:bg-gray-100 group transition">
                                <LogOut className="h-5 w-5 text-gray-600 group-hover:scale-110" />
                                Logout
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>

            {/* 2. Desktop Sidebar */}
            <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[18rem] xl:w-[20rem] bg-white text-gray-900 flex-col pt-[81px] z-30 border-r border-gray-200 shadow-sm overflow-hidden">
                <div className="flex-1 overflow-y-auto flex flex-col h-full">
                    <div className="px-5 xl:px-6 mt-6 mb-6">
                        <AddressCard />
                    </div>

                    <nav className="px-5 xl:px-6 space-y-1 mb-6">
                        {menuItems.map((item) => {
                            // Check if current route matches the item's href
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold transition group ${
                                        isActive
                                            ? 'bg-black text-[#C6CB3B] hover:bg-gray-900'
                                            : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    <item.icon className={`h-5 w-5 ${isActive ? 'text-[#C6CB3B]' : 'text-gray-500'}`} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="px-5 xl:px-6 py-6 mt-auto border-t border-gray-100">
                        <Link href="/logout" className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 group transition">
                            <LogOut className="h-5 w-5 text-gray-500 group-hover:scale-110" />
                            Logout
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}