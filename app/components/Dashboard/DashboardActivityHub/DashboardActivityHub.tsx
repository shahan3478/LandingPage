import React from 'react';
import {
    Box,
    Clock,
    TrendingUp,
    ArrowRight,
    ShoppingBag,
    Package
} from 'lucide-react';
import Image from "next/image"


export default function DashboardActivityHub() {
    return (
        <div className="space-y-6 max-w-6xl w-full text-gray-900">
            {/* 1. Your Shopping Stats */}
            <section>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Your Shopping Stats</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Total Orders Card */}
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-500">Total Orders</p>
                            <p className="text-3xl font-bold text-gray-900">12</p>
                            <p className="text-xs text-gray-400">~2 this month</p>
                        </div>
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#1A1A3A] text-white">
                            <Box className="h-6 w-6" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* In Transit Card */}
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-500">In Transit</p>
                            <p className="text-3xl font-bold text-gray-900">3</p>
                            <p className="text-xs text-gray-400">Expected this week</p>
                        </div>
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#E6EE60] text-gray-900">
                            <Clock className="h-6 w-6" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Delivered Card */}
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-500">Delivered</p>
                            <p className="text-3xl font-bold text-gray-900">9</p>
                            <p className="text-xs text-gray-400">100% success rate</p>
                        </div>
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-100 text-gray-600">
                            <TrendingUp className="h-6 w-6" strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Hot Deals & Recent Orders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Hot Deals This Week */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                            <span>🔥</span> Hot Deals This Week
                        </h3>
                        <span className="bg-[#E6EE60] text-[#1A1A3A] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Limited Time
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Exclusive offers from our partner brands</p>

                    <div className="space-y-5 flex-1">
                        {/* Deal 1 */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-xs font-bold">
                                    SHEIN
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Shein</p>
                                    <p className="text-xs text-gray-400">Fashion & Accessories</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="inline-block border border-gray-200 rounded-full px-3 py-1 text-xs font-bold mb-1">
                                    Up to 40% OFF
                                </div>
                                <p className="text-[10px] text-red-500 font-medium">⏰ 2 days left</p>
                            </div>
                        </div>

                        {/* Deal 2 */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-xs font-bold">
                                    a
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Amazon.ae</p>
                                    <p className="text-xs text-gray-400">Electronics & Gadgets</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="inline-block border border-gray-200 rounded-full px-3 py-1 text-xs font-bold mb-1">
                                    25% OFF
                                </div>
                                <p className="text-[10px] text-red-500 font-medium">⏰ 5 days left</p>
                            </div>
                        </div>

                        {/* Deal 3 */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-xs font-bold">
                                    ZARA
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Zara</p>
                                    <p className="text-xs text-gray-400">Premium Clothing</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="inline-block border border-gray-200 rounded-full px-3 py-1 text-xs font-bold mb-1">
                                    30% OFF
                                </div>
                                <p className="text-[10px] text-red-500 font-medium">⏰ 1 week left</p>
                            </div>
                        </div>
                    </div>

                    <button className="mt-6 w-full bg-[#0A0D2A] text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#15193B] transition">
                        View All Deals <ArrowRight className="h-4 w-4" />
                    </button>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
                    <div className="mb-2">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                            <span>📦</span> Recent Orders
                        </h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-6">Track your latest shopping activity</p>

                    <div className="space-y-4 flex-1">
                        {/* Order 1 */}
                        <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                                    <Box className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">ORD-001</p>
                                    <p className="text-xs text-gray-400">Zara • 2 days ago</p>
                                </div>
                            </div>
                            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                                Delivered
                            </span>
                        </div>

                        {/* Order 2 */}
                        <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                                    <Package className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">ORD-002</p>
                                    <p className="text-xs text-gray-400">Shein • 5 days ago</p>
                                </div>
                            </div>
                            <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                                In Transit
                            </span>
                        </div>

                        {/* Order 3 */}
                        <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                                    <ShoppingBag className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">ORD-003</p>
                                    <p className="text-xs text-gray-400">Amazon.ae • 1 week ago</p>
                                </div>
                            </div>
                            <span className="bg-yellow-50 text-yellow-600 text-xs font-bold px-3 py-1 rounded-full border border-yellow-100">
                                Processing
                            </span>
                        </div>
                    </div>

                    <button className="mt-6 w-full bg-[#0A0D2A] text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#15193B] transition">
                        View All Orders <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* 3. Shop from Popular UAE Brands */}
            <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="mb-6">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                        <span>🛍️</span> Shop from Popular UAE Brands
                    </h3>
                    <p className="text-sm text-gray-500">Click to visit brand websites using your Dubai address</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    <div className="flex flex-col items-center justify-center py-6 px-4 border border-gray-100 rounded-xl hover:shadow-md transition cursor-pointer">
                        <span className="font-black text-xl tracking-tighter mb-1">SHEIN</span>
                        <span className="text-[10px] text-gray-400">Shein</span>
                    </div>

                    <div className="flex flex-col items-center justify-center py-6 px-4 border border-gray-100 rounded-xl hover:shadow-md transition cursor-pointer">
                        <span className="font-serif font-bold text-xl mb-1">ZARA</span>
                        <span className="text-[10px] text-gray-400">Zara</span>
                    </div>

                    <div className="flex flex-col items-center justify-center py-6 px-4 border border-gray-100 rounded-xl hover:shadow-md transition cursor-pointer">
                        <span className="font-bold text-2xl lowercase mb-1 leading-none">a</span>
                        <span className="text-[10px] text-gray-400">Amazon.ae</span>
                    </div>

                    <div className="flex flex-col items-center justify-center py-6 px-4 border border-gray-100 rounded-xl hover:shadow-md transition cursor-pointer">
                        <span className="font-medium text-lg lowercase mb-1">damas</span>
                        <span className="text-[10px] text-gray-400">Damas</span>
                    </div>

                    <div className="flex flex-col items-center justify-center py-6 px-4 border border-gray-100 rounded-xl hover:shadow-md transition cursor-pointer text-center">
                        <span className="font-serif italic text-lg mb-1 leading-tight">Chic</span>
                        <span className="text-[10px] text-gray-400">Chic</span>
                    </div>

                    <div className="flex flex-col items-center justify-center py-6 px-4 border border-gray-100 rounded-xl hover:shadow-md transition cursor-pointer">
                        <span className="font-light text-lg uppercase tracking-widest mb-1">Ounass</span>
                        <span className="text-[10px] text-gray-400">Ounass</span>
                    </div>
                </div>
            </section>
        </div>
    );
}