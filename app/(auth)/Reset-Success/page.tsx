// app/(auth)/reset-success/page.tsx
import Link from 'next/link';
import { ArrowLeft, Check, Clock } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function ResetSuccessPage() {
    return (
        <div className={`${poppins.className} flex flex-col items-center w-full max-w-[500px]`}>
            {/* Top Navigation */}
            <Link href="/" className="text-gray-500 mb-6 flex items-center gap-2 hover:text-slate-900 transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            {/* Main Headings */}
            <div className="text-center mb-8 w-full">
                <h1 className="text-3xl font-bold mb-2 tracking-tight">Reset Your Password</h1>
                <p className="text-gray-500 text-sm">Enter your email address to receive reset instructions</p>
            </div>

            {/* The White Card Container */}
            <div className="bg-white w-full rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100">

                {/* Success Header */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                        <Check className="w-4 h-4 text-green-500 stroke-[3]" />
                    </div>
                    <h2 className="text-lg font-bold">Reset Link Sent!</h2>
                </div>

                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    We’ve sent password reset instructions to <br />
                    <strong className="text-slate-900 font-semibold">ahmad.khan@email.com.</strong>
                </p>

                {/* Gray Next Steps Box */}
                <div className="bg-[#EAEAEA]/50 rounded-xl p-5 mb-8">
                    <h3 className="font-bold text-sm text-slate-900 mb-3">Next Steps:</h3>
                    <ol className="text-sm text-gray-500 space-y-2.5">
                        <li>1. Check your inbox (and spam folder)</li>
                        <li>2. Click the "Reset Password" link in the email.</li>
                        <li>3. Create a new secure password</li>
                        <li>4. Sign in with your new password</li>
                    </ol>
                </div>

                {/* Resend Timer Section */}
                <div className="text-center mb-6">
                    <p className="text-sm text-gray-400 mb-2">Didn't receive the email?</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                        <Clock className="w-4 h-4" />
                        <span>Resend available in <strong className="text-gray-500">56s</strong></span>
                    </div>
                </div>

                {/* Back to Login Button */}
                <div className="flex justify-center mt-8">
                    <Link href="/Signin" className="flex items-center gap-2 text-slate-900 font-bold hover:text-slate-700 transition-colors">
                        <ArrowLeft className="w-5 h-5" /> Back to Login
                    </Link>
                </div>

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