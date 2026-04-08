"use client";

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const hotSaleBanners = [
    { id: 1, src: '/Banner5.png', alt: 'Supreme Hot Sale' },
    { id: 2, src: '/Banner6.png', alt: 'Zara Hot Sale' },
    { id: 3, src: '/Banner7.png', alt: 'Adidas Black Sale' },
    { id: 4, src: '/Banner8.png', alt: 'Gucci Bag Sale' },
];

const extendedBanners = [
    ...hotSaleBanners, ...hotSaleBanners, ...hotSaleBanners,
    ...hotSaleBanners, ...hotSaleBanners, ...hotSaleBanners
];

const HotSale = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const isManualScrolling = useRef(false);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const SET_WIDTH = 1344;
        container.scrollLeft = SET_WIDTH * 2;

        let animationFrameId: number;
        let pullIntervalId: NodeJS.Timeout;

        // 1. The Slow, Normal Flow
        const autoScroll = () => {
            if (!isHovered && !isManualScrolling.current) {
                // Moves slowly to the left
                container.scrollLeft += 1.5;

                // Keeps the loop infinite so it never hits a wall
                if (container.scrollLeft >= SET_WIDTH * 3) {
                    container.scrollLeft -= SET_WIDTH;
                } else if (container.scrollLeft <= SET_WIDTH) {
                    container.scrollLeft += SET_WIDTH;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        // 2. The "Sudden Pull" Effect
        pullIntervalId = setInterval(() => {
            if (!isHovered && !isManualScrolling.current && container) {
                isManualScrolling.current = true; // Pause the slow flow momentarily

                // Suddenly pull the banners left by exactly one banner width (312px + 24px gap)
                container.scrollBy({ left: -1008, behavior: 'smooth' });

                // Resume the slow flow after the sudden pull finishes
                setTimeout(() => {
                    isManualScrolling.current = false;
                }, 1000);
            }
        }, 6000); // Triggers the sudden pull every 3.5 seconds

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearInterval(pullIntervalId);
        };
    }, [isHovered]);

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            isManualScrolling.current = true;
            scrollContainerRef.current.scrollBy({ left: -336, behavior: 'smooth' });

            setTimeout(() => {
                isManualScrolling.current = false;
            }, 500);
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            isManualScrolling.current = true;
            scrollContainerRef.current.scrollBy({ left: 336, behavior: 'smooth' });

            setTimeout(() => {
                isManualScrolling.current = false;
            }, 500);
        }
    };

    return (
        <section className="w-full bg-white pt-12 pb-8">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 tracking-tight">
                    Hot Sale
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
                        {extendedBanners.map((banner, index) => (
                            <div
                                key={index}
                                className="relative flex-none w-[312px] h-[400px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Image
                                    src={banner.src}
                                    alt={banner.alt}
                                    fill
                                    className="object-cover"
                                    sizes="312px"
                                />

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center space-x-3 mt-10">
                    <button
                        onClick={handleScrollLeft}
                        className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={handleScrollRight}
                        className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
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

export default HotSale;