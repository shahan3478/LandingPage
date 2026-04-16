import React from 'react';

const SelfPurchaseFlowForm = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-6 w-full ">
            {/* Form Header */}
            <div className="border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Self Purchase Flow
                </div>
                <p className="text-sm text-gray-600 mt-1">
                    Link orders you've purchased directly from UAE websites using your virtual address
                </p>
            </div>

            {/* Form Body */}
            <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Add Your Order</h3>
                <p className="text-sm text-gray-600 mb-6">
                    Have you purchased something from a UAE store using your Mayfair Highstreet address? Add the order details here so we can track it for you.
                </p>

                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5">
                    {/* Row 1 */}
                    <div className="col-span-1 md:col-span-1">
                        <label htmlFor="orderId" className="block text-sm font-semibold text-gray-900 mb-1.5">
                            Order ID <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="orderId"
                            placeholder="Enter Order ID"
                            className="w-full text-sm border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <label htmlFor="brandName" className="block text-sm font-semibold text-gray-900 mb-1.5">
                            Brand Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="brandName"
                            placeholder="e.g., Zara"
                            className="w-full text-sm border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <label htmlFor="productName" className="block text-sm font-semibold text-gray-900 mb-1.5">
                            Product Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="productName"
                            placeholder="e.g., Nike Air Max 90"
                            className="w-full text-sm border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="col-span-1 md:col-span-1">
                        <label htmlFor="quantity" className="block text-sm font-semibold text-gray-900 mb-1.5">
                            Quantity <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            placeholder="1"
                            className="w-full text-sm border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Description Field */}
                <div className="mt-6">
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-1.5">
                        Description <span className="text-gray-500">(Optional)</span>
                    </label>
                    <textarea
                        id="description"
                        rows={4}
                        placeholder="Write here"
                        className="w-full text-sm border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                {/* Invoice Files Upload */}
                <div className="mt-8">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Invoice Files <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center hover:border-gray-400 transition cursor-pointer">
                        <div className="inline-block text-blue-600 bg-blue-50 p-3 rounded-full mb-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                        </div>
                        <p className="font-semibold text-sm text-gray-900">Click to upload</p>
                        <p className="text-xs text-gray-500 mt-1">Images or PDF • ≤ 10MB each</p>
                        <p className="text-xs text-gray-500 mt-1">0/5 selected</p>
                    </div>
                </div>

                {/* Options (Gift Wrap & Insurance) */}
                <div className="flex items-center gap-10 mt-8 mb-6 border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                        <span className="text-sm font-medium text-gray-900">Gift Wrap (5%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                        <span className="text-sm font-medium text-gray-900">Insurance (7%)</span>
                    </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-start">
                    <button className="flex items-center gap-2 bg-black text-white text-sm font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                        Add Your Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelfPurchaseFlowForm;