"use client";

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const logos = [
    { id: 1, name: 'Gucci', src: '/gucci.png' },
    { id: 2, name: 'H&M', src: '/HM.png' },
    { id: 3, name: 'LV', src: '/LV.png' },
    { id: 4, name: 'Apple', src: '/apple.png' },
    { id: 5, name: 'Adidas', src: '/Adidas.png' },
    { id: 6, name: 'Nike', src: '/Nike.png' },
    { id: 7, name: 'Rolex', src: '/Rolex.png' },
];

// Added the new banner images array
const ramadanBanners = [
    { id: 1, src: '/Banner1.png', alt: 'Amazon Ramadan Sale' },
    { id: 2, src: '/Banner2.png', alt: 'Bloomingdales Ramadan Sale' },
    { id: 3, src: '/Banner3.png', alt: 'Noon Ramadan Sale' },
];

const SpotlightCollection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const isManualScrolling = useRef(false);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const autoScroll = () => {

            if (!isHovered && !isManualScrolling.current) {
                container.scrollLeft += 3;

                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    // Button click handlers with a temporary pause
    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            isManualScrolling.current = true; // Pause auto-scroll
            scrollContainerRef.current.scrollBy({ left: -250, behavior: 'smooth' });

            // Resume auto-scroll after the smooth scrolling finishes (approx 500ms)
            setTimeout(() => {
                isManualScrolling.current = false;
            }, 500);
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            isManualScrolling.current = true; // Pause auto-scroll
            scrollContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });

            // Resume auto-scroll after the smooth scrolling finishes
            setTimeout(() => {
                isManualScrolling.current = false;
            }, 500);
        }
    };

    return (
        <section className="w-full bg-white pt-12 pb-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* --- SPOTLIGHT COLLECTION SECTION --- */}
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 tracking-tight">
                    Spotlight Collection
                </h2>

                <div
                    className="w-full relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex whitespace-nowrap gap-6 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex-none w-[220px]">
                                <div className="flex items-center justify-center border border-gray-100 bg-[#fff] rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] h-[130px] transition-shadow hover:shadow-md cursor-pointer">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={160}
                                        height={90}
                                        className="object-contain max-h-[90px] max-w-[160px]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center space-x-3 mt-10">
                    <button
                        onClick={handleScrollLeft}
                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={handleScrollRight}
                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                </div>

                <div className="mt-12 border-b border-gray-200"></div>

                {/* --- NEW RAMADAN SALE LIVE SECTION --- */}
                <div className="mt-10 bg-[#e6f264] rounded-[24px] p-8 md:p-12 relative w-full">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 tracking-tight">
                        Ramadan Sale Live
                    </h2>

                    <div className="flex items-center justify-between w-full relative">
                        {/* Left Nav Button */}
                        <button
                            className="w-10 h-10 shrink-0 rounded-full border border-gray-800 flex items-center justify-center text-gray-900 hover:bg-black/5 transition-colors z-10 mr-4"
                            aria-label="Previous banner"
                        >
                            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                        </button>

                        {/* Banners Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full overflow-hidden">
                            {ramadanBanners.map((banner) => (
                                <div key={banner.id} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm transition-transform hover:scale-[1.02] cursor-pointer">
                                    <Image
                                        src={banner.src}
                                        alt={banner.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right Nav Button */}
                        <button
                            className="w-10 h-10 shrink-0 rounded-full border border-gray-800 flex items-center justify-center text-gray-900 hover:bg-black/5 transition-colors z-10 ml-4"
                            aria-label="Next banner"
                        >
                            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                <div className="mt-12 border-b border-gray-200"></div>
            </div>
        </section>
    );
};

export default SpotlightCollection;