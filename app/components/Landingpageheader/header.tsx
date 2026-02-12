import Image from "next/image";

export default function Header() {
  return (
    <header className="w-screen h-screen flex flex-col">
      {/* 1. Announcement bar */}
      <div className="bg-black text-white text-center py-2.5 text-sm shrink-0">
        Born in Dubai. Designed for the World, Concierge Commerce - Free Dubai
        Mailbox on Subscription service
      </div>

      
      <div
        className="flex flex-col"
        style={{
          background: "linear-gradient(135deg, #fef9e6 0%, #fefce8 50%, #ffffff 100%)",
        }}
      >
        {/* Logo row  */}
       <div className="flex items-center justify-between px-6 py-2 ">
          <div className="" />
          <div className="flex justify-center">
            <Image
              src="/logo 1.png"
              alt="Mayfair Highstreet"
              width={220}
              height={220}
            />
          </div>
          <div className=" flex justify-end gap-3">
            <button className="px-5 py-2 rounded-full border-2 border-black text-black text-sm font-medium">
              Login
            </button>
            <button className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium">
              Shop Now
            </button>
          </div>
        </div>

        {/* Hero content: headline, features, CTA  */}
        <div className="flex flex-col items-center mt-10 px-6 pb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black text-center mb-8">
            All of Dubai delivered to your doorstep
          </h1>

          <ul className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-10 text-black">
            <li className="flex items-center gap-2">
              <span className="text-xl"></span>
              <span>Authentic brands & products</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl"></span>
              <span>4 days delivery</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl"></span>
              <span>Free Dubai Mailbox on Subscription</span>
            </li>
          </ul>

          <button className="px-8 py-4 rounded-full bg-black text-white text-lg font-medium">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
} 