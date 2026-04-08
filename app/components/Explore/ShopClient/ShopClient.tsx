"use client";
import { useState, useEffect } from "react";
import { FilterSidebar } from '@/app/components/Explore/SideBar';
import {ProductSection} from '@/app/components/Explore/ProductsSection';

// --- BULLETPROOF FALLBACK DATA ---
// If your network blocks the API, the app will instantly load this data instead so you can keep working!
 const fallbackProducts = [
    // --- ELECTRONICS & SPECIFIC TAGS ---
    { id: 1, title: "Apple iPhone 15 Pro", brand: "Apple", category: "Electronics", price: 999, discountPercentage: 5, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=iPhone", tags: ["iphone", "smartphone", "phone"] },
    { id: 2, title: "Samsung Galaxy S24 Ultra", brand: "Samsung", category: "Electronics", price: 1199, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Galaxy", tags: ["samsung", "smartphone", "phone"] },
    { id: 3, title: "Asus ROG Zephyrus G14", brand: "Asus", category: "Electronics", price: 1499, discountPercentage: 10, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Asus+ROG", tags: ["asus laptops", "laptop", "game"] },
    { id: 4, title: "Apple MacBook Pro 16-inch", brand: "Apple", category: "Electronics", price: 2499, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=MacBook", tags: ["macbook", "laptop"] },
    { id: 5, title: "Samsung 990 Pro 2TB SSD", brand: "Samsung", category: "Electronics", price: 160, discountPercentage: 15, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Samsung+SSD", tags: ["samsung", "ssd", "hardware"] },
    { id: 6, title: "Nvidia RTX 4090", brand: "Nvidia", category: "Electronics", price: 1599, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=RTX+4090", tags: ["graphics card", "game"] },
    { id: 7, title: "Anker Prime Power Bank", brand: "Anker", category: "Electronics", price: 129, discountPercentage: 20, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Power+Bank", tags: ["power bank", "battery"] },
    { id: 8, title: "Samsung 65-inch QLED", brand: "Samsung", category: "Electronics", price: 899, discountPercentage: 10, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Samsung+TV", tags: ["samsung", "smart tv", "tv"] },
    { id: 9, title: "JBL Flip 6 Portable", brand: "JBL", category: "Electronics", price: 99, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=JBL+Speaker", tags: ["speaker", "audio"] },
    { id: 10, title: "Samsung Galaxy Tab S9", brand: "Samsung", category: "Electronics", price: 799, discountPercentage: 5, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Galaxy+Tab", tags: ["samsung", "tablet"] },
    { id: 11, title: "Panasonic Microwave Oven", brand: "Panasonic", category: "Home & Garden", price: 149, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Microwave", tags: ["microwave", "appliance"] },

    // --- YOUR SPECIFIC CLOTHING & SHOE BRANDS ---
    { id: 12, title: "Zara Winter Puffer Jacket", brand: "Zara", category: "Fashion & Clothing", price: 120, discountPercentage: 25, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Zara+Jacket", tags: ["clothing"] },
    { id: 13, title: "Zara Summer Flowy Dress", brand: "Zara", category: "Fashion & Clothing", price: 59, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Zara+Dress", tags: ["clothing"] },
    { id: 14, title: "H&M Basic Cotton T-Shirt", brand: "H&M", category: "Fashion & Clothing", price: 15, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=H%26M+Shirt", tags: ["clothing"] },
    { id: 15, title: "H&M Slim Fit Jeans", brand: "H&M", category: "Fashion & Clothing", price: 39, discountPercentage: 10, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=H%26M+Jeans", tags: ["clothing", "pants"] },
    { id: 16, title: "Nike Air Force 1 '07", brand: "Nike", category: "Sports & Outdoors", price: 110, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Nike+AF1", tags: ["shoes"] },
    { id: 17, title: "Nike Pro Dri-FIT Tights", brand: "Nike", category: "Sports & Outdoors", price: 50, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Nike+Tights", tags: ["clothing", "sport"] },
    { id: 18, title: "Adidas Ultraboost Light", brand: "Adidas", category: "Sports & Outdoors", price: 190, discountPercentage: 15, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Ultraboost", tags: ["shoes", "sport"] },
    { id: 19, title: "Puma Suede Classic XXI", brand: "Puma", category: "Sports & Outdoors", price: 75, discountPercentage: 20, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Puma+Suede", tags: ["shoes"] },
    { id: 20, title: "On Cloud 5 Running Shoe", brand: "On Cloud", category: "Sports & Outdoors", price: 140, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=On+Cloud", tags: ["shoes", "sport"] },
    { id: 21, title: "One Performance Shorts", brand: "One", category: "Sports & Outdoors", price: 45, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=One+Shorts", tags: ["clothing", "sport"] },

    // --- OTHER CATEGORIES ---
    { id: 22, title: "Gucci Bloom Eau de Parfum", brand: "Gucci", category: "Beauty & Personal Care", price: 155, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Gucci", tags: ["perfume", "beauty"] },
    { id: 23, title: "L'Oreal Revitalift Cream", brand: "L'Oreal", category: "Beauty & Personal Care", price: 25, discountPercentage: 10, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Face+Cream", tags: ["skincare", "cream"] },
    { id: 24, title: "PlayStation 5 Console", brand: "Sony", category: "Toys & Games", price: 499, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=PS5+Console", tags: ["game", "console"] },
    { id: 25, title: "LEGO Star Wars", brand: "LEGO", category: "Toys & Games", price: 169, discountPercentage: 5, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=LEGO", tags: ["toys"] },
    { id: 26, title: "Dune by Frank Herbert", brand: "Penguin", category: "Books & Media", price: 18, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Dune+Book", tags: ["book", "sci-fi"] },
    { id: 27, title: "The Great Gatsby", brand: "Scribner", category: "Books & Media", price: 12, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Gatsby", tags: ["book", "classic"] },
    { id: 28, title: "Coldplay VIP Tickets", brand: "Ticketmaster", category: "Events & Concerts", price: 350, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Tickets", tags: ["concert", "tickets"] },
    { id: 29, title: "Patio Furniture Set", brand: "HomeDec", category: "Home & Garden", price: 599, discountPercentage: 15, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Patio+Set", tags: ["furniture", "garden"] },
    { id: 30, title: "Generic Multi-Tool", brand: "Unknown", category: "Other", price: 22, discountPercentage: 0, thumbnail: "https://fakeimg.pl/400x400/eeeeee/909090/?text=Multi-Tool", tags: ["tool", "misc"] }
];
export default function ShopClient() {
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    const [priceRange, setPriceRange] = useState({ min: "", max: "" });

    // Shared State for Filtering
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("Newest");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // 1. Fetch API Data (With Bulletproof Fallback)
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(data => {
                setAllProducts(data.products);
                setFilteredProducts(data.products);
            })
            .catch(error => {
                console.warn("API blocked by network. Loading fallback mock data instead.");
                setAllProducts(fallbackProducts);
                setFilteredProducts(fallbackProducts);
            });
    }, []);

    // 2. Comprehensive Filter Logic
    useEffect(() => {
        let result = [...allProducts];

        if (searchQuery) {
            result = result.filter((p: any) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        if (selectedCategory !== "All Categories") {
            const catStr = selectedCategory.toLowerCase().split(' ')[0];
            result = result.filter((p: any) =>
                p.category.toLowerCase().includes(catStr) ||
                p.title.toLowerCase().includes(catStr)
            );
        }

        if (priceRange.min !== "") {
            result = result.filter((p: any) => (p.price * 3.67) >= Number(priceRange.min));
        }
        if (priceRange.max !== "") {
            result = result.filter((p: any) => (p.price * 3.67) <= Number(priceRange.max));
        }

        if (selectedBrands.length > 0) {
            result = result.filter((p: any) =>
                selectedBrands.some(brand =>
                    (p.brand && p.brand.toLowerCase().includes(brand.toLowerCase())) ||
                    p.title.toLowerCase().includes(brand.toLowerCase())
                )
            );
        }

        if (selectedTags.length > 0) {
            result = result.filter((p: any) =>
                selectedTags.some(tag => {
                    const searchTag = tag.toLowerCase();
                    const exactMatch =
                        p.title.toLowerCase().includes(searchTag) ||
                        p.category.toLowerCase().includes(searchTag) ||
                        (p.brand && p.brand.toLowerCase().includes(searchTag)) ||
                        (p.tags && p.tags.some((t: string) => t.toLowerCase().includes(searchTag)));

                    if (exactMatch) return true;

                    const tagWords = searchTag.split(' ');
                    if (tagWords.length > 1) {
                        return tagWords.every(word => {
                            const safeWord = (word.endsWith('s') && word.length > 3) ? word.slice(0, -1) : word;
                            return (
                                p.title.toLowerCase().includes(safeWord) ||
                                p.category.toLowerCase().includes(safeWord) ||
                                (p.brand && p.brand.toLowerCase().includes(safeWord)) ||
                                (p.tags && p.tags.some((t: string) => t.toLowerCase().includes(safeWord)))
                            );
                        });
                    }
                    return false;
                })
            );
        }

        if (sortOption === "Price: Low to High") {
            result.sort((a: any, b: any) => a.price - b.price);
        } else if (sortOption === "Price: High to Low") {
            result.sort((a: any, b: any) => b.price - a.price);
        } else {
            result.sort((a: any, b: any) => b.id - a.id);
        }

        setFilteredProducts(result);
    }, [searchQuery, selectedCategory, selectedTags, selectedBrands, priceRange, sortOption, allProducts]);

    const removeTag = (tagToRemove: string) => {
        setSelectedTags(prev => prev.filter(t => t !== tagToRemove));
    };

    return (
        <div className="max-w-[1600px] mx-auto w-full px-4 md:px-8 py-6 flex flex-col md:flex-row items-start gap-8">
            <FilterSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                setPriceRange={setPriceRange}
            />

            <ProductSection
                products={filteredProducts}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                sortOption={sortOption}
                setSortOption={setSortOption}
                activeTags={selectedTags}
                removeTag={removeTag}
            />
        </div>
    );
}