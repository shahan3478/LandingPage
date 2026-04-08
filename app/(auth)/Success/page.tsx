// app/(auth)/success/page.tsx
import Link from 'next/link';
import { ArrowLeft, X, Check } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function SuccessPage() {
    return (
        <div className={`${poppins.className} flex flex-col items-center w-full max-w-[500px]`}>
            {/* Top Navigation */}
            <Link href="/sign-in" className="text-gray-500 mb-6 flex items-center gap-2 hover:text-slate-900 transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Login
            </Link>

            {/* Main Headings */}
            <div className="text-center mb-8 w-full">
                <h1 className="text-3xl font-bold mb-3 tracking-tight">Success!</h1>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[400px] mx-auto">
                    Your identity has been successfully verified.<br />
                    You are now logged in.
                </p>
            </div>

            {/* The White Card Container */}
            <div className="bg-white w-full rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100">

                {/* Header Row with Title and Close Button */}
                <div className="flex justify-between items-start mb-1">
                    <h2 className="text-xl font-bold text-slate-900">You're all set!</h2>
                    <button className="text-gray-400 hover:text-slate-900 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <p className="text-sm text-gray-500 mb-10">
                    You can now access your account securely.
                </p>

                {/* Big Green Checkmark */}
                <div className="flex justify-center mb-10">
                    <div className="w-16 h-16 rounded-full border-[4px] border-green-500 flex items-center justify-center">
                        <Check className="w-8 h-8 text-green-500 stroke-[4]" />
                    </div>
                </div>

                {/* Body Text */}
                <p className="text-center text-sm text-gray-500 mb-8 px-4 leading-relaxed">
                    Your account has been successfully secured and you can now access all your features securely.
                </p>


                <Link
                    href="/dashboard"
                    className="w-full flex justify-center bg-[#0B0F19] text-[#C6CB3B] py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                >
                    Go to Dashboard
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