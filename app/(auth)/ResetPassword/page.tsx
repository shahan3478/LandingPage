// app/(auth)/forgot-password/page.tsx
import Link from 'next/link';
import { Mail, ArrowLeft } from 'lucide-react';
import { Poppins } from 'next/font/google';

// 1. Initialize the font with the weights used in your Tailwind classes
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function ForgotPasswordPage() {
    return (
        <div className={`${poppins.className} flex flex-col items-center w-full max-w-[500px]`}>
            <Link href="/" className="text-gray-500 mb-6 flex items-center gap-2 hover:text-slate-900 transition-colors text-sm font-medium ">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="text-center mb-8 w-full">
                <h1 className="text-3xl font-bold mb-2 tracking-tight">Reset Your Password</h1>
                <p className="text-gray-500 text-sm">Enter your email address to receive reset instructions</p>
            </div>

            <div className="bg-white w-full rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100">
                <h2 className="text-xl font-bold mb-1">Forgot Password</h2>
                <p className="text-sm text-gray-500 mb-6">Enter your email to receive a link to reset your password.</p>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                placeholder="ahmad.khan@email.com"
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <Link href="/Reset-Success" className=" block w-full bg-[#0B0F19] text-[#C6CB3B] text-center py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                        Send Reset Link
                    </Link>
                </form>

                <p className="text-xs text-gray-400 mt-6 leading-relaxed">
                    <strong className="text-gray-500 font-semibold">Security Notice:</strong> If an account with this email exists, you'll receive reset instructions. The link will expire in 1 hour.
                </p>
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