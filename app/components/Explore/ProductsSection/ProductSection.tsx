"use client";
import { useState, useEffect } from 'react';
import { Search, ChevronDown, X as CloseIcon, ChevronLeft, ChevronRight, Filter, ListFilter } from 'lucide-react';

export default function ProductSection({
                                           products,
                                           searchQuery, setSearchQuery,
                                           sortOption, setSortOption,
                                           activeTags, removeTag
                                       }: any) {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low"];

    // --- PAGINATION LOGIC ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // 4 columns * 3 rows = 12 items per page

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="flex-1 w-full min-w-0 flex flex-col gap-6 pb-20">

            {/* --- TOP BAR: SEARCH & SORT --- */}
            <div className="flex flex-row justify-between items-center gap-3 w-full">

                {/* Search Bar */}
                <div className="relative w-full md:max-w-[400px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#F5F5F5] border border-transparent focus:border-gray-300 rounded-full text-sm outline-none transition-colors"
                    />
                </div>

                {/* Actions Container */}
                <div className="flex items-center gap-2">

                    {/* --- MOBILE ONLY: Filter Icon Button --- */}
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="md:hidden p-2.5 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        <Filter className="w-5 h-5 text-black" />
                    </button>

                    {/* --- DESKTOP ONLY: "Sort by:" Text --- */}
                    <span className="text-sm text-gray-500 hidden md:block">Sort by:</span>

                    {/* Sort Dropdown Container */}
                    <div className="relative w-full md:w-40">

                        {/* --- MOBILE ONLY: Sort Trigger (Icon) --- */}
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="md:hidden p-2.5 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                            <ListFilter className="w-5 h-5 text-black" />
                        </button>

                        {/* --- DESKTOP ONLY: Sort Trigger (Text Button) --- */}
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="hidden md:flex w-full justify-between items-center bg-[#F5F5F5] border border-gray-200 px-4 py-2.5 rounded-md text-sm font-medium"
                        >
                            {sortOption}
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </button>

                        {/* Shared Dropdown Menu (Applies to both Mobile & Desktop) */}
                        {isSortOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white md:bg-[#F5F5F5] border border-gray-200 rounded-xl md:rounded-md shadow-lg z-20 overflow-hidden">
                                {sortOptions.map((opt, idx) => (
                                    <div key={opt}>
                                        <button
                                            onClick={() => { setSortOption(opt); setIsSortOpen(false); }}
                                            className={`w-full text-left px-4 py-3 text-sm transition-colors ${sortOption === opt ? 'bg-[#C5D040] text-black font-medium' : 'hover:bg-gray-50 text-gray-700'}`}
                                        >
                                            {opt}
                                        </button>
                                        {idx !== sortOptions.length - 1 && <hr className="border-gray-100 mx-0" />}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- ACTIVE FILTERS BAR --- */}
            <div className={`${isFilterOpen ? 'flex' : 'hidden'} md:flex w-full bg-[#EAEAEA] px-4 py-3 rounded-md justify-between items-center`}>
                <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-sm text-gray-500">Active Filters:</span>
                    {activeTags.length === 0 && <span className="text-sm text-gray-400 italic">None</span>}
                    {activeTags.map((tag: string) => (
                        <span key={tag} className="flex items-center gap-1 bg-[#D9D9D9] text-black px-3 py-1 rounded-full text-xs font-medium">
                            {tag}
                            <button onClick={() => removeTag(tag)} className="hover:text-red-500 transition-colors">
                                <CloseIcon className="w-3 h-3" />
                            </button>
                        </span>
                    ))}
                </div>
                <span className="text-sm font-medium whitespace-nowrap"><span className="font-bold">{products.length}</span> Results found.</span>
            </div>

            {/* --- PRODUCT GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.length === 0 ? (
                    <div className="col-span-full text-center py-20 text-gray-500">No products found matching your filters.</div>
                ) : (
                    currentProducts.map((product: any) => (
                        <div key={product.id} className="flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
                            {/* Product Image */}
                            <div className="w-full h-56 bg-gray-100 relative overflow-hidden p-4 flex items-center justify-center">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="object-contain w-full h-full mix-blend-multiply"
                                    onError={(e) => {
                                        // If the image fails to load (blocked by network), replace it with a gray box
                                        e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%23909090%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%23eeeeee%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22150%22%20y%3D%22210%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
                                    }}
                                />
                                {product.discountPercentage > 15 && (
                                    <div className="absolute top-2 left-2 bg-[#C5D040] text-black text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                                        Sale
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-sm text-gray-500 mb-1 line-clamp-1">{product.brand || "Mayfair"}</h3>
                                <h2 className="text-[15px] font-bold text-black mb-2 line-clamp-1">{product.title}</h2>

                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-[15px] font-bold text-black">{(product.price * 3.67).toFixed(2)} AED</span>
                                    {product.discountPercentage > 0 && (
                                        <span className="text-xs text-gray-400 line-through">
                                            {((product.price / (1 - product.discountPercentage/100)) * 3.67).toFixed(2)} AED
                                        </span>
                                    )}
                                </div>

                                {/* Buttons */}
                                <div className="mt-auto flex gap-2">
                                    <button className="w-[40%] border border-gray-300 rounded-full py-1.5 text-[11px] xl:text-xs font-medium hover:bg-black hover:text-white transition-colors">
                                        Order
                                    </button>
                                    <button className="w-[60%] border border-gray-300 rounded-full py-1.5 px-1 text-[11px] xl:text-xs font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                                        Visit Website
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* --- PAGINATION CONTROLS --- */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 mt-10">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 disabled:opacity-40 hover:bg-gray-100 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                                currentPage === page
                                    ? 'bg-[#111111] text-white border-transparent'
                                    : 'bg-transparent text-[#111111] border border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 disabled:opacity-40 hover:bg-gray-100 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
}