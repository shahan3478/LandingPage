// app/(auth)/register/page.tsx
import Link from 'next/link';
import { Check, CreditCard } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function RegisterPage() {
    return (
        <div className={`${poppins.className} flex flex-col items-center w-full max-w-[650px]`}>

            {/* Main Headings */}
            <div className="text-center mb-10 w-full">
                <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight text-slate-900">
                    Subscribe and Register to Mayfair Highstreet
                </h1>
                <p className="text-gray-500 text-base">
                    Enter your details to get started
                </p>
            </div>

            <div className="bg-white w-full rounded-2xl p-6 md:p-8 shadow-[0_2px_15px_-3px_rgba(6,81,237,0.05)] border border-gray-100 relative mt-4">

                {/* Floating Top Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C7D064] text-[11px] font-bold px-4 py-1.5 rounded-full text-slate-900 tracking-wide uppercase">
                    One-Time Payment
                </div>

                {/* Card Header */}
                <div className="text-center mb-8 mt-2">
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Mayfair Highstreet</h2>
                    <p className="text-sm text-gray-500 mb-4">Complete concierge shopping service</p>
                    <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-extrabold text-[#0B0F19]">1 AED</span>
                        <span className="text-gray-400 font-medium text-lg">one-time</span>
                    </div>
                </div>

                {/* Registration Form */}
                <form className="space-y-5">
                    {/* CSS Grid for side-by-side fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/* Full Name (Spans both columns) */}
                        <div className="col-span-1 sm:col-span-2">
                            <label className="block text-sm font-medium mb-1.5 text-slate-900">Full Name *</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className="block text-sm font-medium mb-1.5 text-slate-900">Email Address *</label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-medium mb-1.5 text-slate-900">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+92 300 1234567"
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all placeholder:text-gray-300"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium mb-1.5 text-slate-900">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium mb-1.5 text-slate-900">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Enter Confirm Password"
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                            />
                        </div>
                    </div>


                    {/* Features Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        {/* Column 1 */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Instant Access</h3>
                            <ul className="space-y-2.5">
                                <li className="flex items-start gap-2 text-sm text-slate-900">
                                    <Check className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" />
                                    <span>Virtual Dubai Address</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-900">
                                    <Check className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" />
                                    <span>Unlimited Self-Purchase Orders</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h3 className="font-bold text-slate-900 mb-3">Shopping Services</h3>
                            <ul className="space-y-2.5">
                                <li className="flex items-start gap-2 text-sm text-slate-900">
                                    <Check className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" />
                                    <span>Assisted Shopping (URL-based)</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-900">
                                    <Check className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" />
                                    <span>Custom Orders (Brick & Mortar)</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-900">
                                    <Check className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" />
                                    <span>Consolidated Shipping</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Link href="/Payment-Method" className="w-full flex items-center justify-center gap-2 bg-[#0B0F19] text-[#C6CB3B] py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors mt-4">
                        <CreditCard className="w-5 h-5 text-[#C6CB3B]" />
                        Continue to Payment - 1 AED
                    </Link>
                </form>

            </div>
        </div>
    );
}