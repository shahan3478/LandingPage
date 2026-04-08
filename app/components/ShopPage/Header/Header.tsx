import Image from 'next/image';
import Link from 'next/link';
import { User, Menu, Home, ChevronRight } from 'lucide-react';

export default function HeaderComponent() {
    return (
        <div className="w-full bg-white flex flex-col" style={{ fontFamily: "'Poppins', sans-serif" }}>

            {/* 1. Main Black Header */}
            <header className="w-full bg-[#111] text-white relative z-20">
                <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 h-[72px] flex items-center justify-between">


                    <div className="flex items-center gap-4 md:gap-8">

                        <button
                            className="md:hidden p-1 -ml-1 text-white focus:outline-none cursor-default"
                            aria-label="Mobile menu"
                        >
                            <Menu size={28} />
                        </button>

                        {/* Logo */}

                        <Link href="/" className="inline-block flex-shrink-0">
                            <Image
                                src="/MHS-logo 1.png"
                                alt="Mayfair Highstreet Logo"
                                width={160}
                                height={45}
                                priority
                                className="h-[35px] md:h-[40px] w-auto object-contain "
                            />
                        </Link>

                        {/* Shop Now Link */}
                        <Link href="/shop" className="hidden md:block text-sm font-medium text-white hover:text-gray-300 transition-colors">
                            Shop Now
                        </Link>
                    </div>

                    {/* Right Section: Sign In + Sign Up */}
                    <div className="flex items-center gap-6">
                        <Link href="/signin" className="hidden sm:block text-sm font-medium text-white hover:text-gray-300 transition-colors">
                            Sign In
                        </Link>

                        <Link href="/signup" className="bg-white text-black text-sm font-semibold py-2 md:py-2.5 px-4 md:px-5 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
                            <User size={18} />
                            Sign Up
                        </Link>
                    </div>
                </div>
            </header>

            {/* 2. Sub-header: Breadcrumbs & Title */}
            <div className="w-full bg-[#FAFAFA]">

                <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 pt-6 pb-8">

                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-10 md:mb-12">
                        <Home size={16} className="text-gray-400" />
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={16} className="text-gray-300" />
                        <span className="text-zinc-900 font-medium">Explore Collection</span>
                    </div>

                    {/* Page Heading  */}
                    <h1 className="text-3xl  md:text-4xl lg:text-5xl font-extrabold text-center text-[#18181b] mb-10 md:mb-14 tracking-tight">
                        Your Gateway to Dubai Shopping
                    </h1>

                    {/* 3. Banner Section  */}
                    <div className="w-full max-w-[1280px] mx-auto relative aspect-[16/9] sm:aspect-[2/1] md:aspect-[1280/432] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-sm">
                        <Image
                            src="/GucciBanner.png"
                            alt="Gucci Collection Banner"
                            fill
                            sizes="(max-width: 1280px) 100vw, 1280px"
                            priority
                            className="object-cover object-center"
                        />
                    </div>

                </div>
            </div>

        </div>
    );
}