"use client";

import React from 'react';
import Image from 'next/image';

// --- TYPES & INTERFACES ---
interface ProductCard {
    id: number;
    imageSrc: string;
}

// --- MOCK DATA FOR BOTTOM CARDS ---
const PRODUCTS: ProductCard[] = [
    { id: 1, imageSrc: '/Card8.png' },
    { id: 2, imageSrc: '/Card9.png' },
    { id: 3, imageSrc: '/Card10.png' },
    { id: 4, imageSrc: '/Card11.png' },
    { id: 5, imageSrc: '/Card12.png' },
];

export default function DubaiBites() {
    return (
        <section className="max-w-[1400px] mx-auto px-4 pt-12 pb-2 bg-white font-sans">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900 tracking-tight">
                Featured Delights
            </h2>



            <div className="flex flex-col md:flex-row gap-6 mb-12 md:h-[320px]">

                <div className="w-full md:w-[30%] relative rounded-3xl overflow-hidden shadow-md bg-gray-100 group h-[300px] md:h-full">
                    <Image
                        src="/Card7.png"
                        alt="Featured Product"
                        fill
                        className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 30vw"
                    />
                </div>


                <div className="w-full md:w-[70%] relative rounded-3xl overflow-hidden shadow-lg group h-[300px] md:h-full">
                    <Image
                        src="/Rect1.png"
                        alt="Dubai Favorite Bites"
                        fill
                        className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 70vw"
                    />


                    <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div>


                    <div className="absolute inset-0 z-10 flex items-center justify-center text-center pointer-events-none">
                        <h3 className="text-[40px] md:text-[48px] font-bold tracking-tight text-[#F0F0F0] leading-tight px-10 drop-shadow-md">
                            Dubai’s Favorite Bites, Delivered to You.
                        </h3>
                    </div>
                </div>
            </div>

            {/* BOTTOM ROW: Five Smaller Product Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {PRODUCTS.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm relative border border-gray-100 h-[250px] md:h-[380px] hover:shadow-md transition-shadow group"
                    >
                        {/* Product Image Area Only */}
                        <Image
                            src={product.imageSrc}
                            alt={`Product image ${product.id}`}
                            fill
                            className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 20vw"
                        />
                    </div>
                ))}
            </div>

            {/* Centered View More Button at the bottom */}
            <div className="text-center mt-12">
                <button className="text-white bg-black px-12 py-3.5 rounded-full text-sm font-semibold transition-colors hover:bg-gray-800 shadow-md">
                    View More
                </button>
            </div>
            <div className="mt-16 w-full border-b border-gray-200"></div>

        </section>
    );
}