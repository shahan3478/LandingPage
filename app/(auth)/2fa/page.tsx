// app/(auth)/2fa/SideBar.tsx
"use client"; // This is required for interactivity (useState, useRef, onClick, etc.)

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function TwoFactorAuthPage() {
    // State to hold the 6 digits
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const isDisabled = otp.some(digit => digit === '');


    // Refs to control focus for the 6 input boxes
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Handle typing a number
    const handleChange = (index: number, value: string) => {
        // Only allow numbers to be typed
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        // Only take the last typed character in case they type fast
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // If a number was typed and we are not on the last box, jump to the next box
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle pressing Backspace
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        // If they press backspace on an empty box, jump to the previous box
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className={`${poppins.className} flex flex-col items-center w-full max-w-[500px]`}>
            {/* Top Navigation */}
            <Link href="/Signin" className="text-gray-500 mb-6 flex items-center gap-2 hover:text-slate-900 transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Login
            </Link>

            {/* Main Headings */}
            <div className="text-center mb-8 w-full">
                <h1 className="text-3xl font-bold mb-3 tracking-tight">Two-Factor Authentication</h1>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[400px] mx-auto">
                    For your security, we require a second step of verification. We have sent a code to your registered email address.
                </p>
            </div>

            {/* The White Card Container */}
            <div className="bg-white w-full rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100">

                <h2 className="text-lg font-bold mb-1">Enter OTP Code</h2>
                <p className="text-sm text-gray-500 mb-6">Check your email inbox for the 6-digit verification code.</p>

                {/* OTP Input Fields */}
                <div className="flex justify-between gap-2 mb-8">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            // Store the reference to this input so we can auto-focus it
                            ref={(el) => {
                                inputRefs.current[index] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            // Dynamic classes: If there is a digit, make it dark blue. If empty, keep it light gray.
                            className={`w-12 h-14 sm:w-14 sm:h-16 text-center text-xl font-semibold rounded-xl outline-none transition-all ${
                                digit !== ''
                                    ? 'bg-[#3A3F63] text-white border-transparent shadow-sm'
                                    : 'bg-[#F8F9FA] border border-gray-200 text-slate-900 focus:border-slate-900 focus:ring-1 focus:ring-slate-900'
                            }`}
                        />
                    ))}
                </div>

                {/* Resend Timer Section */}
                <div className="text-center mb-6 space-y-3">
                    <p className="text-sm text-gray-400">Didn't receive the OTP Code?</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-bold">
                        <Clock className="w-4 h-4" />
                        <span>Resend available in <strong className="text-gray-500">56s</strong></span>
                    </div>
                </div>

                {/* Verify Button */}

                <Link
                    href={isDisabled ? "#" : "/Success"}
                    className={`block w-full text-[#C6CB3B] text-center py-2 rounded-lg font-medium transition-colors ${
                        isDisabled
                            ? 'bg-slate-800 opacity-70 cursor-not-allowed pointer-events-none'
                            : 'bg-[#0B0F19] hover:bg-slate-800'
                    }`}
                >
                    Verify
                </Link>

            </div>

            {/* Footer Text */}
            <div className="mt-8 text-center space-y-2">
                <p className="text-sm text-gray-500">Still having trouble accessing your account?</p>
                <Link href="/support" className="text-sm font-bold text-gray-400 hover:text-slate-900 transition-colors">
                    Contact Support
                </Link>
            </div>
        </div>
    );
}