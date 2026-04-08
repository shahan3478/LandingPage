"use client";

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#1c1c1c] text-white font-sans flex flex-col">

            {/* Main Content Area */}
            <div className="max-w-[1400px] mx-auto w-full px-4 pt-16 pb-16 lg:pb-24 flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">

                {/* LEFT COLUMN: Contact Info */}
                <div className="flex flex-col w-full lg:w-[45%]">
                    <h2 className="text-[26px] font-bold mb-8">Contact Us</h2>

                    <div className="flex flex-col gap-6 text-[15px] text-gray-200 mb-10">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <Mail className="w-5 h-5 shrink-0 mt-0.5 text-gray-200" strokeWidth={1.5} />
                            <p>Support@mayfair.com.pk</p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <Phone className="w-5 h-5 shrink-0 mt-0.5 text-gray-200" strokeWidth={1.5} />
                            <p>+92-21-111-629-000</p>
                        </div>

                        {/* Address 1  */}
                        <div className="flex items-start gap-4 mt-2">
                            <div className="w-5 shrink-0" /> {/* Spacer for alignment */}
                            <p className="flex-1 leading-relaxed">
                                Dars Road, Off Manga Road, Raiwind, Lahore, Pakistan.
                            </p>
                        </div>

                        {/* Address 2  */}
                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 shrink-0 mt-1 text-gray-200" strokeWidth={1.5} />
                            <p className="flex-1 leading-relaxed">
                                The Hive – NASTP | Room # 4, 3rd Floor, Faisal Cantonment | Shahrah e Faisal, Karachi Pakistan.
                            </p>
                        </div>

                        {/* Address 3 */}
                        <div className="flex items-start gap-4">
                            <div className="w-5 shrink-0" /> {/* Spacer for alignment */}
                            <p className="flex-1 leading-relaxed">
                                FOAM0658 Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE
                            </p>
                        </div>
                    </div>

                    {/* Visit Shop Button */}
                    <div>
                        <button className="flex items-center gap-2 bg-[#EAF06C] text-black px-6 py-3 rounded-full hover:bg-[#dce35b] transition-colors shadow-sm active:scale-95">
                            <span className="font-semibold text-[15px]">Visit Shop</span>
                            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN: Logos & Tagline */}
                <div className="flex flex-col items-center lg:items-end w-full lg:w-[45%] gap-8">

                    {/* Main Highstreet Logo */}
                    <div className="relative w-[280px] h-[70px]">
                        <Image
                            src="/HighLogo.png"
                            alt="Mayfair Highstreet"
                            fill
                            className="object-contain lg:object-right"
                        />
                    </div>

                    {/* Secondary Logos */}
                    <div className="flex items-center justify-center lg:justify-end gap-6 h-8">
                        <div className="relative w-[110px] h-[32px]">
                            <Image
                                src="/MayfairTech.png"
                                alt="MayfairTech"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Vertical Divider */}
                        <div className="w-[1px] h-6 bg-gray-500/60"></div>

                        <div className="relative w-[100px] h-[32px]">
                            <Image
                                src="/Mayfair.png"
                                alt="Mayfair"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-lg text-white text-center lg:text-right max-w-sm mt-4 leading-snug">
                        Dubai’s best brands, your virtual address, worldwide delivery, all in one.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mt-4">
                        <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
                            <Instagram className="w-6 h-6" strokeWidth={1.5} />
                        </a>

                        <a href="#" className="text-white hover:text-gray-300 transition-colors flex items-center justify-center" aria-label="X (Twitter)">

                            <div className="relative w-[22px] h-[22px]">
                                <Image
                                    src="/X.png"
                                    alt="X"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </a>

                        <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
                            <Facebook className="w-6 h-6" strokeWidth={1.5} />
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom Bar: Copyright */}
            <div className="w-full bg-black">
                <div className="max-w-[1400px] mx-auto px-4 py-5 text-[13px] text-gray-400">
                    © 2026 Mayfair. All rights reserved.
                </div>
            </div>
        </footer>
    );
}