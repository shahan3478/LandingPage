"use client";

import { usePathname } from "next/navigation";

export default function AnnouncementBar() {
    const pathname = usePathname();

    // Default colors for the landing page
    let bgColor = "bg-black";
    let textColor = "text-[#F6F999]";

    // Dynamically change colors based on the route you create later
    if (pathname === "/ShopPage" || pathname === "/ExplorePage") {

        bgColor = "bg-[#BBBF49]"; // Example background
        textColor = "text-black"; // Example text color
    }
    // else if (pathname === "/third-page") {
    //     bgColor = "bg-blue-600";
    //     textColor = "text-white";
    // }

    return (
        <div className={`${bgColor} ${textColor} text-center py-2.5 text-xs md:text-sm shrink-0 px-4 transition-colors duration-300`}>
            <span className="hidden md:inline">Born in Dubai. Designed for the World, Concierge Commerce - </span>
            Free Dubai Mailbox on Subscription service
        </div>
    );
}