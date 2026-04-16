import React from 'react';
import { MapPin, Zap, Box, ShoppingCart, ShoppingBag, FileText } from 'lucide-react';

export default function DashboardOverview() {
    return (
        <div className="space-y-8 max-w-6xl w-full">
            {/* 1. Ready to Shop UAE Banner */}
            <section className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                    Ready to Shop UAE? 🛍️
                </h2>
                <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8 max-w-3xl leading-relaxed">
                    Your Dubai address is active and ready! Browse 500+ UAE stores, get
                    exclusive deals, and enjoy doorstep delivery to Pakistan.
                </p>

                <div className="flex flex-row flex-wrap gap-6 md:gap-10 text-sm font-semibold text-gray-900">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" strokeWidth={2} />
                        <span>Dubai Address Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5" strokeWidth={2} />
                        <span>3-7 Days Delivery</span>
                    </div>
                </div>
            </section>

            {/* 2. Quick Actions Section */}
            <section>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                    Quick Actions
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                    {/* Card 1: Track Orders */}
                    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="h-14 w-14 md:h-16 md:w-16 shrink-0 bg-[#C6CB3B] rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-105">
                            <Box className="h-7 w-7 md:h-8 md:w-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">Track Orders</h4>
                            <p className="text-sm text-gray-500 leading-snug">Monitor your shipments in real-time</p>
                        </div>
                    </div>

                    {/* Card 2: Assisted Shopping */}
                    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="h-14 w-14 md:h-16 md:w-16 shrink-0 bg-[#C6CB3B] rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-105">
                            <ShoppingCart className="h-7 w-7 md:h-8 md:w-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">Assisted Shopping</h4>
                            <p className="text-sm text-gray-500 leading-snug">We'll shop for you from any UAE site</p>
                        </div>
                    </div>

                    {/* Card 3: Self Purchase */}
                    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="h-14 w-14 md:h-16 md:w-16 shrink-0 bg-[#C6CB3B] rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-105">
                            <ShoppingBag className="h-7 w-7 md:h-8 md:w-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">Self Purchase</h4>
                            <p className="text-sm text-gray-500 leading-snug">Ship your own UAE purchases to us</p>
                        </div>
                    </div>

                    {/* Card 4: Custom Orders */}
                    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="h-14 w-14 md:h-16 md:w-16 shrink-0 bg-[#C6CB3B] rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-105">
                            <FileText className="h-7 w-7 md:h-8 md:w-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">Custom Orders</h4>
                            <p className="text-sm text-gray-500 leading-snug">Special requests from physical stores</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}