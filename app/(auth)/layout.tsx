// app/(auth)/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-4 text-slate-900 font-sans">
            {/* This max-width container keeps all your auth forms uniform */}
            <div className="w-full flex flex-col items-center">
                {children}
            </div>
        </main>
    );
}