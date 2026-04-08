"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// --- TYPES & INTERFACES ---
interface Review {
    id: number;
    name: string;
    text: string;
    rating: number;
}

// --- MOCK DATA ---
const REVIEWS: Review[] = [
    {
        id: 1,
        name: "Fatima Ahmed",
        text: '"The collection is amazing! I love how they combine tradition with modern style. Very fast delivery to Karachi."',
        rating: 4,
    },
    {
        id: 2,
        name: "Zeeshan Khan",
        text: '"Best shopping experience. The fabric quality is exceptional. Will definitely order again from Mayfair High Street."',
        rating: 4,
    },
    {
        id: 3,
        name: "Ayesha Malik",
        text: '"Fantastic customer service and beautiful designs. I highly recommend Mayfair High Street for all your fashion needs."',
        rating: 5,
    },
    {
        id: 4,
        name: "Syed Ali",
        text: '"I\'m truly impressed by the quality and style of the clothing I received. The fitting is perfect for our style."',
        rating: 5,
    },
    {
        id: 5,
        name: "Zainab Raza",
        text: '"Absolutely gorgeous pieces! The attention to detail in the embroidery is stunning. Worth every penny."',
        rating: 5,
    }
];

// Duplicate the array multiple times to create the infinite scrolling illusion
const EXTENDED_REVIEWS = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

export default function CustomerVoices() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const isManualScrolling = useRef(false);

    // Card width (approx 400px) + Gap (24px) = Scroll Step
    const SCROLL_STEP = 424;

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Set initial scroll position to the second set of reviews to allow scrolling left instantly if needed
        container.scrollLeft = SCROLL_STEP * REVIEWS.length;

        const autoScroll = setInterval(() => {
            if (!isHovered && !isManualScrolling.current && container) {
                isManualScrolling.current = true;

                // Smoothly pull to the left (scroll right)
                container.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });

                // Reset logic to maintain the infinite loop silently
                setTimeout(() => {
                    if (container.scrollLeft >= SCROLL_STEP * (REVIEWS.length * 2)) {
                        // Jump back to the first set invisibly
                        container.scrollBy({ left: -(SCROLL_STEP * REVIEWS.length), behavior: 'auto' });
                    }
                    isManualScrolling.current = false;
                }, 600); // Wait for smooth scroll animation to finish
            }
        }, 4000); // Pulls a new card every 4 seconds

        return () => clearInterval(autoScroll);
    }, [isHovered, SCROLL_STEP]);

    const handleScrollLeft = () => {
        const container = scrollContainerRef.current;
        if (container && !isManualScrolling.current) {
            isManualScrolling.current = true;
            container.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' });

            setTimeout(() => {
                if (container.scrollLeft <= 0) {
                    container.scrollBy({ left: SCROLL_STEP * REVIEWS.length, behavior: 'auto' });
                }
                isManualScrolling.current = false;
            }, 600);
        }
    };

    const handleScrollRight = () => {
        const container = scrollContainerRef.current;
        if (container && !isManualScrolling.current) {
            isManualScrolling.current = true;
            container.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });

            setTimeout(() => {
                if (container.scrollLeft >= SCROLL_STEP * (REVIEWS.length * 2)) {
                    container.scrollBy({ left: -(SCROLL_STEP * REVIEWS.length), behavior: 'auto' });
                }
                isManualScrolling.current = false;
            }, 600);
        }
    };

    return (
        <section className="w-full bg-white py-16 font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Header */}
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
                    Customer Voices
                </h2>

                {/* Carousel Container */}
                <div
                    className="relative w-full"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Hiding the scrollbar while keeping functionality */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden py-4 px-2"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {EXTENDED_REVIEWS.map((review, index) => (
                            <div
                                key={`review-${index}`}
                                className="snap-center shrink-0 w-[320px] md:w-[400px] bg-white rounded-[24px] p-8 flex flex-col justify-between min-h-[260px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50/50"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {review.name}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-[15px]">
                                        {review.text}
                                    </p>
                                </div>

                                {/* Star Ratings */}
                                <div className="flex gap-1.5 mt-6">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={20}
                                            className={`${
                                                star <= review.rating
                                                    ? 'fill-[#EADD7B] text-[#EADD7B]'
                                                    : 'text-gray-200 fill-transparent'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center gap-4 mt-10">
                    <button
                        onClick={handleScrollLeft}
                        className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm hover:shadow active:scale-95"
                        aria-label="Previous review"
                    >
                        <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={handleScrollRight}
                        className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm hover:shadow active:scale-95"
                        aria-label="Next review"
                    >
                        <ChevronRight size={24} strokeWidth={1.5} />
                    </button>
                </div>

            </div>
        </section>
    );
}