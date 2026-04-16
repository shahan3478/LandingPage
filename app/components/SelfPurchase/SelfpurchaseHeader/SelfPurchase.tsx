import React from 'react';

const workflowSteps = [
    { id: 1, title: '1. Place Order', description: 'Checkout using your virtual address.' },
    { id: 2, title: '2. Order Received', description: 'Package received at our warehouse.' },
    { id: 3, title: '3. Approve Order', description: 'Review and confirm details.' },
    { id: 4, title: '4. Pay Charges', description: 'Customs and shipping fees.' },
    { id: 5, title: '5. Shipped', description: 'Order dispatched for delivery.' },
    { id: 6, title: '6. Delivered', description: 'Delivered to your doorstep.' },
];

export default function SelfPurchaseHeader() {
    return (
        // Changed max-w-5xl to w-full to match image 1 width
        <div className="space-y-6 w-full">

            {/* 1. Page Header Section */}
            <div>
                <h1 className="text-2xl font-bold text-[#111111] mb-1">
                    Self Purchase Order
                </h1>
                <p className="text-sm text-gray-500">
                    Link orders you've purchased directly from UAE websites using your virtual address
                </p>
            </div>

            {/* 2. How it Works Card */}
            <div className="bg-white rounded-[20px] border border-gray-100 p-6 md:p-8 shadow-sm w-full">
                <h2 className="text-center text-[15px] font-bold text-gray-900 mb-8">
                    How Self Purchase Orders Work
                </h2>

                {/* Steps Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
                    {workflowSteps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center text-center">
                            {/* Step Indicator Circle */}
                            <div className="w-8 h-8 rounded-full bg-[#C6CB3B] text-white text-sm font-bold flex items-center justify-center mb-3">
                                {step.id}
                            </div>

                            {/* Step Content */}
                            <h3 className="text-[13px] font-bold text-gray-900 mb-1">
                                {step.title}
                            </h3>
                            <p className="text-[12px] text-gray-500 leading-snug px-2">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}