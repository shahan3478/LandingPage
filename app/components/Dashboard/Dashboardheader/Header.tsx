// app/components/Dashboard/Header.tsx
"use client"; // This must be a client component to handle click events

import { ChevronDown, User, Menu } from 'lucide-react';
import Image from 'next/image';

interface DashboardHeaderProps {
    onToggleSidebar: () => void;
}

export default function DashboardHeader({ onToggleSidebar }: DashboardHeaderProps) {
    return (
        <header className="bg-[#111111] text-white px-4 md:px-6 py-4 flex items-center justify-between border-b border-gray-800 relative z-40">

            {/* Left Section: Menu (Mobile/Tablet) OR Logo (Desktop) */}
            <div className="flex items-center">
                {/* Hamburger Menu - Assign the toggle function to the onClick event */}
                <button
                    onClick={onToggleSidebar} // Correct handler assignment
                    className="lg:hidden text-white mr-4 p-1 hover:opacity-80"
                    aria-label="Toggle navigation"
                >
                    <Menu className="h-6 w-6" strokeWidth={1.5} />
                </button>

                {/* Brand Identity - Hidden on Mobile/Tablet, Visible on Desktop */}
                <div className="hidden lg:flex items-center">
                    <Image
                        src="/HighLogo.png"
                        alt="Mayfair Highstreet Logo"
                        width={160}
                        height={50}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Middle Section: Navigation / Status */}
            <div className="hidden md:block flex-1 md:pl-4 lg:pl-24 text-left">
                <h1 className="text-xl md:text-2xl font-bold tracking-wide">Welcome back, Dora Nut!</h1>
                <p className="text-xs md:text-sm text-[#D2D2D2] mt-1">
                    Your Dubai address is ready. Start shopping from UAE stores now.
                </p>
            </div>

            {/* Spacer for mobile to push profile to the right when text is hidden */}
            <div className="md:hidden flex-1"></div>

            {/* Right Section: User Actions & Profile */}
            <div className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                {/* User Profile Picture - Always visible */}
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#C6CB3B] flex items-center justify-center text-black">
                    <User className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                </div>

                {/* User Name - Hidden on mobile, visible on tablet and desktop */}
                <div className="hidden md:block text-left">
                    <p className="font-semibold text-base md:text-lg leading-tight">Dora Nut</p>
                </div>

                {/* Dropdown Arrow - Always visible */}
                <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-gray-400 md:text-white" />
            </div>
        </header>
    );
}