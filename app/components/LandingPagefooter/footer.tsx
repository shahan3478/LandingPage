import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#01011D] pt-12 md:pt-16 pb-8 w-full font-sans overflow-hidden">

            {/* === Top Section: Brand & Links === */}
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 mb-10 md:mb-16 px-4 lg:px-8">

                {/* Left Column */}
                <div className="md:col-span-6 lg:col-span-5 flex flex-col">
                    <div className="mb-6">
                        <Image
                            src="/Asset 9.png"
                            alt="Mayfair Highstreet"
                            width={160}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                    <p className="text-sm text-[#FFFFFF] mb-6 leading-relaxed">
                        Dubai&apos;s best brands, your virtual address,<br className="hidden sm:block" />
                        worldwide delivery, all in one.
                    </p>

                    <ul className="space-y-3 text-sm text-[#FFFFFF]">
                        <li className="flex items-center gap-3">
                            <Mail className="h-4 w-4 shrink-0"/>
                            Support@mayfair.com.pk
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="h-4 w-4 shrink-0"/>
                            +92 (21) 111 629 000
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 shrink-0"/>
                            Dubai, United Arab Emirates
                        </li>
                    </ul>
                </div>

                {/* Right Column (Shop) */}
                <div className="md:col-span-4 lg:col-span-3 lg:col-start-9 flex flex-col">
                    <h4 className="text-[#FFFFFF] font-semibold mb-5">Shop</h4>
                    <ul className="space-y-3 text-sm text-[#FFFFFF]">
                        <li><a href="#" className="hover:text-white transition-colors duration-200">All Categories</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Electronics</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Fashion</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Beauty</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Home & Garden</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-200">Sports</a></li>
                    </ul>
                </div>

            </div>

            {/* === DIVIDER LINE === */}
            <div className="border-t border-[#FFFFFF] mx-4 lg:mx-0 opacity-20 md:opacity-100"></div>

            {/* === Bottom Bar: Copyright & Socials === */}
            <div className="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between text-xs text-[#FFFFFF] pt-6 px-4 lg:px-8 gap-4 md:gap-0">

                <p>
                    © 2025 Mayfair. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex gap-5">
                    <a href="#" className="hover:text-white">
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="hover:text-white">
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="hover:text-white">
                        <Linkedin className="w-4 h-4" />
                    </a>
                </div>

            </div>

        </footer>
    );
}