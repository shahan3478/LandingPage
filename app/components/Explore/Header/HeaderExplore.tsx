"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Home, Menu, User } from 'lucide-react'; // Added Menu and User icons

export default function Header() {
    // This function tells the sidebar to open without needing shared state in page.tsx
    const openMobileMenu = () => {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('open-filter-sidebar'));
        }
    };

    return (
        <header className="w-full flex flex-col font-poppins">
            {/* 1. Main Black Header */}
            {/* Added relative positioning to easily center the logo on mobile */}
            <div className="bg-[#111111] text-white w-full px-4 md:px-8 py-4 flex justify-between items-center relative">

                {/* --- MOBILE ONLY: Hamburger Menu (Left) --- */}
                <button
                    onClick={openMobileMenu}
                    className="md:hidden bg-white text-black p-[6px] rounded-md hover:bg-gray-200 transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Logo Container (Centered on mobile, Left on desktop) */}
                <Link
                    href="/"
                    className="flex items-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
                >
                    <Image
                        src="/HighLogo.png"
                        alt="Mayfair Highstreet Logo"
                        width={160}
                        height={50}
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* --- DESKTOP ONLY: Login Button (Right) --- */}
                <Link href="/Signin" className="hidden md:block bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 ease-in-out active:scale-95">
                    Login
                </Link>

                {/* --- MOBILE ONLY: User Profile Icon (Right) --- */}
                <button className="md:hidden bg-white text-black p-[6px] rounded-md hover:bg-gray-200 transition-colors">
                    <User className="w-6 h-6" />
                </button>
            </div>

            {/* 2. Breadcrumb / Sub-header (Hidden on mobile via 'hidden md:flex') */}
            <div className="hidden md:flex bg-[#D9D9D9] w-full px-4 md:px-8 py-3 border-b border-gray-200 items-center gap-3 text-sm">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-[#565656] text-lg hover:text-black transition-colors"
                >
                    {/* Home Icon using lucide-react */}
                    <Home className="w-6 h-6" />
                    <span>Home</span>
                </Link>

                {/* Spacer / Separator */}
                <span className="text-[#0D0D0D] inline-block scale-y-200">|</span>

                {/* Current Page */}
                <Link
                    href="/ShopPage"
                    className="flex items-center gap-2 text-[#565656] text-lg hover:text-black transition-colors"
                >
                    {/* Home Icon using lucide-react */}

                    <span>Shop Now</span>
                </Link>
            </div>
        </header>
    );
}