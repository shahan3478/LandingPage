"use client";
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function FilterSidebar({
                                          // We default the arrays to [] to prevent "Cannot read properties of undefined" errors
                                          selectedCategory = "All Categories",
                                          setSelectedCategory,
                                          selectedBrands = [],
                                          setSelectedBrands,
                                          selectedTags = [],
                                          setSelectedTags,
                                          setPriceRange
                                      }: any) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-filter-sidebar', handleOpen);
        return () => window.removeEventListener('open-filter-sidebar', handleOpen);
    }, []);

    // Local state for UI functionality
    const [showMoreBrands, setShowMoreBrands] = useState<boolean>(false);
    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");

    // YOUR EXACT ORIGINAL ARRAYS
    const categories = [
        "All Categories", "Electronics", "Fashion & Clothing",
        "Beauty & Personal Care", "Home & Garden", "Sports & Outdoors",
        "Books & Media", "Toys & Games", "Events & Concerts", "Other"
    ];

    const brands = ["One", "On Cloud", "Zara", "H&M", "Nike"];
    const extraBrands = ["Adidas", "Puma"];

    const tags = [
        "Game", "iPhone", "TV", "Asus Laptops", "Macbook", "SSD",
        "Graphics Card", "Power Bank", "Smart TV", "Speaker", "Tablet",
        "Microwave", "Samsung"
    ];

    // --- Interaction Handlers ---

    const handleBrandToggle = (brand: string) => {
        if (setSelectedBrands) {
            setSelectedBrands((prev: string[]) =>
                prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
            );
        }
    };

    const handleTagToggle = (tag: string) => {
        if (setSelectedTags) {
            setSelectedTags((prev: string[]) =>
                prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
            );
        }
    };

    const handleApplyPrice = () => {
        if (setPriceRange) {
            setPriceRange({ min: minPrice, max: maxPrice });
        }
    };

    const handleResetPrice = () => {
        setMinPrice("");
        setMaxPrice("");
        if (setPriceRange) {
            setPriceRange({ min: "", max: "" });
        }
    };

    const handleClearAll = () => {
        if (setSelectedCategory) setSelectedCategory("All Categories");
        if (setSelectedBrands) setSelectedBrands([]);
        if (setSelectedTags) setSelectedTags([]);
        handleResetPrice();
    };

    // --- Content Sections ---

    const CategoryContent = (
        <div className="flex flex-col">
            <h3 className="text-[15px] font-bold uppercase pb-4 mb-4 border-b border-gray-200 tracking-wide text-center">Category</h3>
            <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-gray-400 group-hover:border-black transition-colors">
                            <input
                                type="radio"
                                name="category"
                                value={cat}
                                checked={selectedCategory === cat}
                                onChange={(e) => setSelectedCategory && setSelectedCategory(e.target.value)}
                                className="appearance-none"
                            />
                            {selectedCategory === cat && (
                                <div className="w-[10px] h-[10px] rounded-full bg-[#E5D06A]"></div>
                            )}
                        </div>
                        <span className={`text-sm ${selectedCategory === cat ? 'font-bold text-black' : 'text-gray-700 font-medium'}`}>
                            {cat}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );

    const FiltersContent = (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <h3 className="text-[15px] font-bold uppercase tracking-wide">Filters</h3>
                <button onClick={handleClearAll} className="text-[11px] text-gray-500 hover:text-black transition-colors">
                    Clear all filter
                </button>
            </div>

            {/* PRICE RANGE */}
            <div>
                <h4 className="text-[13px] font-bold mb-3">Price Range</h4>
                <div className="flex flex-col gap-3">
                    <input
                        type="number"
                        placeholder="Min price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-gray-50/50"
                    />
                    <input
                        type="number"
                        placeholder="Max price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-gray-50/50"
                    />
                    <div className="flex gap-2 mt-1">
                        <button onClick={handleApplyPrice} className="flex-1 bg-[#E2E4E5] hover:bg-gray-300 text-black py-2 rounded-md text-xs font-bold transition-colors">
                            Apply
                        </button>
                        <button onClick={handleResetPrice} className="flex-1 bg-transparent hover:bg-gray-100 text-black py-2 rounded-md text-xs font-bold transition-colors border border-transparent hover:border-gray-200">
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* POPULAR BRANDS */}
            <div>
                <h4 className="text-[13px] font-bold mb-3">Popular Brands</h4>
                <div className="flex flex-col gap-3">
                    {(showMoreBrands ? [...brands, ...extraBrands] : brands).map((brand) => (
                        <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center w-5 h-5 border border-gray-400 rounded-[3px] group-hover:border-black transition-colors">
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandToggle(brand)}
                                    className="appearance-none w-full h-full cursor-pointer"
                                />
                                {selectedBrands.includes(brand) && (
                                    <svg className="w-3 h-3 text-black absolute pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                )}
                            </div>
                            <span className="text-sm text-gray-700">{brand}</span>
                        </label>
                    ))}
                    <button
                        onClick={() => setShowMoreBrands(!showMoreBrands)}
                        className="text-xs font-medium text-black text-left mt-1 hover:underline w-max"
                    >
                        {showMoreBrands ? "- Show Less" : `+ Show More (${extraBrands.length})`}
                    </button>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* POPULAR TAGS */}
            <div>
                <h4 className="text-[13px] font-bold mb-3">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                    {/* The comment that caused the crash has been removed from inside the map return */}
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => handleTagToggle(tag)}
                            className={`px-3 py-1.5 border border-gray-200 rounded-md text-[11px] transition-colors ${
                                selectedTags.includes(tag)
                                    ? 'bg-black text-white border-black'
                                    : 'text-gray-600 hover:border-black hover:text-black bg-white'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <aside className="hidden md:flex flex-col gap-4 w-[280px] flex-shrink-0 sticky top-6 h-[calc(100vh-3rem)] overflow-y-auto pr-4 custom-scrollbar pb-10">                <div className="bg-white border border-gray-200 rounded-xl p-6">
                    {CategoryContent}
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                    {FiltersContent}
                </div>
            </aside>

            {/* --- MOBILE VIEW --- */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={`fixed bottom-0 left-0 w-full bg-white z-50 rounded-t-3xl shadow-xl transition-transform duration-300 ease-in-out md:hidden h-[85vh] flex flex-col ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <div className="flex justify-between items-center p-5 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                        <h2 className="text-lg font-bold">Filters</h2>
                        <button onClick={handleClearAll} className="text-xs text-gray-500 hover:text-black transition-colors">
                            Clear all
                        </button>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="p-5 overflow-y-auto overscroll-contain flex-1 flex flex-col gap-8">
                    {CategoryContent}
                    {FiltersContent}
                </div>
            </div>
        </>
    );
}