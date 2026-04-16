// app/(auth)/sign-in/SideBar.tsx
"use client"
import Link from 'next/link';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Poppins } from 'next/font/google';
import {useState} from 'react';

// Initialize the font
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function SignInPage() {
const [email,setemail]=useState("");
    const [error,setError]=useState("");
    const [passwordError, setPasswordError] = useState("");
    const [password, setPassword] = useState("");
    const handlenavigation=(e:React.MouseEvent<HTMLAnchorElement>)=>{
        if(!email.trim()){
            e.preventDefault();
            setError("Email is required")
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            e.preventDefault();
            setError("Please enter a valid email format")
            return;
        }
        if (!password.trim()) {
            e.preventDefault();
            setPasswordError("Password is required");
            return;
        }

    }



    return (
        <div className={`${poppins.className} flex flex-col items-center w-full max-w-[500px]`}>
            {/* Top Navigation */}
            <Link href="/" className="text-gray-500 mb-6 flex items-center gap-2 hover:text-slate-900 transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            {/* Main Headings */}
            <div className="text-center mb-8 w-full">
                <h1 className="text-3xl font-bold mb-2 tracking-tight">Welcome to Mayfair HighStreet</h1>
                <p className="text-gray-500 text-sm">Sign in to your account or create a new one</p>
            </div>

            {/* The White Card Container */}
            <div className="bg-white w-full rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100">
                <h2 className="text-xl font-bold mb-1">Sign In</h2>
                <p className="text-sm text-gray-500 mb-6">Enter your credentials to access your account</p>

                <form className="space-y-5">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e)=>{setemail(e.target.value)
                                setError("")}}
                                placeholder="your@email.com"
                                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                                    error
                                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                        : 'border-gray-200 focus:ring-slate-900 focus:border-slate-900'
                                }`}                            />
                        </div>
                        {error && (
                            <p className="text-red-500 text-xs mt-1.5 font-medium">{error}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1.5">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError(""); // Clear error when user types
                                }}
                                placeholder="••••••••"
                                className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                                    passwordError
                                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                        : 'border-gray-200 focus:ring-slate-900 focus:border-slate-900'
                                }`}
                            />
                        </div>
                        {/* 3. Display password error message */}
                        {passwordError && (
                            <p className="text-red-500 text-xs mt-1.5 font-medium">{passwordError}</p>
                        )}
                    </div>

                    <Link href='/2fa' onClick={handlenavigation} className="block w-full text-center bg-[#0B0F19] text-[#C6CB3B] py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors mt-2">
                        Sign In
                    </Link>
                </form>

                <div className="mt-6 text-center">
                    <Link href="/ResetPassword" className="text-sm text-gray-500 hover:text-slate-900 font-medium">
                        Forgot your password?
                    </Link>
                </div>
            </div>
        </div>
    );
}