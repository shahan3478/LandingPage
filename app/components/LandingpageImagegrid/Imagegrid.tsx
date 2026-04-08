
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 1. Define the TypeScript Interface for a Brand Object
interface Brand {
    id: string;
    src: string;
    alt: string;
}

export default function ImageGrid() {
    // 2. Explicitly type the array using the Brand interface
    const initialBrands: Brand[] = [
        { id: 'nike', src: '/Nike.png', alt: 'Nike' },
        { id: 'adidas', src: '/Adidas.png', alt: 'Adidas' },
        { id: 'lv', src: '/LV.png', alt: 'LV' },
        { id: 'gucci', src: '/gucci.png', alt: 'Gucci' },
        { id: 'apple', src: '/apple.png', alt: 'Apple' },
        { id: 'zara', src: '/Zara.png', alt: 'Zara' },
        { id: 'hm', src: '/HM.png', alt: 'H&M' },
    ];

    const [brands, setBrands] = useState<Brand[]>(initialBrands);

    // Rotate Carousel Left (with TypeScript safety check)
    const handlePrev = () => {
        setBrands((prev) => {
            if (prev.length === 0) return prev; // Safety check
            const newBrands = [...prev];
            const last = newBrands.pop();
            if (last) { // Ensure last is not undefined before unshifting
                newBrands.unshift(last);
            }
            return newBrands;
        });
    };

    // Rotate Carousel Right (with TypeScript safety check)
    const handleNext = () => {
        setBrands((prev) => {

            if (prev.length === 0) return prev; // Safety check
            const newBrands = [...prev];
            const first = newBrands.shift();
            if (first) { // Ensure first is not undefined before pushing
                newBrands.push(first);
            }
            return newBrands;
        });
    };

    // 3. Explicitly type the 'index' parameter as a number
    const getCardStyles = (index: number) => {
        const base = "bg-white flex items-center justify-center transition-all duration-300 ease-in-out shrink-0 cursor-pointer hover:z-50 hover:-translate-y-2 hover:shadow-xl";

        switch (index) {
            case 0: return `${base} w-14 h-14 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl shadow-sm z-10 p-2 md:p-3`; // Far Left
            case 1: return `${base} w-20 h-20 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl shadow-md z-20 -ml-3 sm:-ml-4 md:-ml-4 lg:-ml-6 p-2 md:p-4`; // Mid Left
            case 2: return `${base} w-24 h-24 sm:w-36 sm:h-36 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-[1rem] sm:rounded-2xl md:rounded-[1.5rem] shadow-lg z-30 -ml-4 sm:-ml-6 md:-ml-6 lg:-ml-8 p-3 md:p-5`; // Inner Left
            case 3: return `${base} w-32 h-32 sm:w-44 sm:h-44 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-[1.25rem] md:rounded-[2rem] shadow-2xl z-40 -ml-4 sm:-ml-6 md:-ml-6 lg:-ml-8 p-4 md:p-8 scale-105 hover:scale-110`; // Center Prominent
            case 4: return `${base} w-24 h-24 sm:w-36 sm:h-36 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-[1rem] sm:rounded-2xl md:rounded-[1.5rem] shadow-lg z-30 -ml-4 sm:-ml-6 md:-ml-6 lg:-ml-8 p-3 md:p-5`; // Inner Right
            case 5: return `${base} w-20 h-20 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl shadow-md z-20 -ml-3 sm:-ml-4 md:-ml-4 lg:-ml-6 p-2 md:p-4`; // Mid Right
            case 6: return `${base} w-14 h-14 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl shadow-sm z-10 -ml-3 sm:-ml-4 md:-ml-4 lg:-ml-6 p-2 md:p-3`; // Far Right
            default: return base;
        }
    };

    return (
        <div className="w-full flex flex-col">

            {/* === IMAGE GRID SECTION === */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 w-full">
                {/* 1 column on mobile, 12 columns on tablet, 4 columns on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-4 gap-4 md:gap-6">

                    {/* === FIRST ROW === */}

                    {/* 1. Shop Dubai's Online Brands */}
                    <div className="col-span-1 md:col-span-6 lg:col-span-2 aspect-[360/240] md:aspect-[328/400] lg:aspect-[538/478] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm bg-gray-50">
                        <Image src="/mb1.png" alt="Shop Dubai's Online and In-Store Brands" width={360} height={240} className="block md:hidden w-full h-full object-cover" />
                        <Image src="/tb1.png" alt="Shop Dubai's Online and In-Store Brands" width={328} height={400} className="hidden md:block lg:hidden w-full h-full object-cover" />
                        <Image src="/Image1.png" alt="Shop Dubai's Online and In-Store Brands" width={538} height={478} className="hidden lg:block w-full h-full object-cover" />
                    </div>

                    {/* 2. All Brands (Fully Functional & Edge-to-Edge Carousel) */}
                    <div
                        className="col-span-1 md:col-span-6 lg:col-span-2 aspect-[360/240] md:aspect-[328/400] lg:aspect-[538/478] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm relative flex flex-col items-center justify-center"
                        style={{ background: 'linear-gradient(180deg, #F6F7FA 0%, #D9DBE2 100%)' }}
                    >
                        {/* Header Text */}
                        <div className="absolute top-6 sm:top-8 md:top-12 lg:top-16 w-full text-center z-20">
                            <h3
                                className="text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-tight"
                                style={{ color: '#27272A' }}
                            >
                                All Brands
                            </h3>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-1 sm:left-2 md:left-6 top-[55%] -translate-y-[55%] z-50 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition active:scale-95"
                            aria-label="Previous Brand"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" strokeWidth={2.5} />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-1 sm:right-2 md:right-6 top-[55%] -translate-y-[55%] z-50 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition active:scale-95"
                            aria-label="Next Brand"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" strokeWidth={2.5} />
                        </button>

                        {/* Curved Dashed Line behind cards */}
                        <div className="absolute top-[55%] left-0 w-full z-0 flex justify-center px-4 sm:px-8 md:px-12 -translate-y-[55%] mt-6 md:mt-10 lg:mt-12">
                            <svg viewBox="0 0 400 80" fill="none" className="text-[#aeb1bd] opacity-40 w-full max-w-2xl">
                                <path d="M-20 20 Q 200 100 420 20" stroke="currentColor" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round" fill="none" />
                            </svg>
                        </div>

                        {/* Dynamic Brand Cards Layered Container */}
                        <div className="absolute top-[55%] w-full flex items-center justify-center z-10 px-0 md:px-16 -translate-y-[55%]">
                            {brands.map((brand, index) => (
                                <div key={brand.id} className={getCardStyles(index)}>
                                    <Image
                                        src={brand.src}
                                        alt={brand.alt}
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-contain pointer-events-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* === SECOND ROW === */}

                    {/* 3. Pay with Any Card */}
                    <div className="col-span-1 md:col-span-5 lg:col-span-1 md:row-span-2 lg:row-span-1 aspect-[360/240] md:aspect-[280/400] lg:aspect-[257/478] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm bg-gray-50">
                        <Image src="/mb3.png" alt="Pay with Any Card!" width={360} height={240} className="block md:hidden w-full h-full object-cover" />
                        <Image src="/tb3.png" alt="Pay with Any Card!" width={280} height={400} className="hidden md:block lg:hidden w-full h-full object-cover" />
                        <Image src="/Image2.png" alt="Pay with Any Card!" width={257} height={478} className="hidden lg:block w-full h-full object-cover" />
                    </div>

                    {/* 4. Get Any Product Listed or Not */}
                    <div className="col-span-1 md:col-span-7 lg:col-span-2 aspect-[360/240] md:aspect-[376/188] lg:aspect-[538/478] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm bg-gray-50">
                        <Image src="/mb4.png" alt="Get Any Product, Listed or Not" width={360} height={240} className="block md:hidden w-full h-full object-cover" />
                        <Image src="/tb4.png" alt="Get Any Product, Listed or Not" width={376} height={188} className="hidden md:block lg:hidden w-full h-full object-cover" />
                        <Image src="/Image3.png" alt="Get Any Product, Listed or Not" width={538} height={478} className="hidden lg:block w-full h-full object-cover" />
                    </div>

                    {/* 5. Trusted Customer Service */}
                    <div className="col-span-1 md:col-span-7 lg:col-span-1 aspect-[360/240] md:aspect-[376/188] lg:aspect-[257/478] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm bg-gray-50">
                        <Image src="/mb5.png" alt="Trusted Customer Service" width={360} height={240} className="block md:hidden w-full h-full object-cover" />
                        <Image src="/tb5.png" alt="Trusted Customer Service" width={376} height={188} className="hidden md:block lg:hidden w-full h-full object-cover" />
                        <Image src="/Image4.png" alt="Trusted Customer Service" width={257} height={478} className="hidden lg:block w-full h-full object-cover" />
                    </div>

                </div>
            </div>

            {/* === BOTTOM CALL TO ACTION WITH GRADIENT === */}
            <div
                className="w-full flex flex-col items-center justify-center pt-16 md:pt-24 pb-12 md:pb-16 mt-4 md:mt-8 text-center px-4"
                style={{ background: "radial-gradient(80% 100% ellipse at 50% 100%, #F6F999 0%,  #ffffff 80%)" }}
            >
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 max-w-[280px] sm:max-w-none">
                    Unlock Your Dubai Shopping Gateway
                </h2>
                <p className="text-[#27272A] font-normal text-sm md:text-base mb-6 font-light max-w-[280px] sm:max-w-none">
                    Seamless White-Glove Delivery from UAE to Your Doorstep.
                </p>
                <button className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-[#111] text-[#F6F999] text-sm font-semibold hover:bg-black transition shadow-lg">
                    Shop Now
                </button>
            </div>

        </div>
    );
}