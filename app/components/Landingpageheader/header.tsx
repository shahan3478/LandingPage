"use client"
import Image from "next/image";
import { CircleCheck, Plane, Mail } from "lucide-react";
import Link from "next/link"

export default function Header() {
    return (
        <header className="w-screen flex flex-col">
            {/* 1. Announcement bar */}

           

            <div
                className="flex flex-col"
                style={{
                    background:
                        "radial-gradient(80% 100% at 50% 0%, #F6F999 0%, #ffffff 100%)",
                }}
            >
                {/* Logo row */}

                <div className="relative flex items-center justify-between md:justify-end px-4 md:px-6 py-4 md:py-6">

                    {/* Logo Container */}

                    <div className="md:absolute w-full flex justify-start md:justify-center items-center md:left-0 pointer-events-none">
                        <div className="pointer-events-auto">
                            <Image
                                src="/logo 1.png"
                                alt="Mayfair Highstreet"
                                width={220}
                                height={220}
                                className="w-[120px] sm:w-[140px] md:w-[180px] lg:w-[220px] h-auto"
                                priority
                            />
                        </div>
                    </div>

                    {/* Buttons Container */}
                    <div className="flex justify-end gap-3 z-10">
                        <Link href="/Signin" className="px-4 py-1.5 md:px-5 md:py-2 rounded-full border-2 border-[#E4E4E7] bg-white text-black text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors">
                            Login
                        </Link>
                        <Link
                            href="/ShopPage"
                            className="hidden md:block px-5 py-2 rounded-full bg-black text-[#F6F999] text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* Hero content: headline, features, CTA */}
                <div className="flex flex-col items-center mt-6 md:mt-10 px-4 md:px-6 pb-10 md:pb-12">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black text-center mb-6 md:mb-8 md:px-12 lg:px-0 max-w-[280px] sm:max-w-none mx-auto leading-tight">
                        All of Dubai delivered to your doorstep
                    </h1>

                    <ul className="flex flex-col md:flex-row flex-wrap items-center md:justify-center gap-3 md:gap-6 lg:gap-12 mb-8 md:mb-10 text-black text-xs md:text-sm lg:text-base">
                        <li className="flex items-center gap-2 whitespace-nowrap">
                            <CircleCheck className="h-4 w-4 shrink-0" />
                            <span>Authentic brands & products</span>
                        </li>
                        <li className="flex items-center gap-2 whitespace-nowrap">
                            <Plane className="h-4 w-4 shrink-0" />
                            <span>4 days delivery</span>
                        </li>
                        <li className="flex items-center gap-2 whitespace-nowrap">
                            <Mail className="h-4 w-4 shrink-0" />
                            <span>Free Dubai Mailbox on Subscription</span>
                        </li>
                    </ul>

                    <Link
                        href="/ShopPage"
                        className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-black text-[#F6F999] text-sm md:text-lg font-medium hover:bg-gray-800 transition-transform active:scale-95"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </header>
    );
}