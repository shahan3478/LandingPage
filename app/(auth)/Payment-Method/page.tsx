// app/(auth)/payment/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Check, CreditCard } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function PaymentMethodPage() {
    // State to track which payment method is selected. Defaulting to 'local'
    const [selectedMethod, setSelectedMethod] = useState<'local' | 'international'>('local');

    return (
        <div className={`${poppins.className} flex flex-col items-center w-full max-w-[600px]`}>

            {/* Main Headings */}
            <div className="text-center mb-10 w-full">
                <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight text-slate-900">
                    Subscribe to Mayfair HighStreet
                </h1>
                <p className="text-gray-500 text-lg">
                    Choose your payment method
                </p>
            </div>

            {/* The White Card Container */}
            <div className="bg-white w-full rounded-2xl p-6 md:p-8 shadow-[0_2px_15px_-3px_rgba(6,81,237,0.05)] border border-gray-100">

                {/* Card Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Choose Payment Method</h2>
                    <p className="text-gray-500 text-sm mb-6">Select how you'd like to pay for your subscription</p>
                    <div className="text-4xl sm:text-5xl font-extrabold text-[#0B0F19]">
                        1 AED
                    </div>
                </div>

                {/* Payment Options */}
                <div className="space-y-4 mb-8">

                    {/* Option 1: Pay Locally */}
                    <button
                        type="button"
                        onClick={() => setSelectedMethod('local')}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                            selectedMethod === 'local'
                                ? 'border-[#9CA349] bg-[#FAFCF6]' // Slight green tint and border when selected
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        {/* Custom Radio Icon */}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            selectedMethod === 'local' ? 'bg-[#9CA349]' : 'border-2 border-gray-300'
                        }`}>
                            {selectedMethod === 'local' && <Check className="w-4 h-4 text-white stroke-[3]" />}
                        </div>

                        <div>
                            <span className="font-bold text-slate-900">Pay Locally (Pakistan)</span>
                            <span className="text-gray-500 text-sm ml-2">Local Payment Method</span>
                        </div>
                    </button>

                    {/* Option 2: Pay Internationally */}
                    <button
                        type="button"
                        onClick={() => setSelectedMethod('international')}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                            selectedMethod === 'international'
                                ? 'border-[#9CA349] bg-[#FAFCF6]'
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        {/* Custom Radio Icon */}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            selectedMethod === 'international' ? 'bg-[#9CA349]' : 'border-2 border-gray-300'
                        }`}>
                            {selectedMethod === 'international' && <Check className="w-4 h-4 text-white stroke-[3]" />}
                        </div>

                        <div>
                            <span className="font-bold text-slate-900">Pay Internationally</span>
                            <span className="text-gray-500 text-sm ml-2">Credit/Debit Cards, PayPal, Stripe</span>
                        </div>
                    </button>

                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Back Button */}
                    <Link
                        href="/Subscribe"
                        className="flex items-center justify-center py-2 rounded-lg border border-gray-200 bg-[#F8F9FA] text-slate-900 font-medium hover:bg-gray-100 transition-colors"
                    >
                        Back
                    </Link>

                    {/* Submit Button */}
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 bg-[#0B0F19] text-[#C6CB3B] py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                    >
                        <CreditCard className="w-5 h-5 text-[#C6CB3B]" />
                        Pay 1 AED
                    </button>
                </div>

            </div>
        </div>
    );
}