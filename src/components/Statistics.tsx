import React from 'react';

const Statistics: React.FC = () => {
    const date = new Date();
    const formattedDate = date.toLocaleString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    return (
        <div className="flex flex-col h-[900px] w-full max-w-[400px] bg-gray-100 shadow-lg p-6 rounded-lg overflow-auto">
            <h1 className="text-2xl font-bold text-center mb-6 text-[#343A40]">
                Today's Statistics
            </h1>
            <p className="text-center text-gray-500 mb-4">{formattedDate}</p>

            {/* Income Section */}
            <div className="mb-6 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold text-[#343A40]">Income</h2>
                    <p className="text-gray-500 text-sm">Today</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700">Income: <span className="font-bold text-[#343A40]">$9460.00</span></p>
                    <p className="text-gray-500">Change: <span className="text-red-500 font-bold">↓ 1.5%</span></p>
                    <p className="text-gray-500">Compared to <span className="font-bold text-[#343A40]">$9940</span> yesterday</p>
                    <p className="text-gray-500">Last week income: <span className="font-bold text-[#343A40]">$25,658.00</span></p>
                </div>
            </div>

            {/* Expenses Section */}
            <div className="mb-6 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold text-[#343A40]">Expenses</h2>
                    <p className="text-gray-500 text-sm">Today</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700">Expenses: <span className="font-bold text-[#343A40]">$5660.00</span></p>
                    <p className="text-gray-500">Change: <span className="text-green-500 font-bold">↑ 2.5%</span></p>
                    <p className="text-gray-500">Compared to <span className="font-bold text-[#343A40]">$5240</span> yesterday</p>
                    <p className="text-gray-500">Last week expenses: <span className="font-bold text-[#343A40]">$22,658.00</span></p>
                </div>
            </div>

            {/* Hire vs Cancel Section */}
            <div className="hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#343A40]">Hire vs Cancel</h2>
                    <p className="text-gray-500 text-sm">Today</p>
                </div>
                <div className="relative w-64 h-64 mx-auto">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#007bff" strokeWidth="3.5" strokeDasharray="54 46" strokeDashoffset="0" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#dc3545" strokeWidth="3.5" strokeDasharray="20 80" strokeDashoffset="-54" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#28a745" strokeWidth="3.5" strokeDasharray="26 74" strokeDashoffset="-74" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-lg font-semibold">
                        <span className="text-blue-600">Hire 54%</span>
                        <span className="text-red-600">Cancel 20%</span>
                        <span className="text-green-600">Pending 26%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
