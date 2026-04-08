"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// --- TYPES & INTERFACES ---
interface Banner {
    id: number;
    imageSrc: string;
}

interface Product {
    id: number;
    imageSrc: string;
}

// --- MOCK DATA GENERATION ---
const BANNERS: Banner[] = [
    { id: 1, imageSrc: '/Card1.png' },
    { id: 2, imageSrc: '/Card2.png' },
    { id: 3, imageSrc: '/Card3.png' },
    { id: 4, imageSrc: '/Card4.png' },
    { id: 5, imageSrc: '/Card5.png' },
    { id: 6, imageSrc: '/Card6.png' },
];

const PRODUCTS: Product[] = Array.from({ length: 18 }).map((_, i) => ({
    id: i + 1,
    imageSrc: `/Img${i + 1}.png`,
}));

const EXTENDED_BANNERS = [...BANNERS, ...BANNERS, ...BANNERS];
const EXTENDED_PRODUCTS = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

export default function ExclusiveDeals() {
    const bannerScrollRef = useRef<HTMLDivElement>(null);
    const productScrollRef = useRef<HTMLDivElement>(null);

    const [isHovered, setIsHovered] = useState(false);
    const isPulling = useRef(false);

    useEffect(() => {
        const bannerContainer = bannerScrollRef.current;
        const productContainer = productScrollRef.current;

        if (!bannerContainer || !productContainer) return;

        let animationFrameId: number;

        const autoScroll = () => {
            if (!isHovered && !isPulling.current) {
                bannerContainer.scrollTop += 1.5;
                productContainer.scrollTop += 1.5;
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        const pullIntervalId = setInterval(() => {

            if (!isHovered && !isPulling.current && bannerContainer && productContainer) {
                isPulling.current = true;

                bannerContainer.scrollTo({ top: 0, behavior: 'smooth' });
                productContainer.scrollTo({ top: 0, behavior: 'smooth' });

                setTimeout(() => {
                    isPulling.current = false;
                }, 1200);
            }
        }, 8000);

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearInterval(pullIntervalId);
        };
    }, [isHovered]);

    return (
        <section className="max-w-[1400px] mx-auto px-4 pb-0 pt-12 bg-white-50 font-sans">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-tight">
                Exclusive Deals
            </h2>

            <div
                className="flex flex-col md:flex-row gap-6 h-[800px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                {/* LEFT COLUMN: Banners (1/3 width) */}
                <div
                    ref={bannerScrollRef}
                    className="w-full md:w-1/3 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="flex flex-col gap-6 pb-6">
                        {EXTENDED_BANNERS.map((banner, index) => (
                            <div
                                key={`banner-${index}`}
                                className="relative rounded-3xl overflow-hidden shadow-md flex-shrink-0 min-h-[380px] h-[380px] bg-gray-100 group"
                            >
                                {/* Banner Image Only */}
                                <Image
                                    src={banner.imageSrc}
                                    alt={`Banner ${index}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN: Products Grid (2/3 width) */}
                <div
                    ref={productScrollRef}
                    className="w-full md:w-2/3 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                        {EXTENDED_PRODUCTS.map((product, index) => (
                            <div
                                key={`product-${index}`}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm relative border border-gray-100 flex flex-col min-h-[380px] h-[380px] hover:shadow-md transition-shadow group"
                            >
                                {/* Product Image Only */}
                                <Image
                                    src={product.imageSrc}
                                    alt={`Product ${index}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 50vw, 22vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            <div className="mt-16 w-full border-b border-gray-200"></div>
        </section>
    );
}