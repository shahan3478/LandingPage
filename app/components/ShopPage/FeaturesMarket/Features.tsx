"use client";

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const logosMarketplace = [
    { id: 1, name: 'Amazon', src: '/Amazon2.png' },
    { id: 2, name: 'Chanel', src: '/Chanel.png' },
    { id: 3, name: 'DubaiStore', src: '/Dubaistore2.png' },
    { id: 4, name: 'Prada', src: '/Prada.png' },
    { id: 5, name: 'Zara', src: '/Jumbo.png' },
    { id: 6, name: 'MumzWorld', src: '/MumzWorld.png' },
    { id: 7, name: 'Noon', src: '/Noon2.png' },
];

const FeaturedMarketplaces = () => {
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

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            isManualScrolling.current = true;
            scrollContainerRef.current.scrollBy({ left: -250, behavior: 'smooth' });

            setTimeout(() => {
                isManualScrolling.current = false;
            }, 500);
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            isManualScrolling.current = true;
            scrollContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });

            setTimeout(() => {
                isManualScrolling.current = false;
            }, 500);
        }
    };

    return (
        <section className="w-full bg-white pt-12 pb-8">

            <div className="container mx-auto px-4 max-w-6xl">

                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 tracking-tight">
                    Featured Marketplaces
                </h2>

                <div
                    className="w-full relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Preserve functionality with wide container for wider cards */}
                    <div
                        ref={scrollContainerRef}
                        className="flex whitespace-nowrap gap-6 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Duplicate array for seamless infinite scroll using new data list */}
                        {[...logosMarketplace, ...logosMarketplace].map((logo, index) => (
                            <div key={index} className="flex-none w-[220px]">

                                <div className="flex items-center justify-center border border-gray-100 bg-[#fff] rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] h-[130px] transition-shadow hover:shadow-md cursor-pointer">

                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={160}
                                        height={90}
                                        className="object-contain max-h-[90px] max-w-[160px] mix-blend-multiply"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Preserve button functionality and structure with dark gray styling from image */}
                <div className="flex justify-center items-center space-x-3 mt-10">
                    <button
                        onClick={handleScrollLeft}
                        className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center text-gray-900 hover:bg-black/5 transition-colors shadow-sm"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={handleScrollRight}
                        className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center text-gray-900 hover:bg-black/5 transition-colors shadow-sm"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                </div>


                <div className="mt-12 border-b border-gray-200"></div>
            </div>
        </section>
    );
};

export default FeaturedMarketplaces;