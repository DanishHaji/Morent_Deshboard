'use client';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import 'chart.js/auto';
import { Search, Bell, User } from 'lucide-react';

const CarManagement: React.FC = () => {
    const [carData] = useState([
        { id: 1, carNo: '6465', driver: 'Alex Noman', status: 'Completed', earning: '$35.44' },
        { id: 2, carNo: '5665', driver: 'Razib Rahman', status: 'Pending', earning: '$0.00' },
        { id: 3, carNo: '1755', driver: 'Luke Norton', status: 'In route', earning: '$23.50' },
    ]);

    const [carNumber, setCarNumber] = useState('');
    const [date, setDate] = useState('2022-11-20');
    const [time, setTime] = useState('10:00');

    const chartData = {
        labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [
            {
                label: 'This Year',
                data: [500, 700, 800, 600, 750, 900, 950, 1000],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                fill: true,
            },
            {
                label: 'Last Year',
                data: [400, 600, 700, 500, 650, 800, 850, 900],
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                fill: true,
            }
        ]
    };

    const chartOptions: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        elements: {
            line: {
                tension: 0.4,
                borderJoinStyle: 'round',
            },
            point: {
                radius: 6,
                backgroundColor: 'white',
                borderWidth: 3,
                borderColor: 'blue',
                pointStyle: 'circle',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months',
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Earnings ($)',
                }
            }
        }
    };

    return (
        <div className="max-w-[2800px] p-6 bg-white shadow-lg rounded-xl h-[950px] overflow-auto">
            {/* Navigation Bar */}
            <div className="flex justify-between items-center bg-gray-100 px-6 py-4 rounded-lg shadow-md">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                    <Search className="text-gray-500" size={20} />
                    <input type="text" placeholder="Search..." className="outline-none bg-transparent text-gray-700 w-56" />
                </div>
                <div className="flex items-center gap-6">
                    <Bell className="text-gray-600 cursor-pointer hover:text-gray-900" size={24} />
                    <User className="text-gray-600 cursor-pointer hover:text-gray-900" size={24} />
                </div>
            </div>

            {/* Filters and Inputs */}
            <div className="flex flex-wrap justify-between items-center mt-6 gap-y-4">
                <div className="flex flex-wrap items-center gap-3">
                    <label htmlFor="car-number" className="text-sm font-medium">Car number:</label>
                    <input
                        type="text"
                        id="car-number"
                        placeholder="Enter car number"
                        value={carNumber}
                        onChange={(e) => setCarNumber(e.target.value)}
                        className="border rounded px-3 py-2 text-sm w-40"
                    />
                    <input
                        aria-label="date"
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border rounded px-3 py-2 text-sm"
                    />
                    <input
                        aria-label="time"
                        type="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="border rounded px-3 py-2 text-sm"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded text-sm">
                        Check
                    </button>
                </div>
            </div>

            {/* Live Car Status Table */}
            <div className="mt-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Live Car Status</h2>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded text-sm">
                    Filter
                </button>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700 text-sm">
                                <th className="py-3 px-6 border">No.</th>
                                <th className="py-3 px-6 border">Car no.</th>
                                <th className="py-3 px-6 border">Driver</th>
                                <th className="py-3 px-6 border">Status</th>
                                <th className="py-3 px-6 border">Earning</th>
                                <th className="py-3 px-6 border"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carData.map(car => (
                                <tr key={car.id} className="border-b text-center text-gray-700 text-sm">
                                    <td className="py-3 px-6 border">{car.id}</td>
                                    <td className="py-3 px-6 border">{car.carNo}</td>
                                    <td className="py-3 px-6 border">{car.driver}</td>
                                    <td className="py-3 px-6 border">{car.status}</td>
                                    <td className="py-3 px-6 border">{car.earning}</td>
                                    <td className="py-3 px-6 border">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded text-xs">
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Earning Summary Chart */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6">Earning Summary</h2>
                <div className="w-full p-6 bg-gray-50 rounded-lg shadow-md">
                    <Line data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

export default CarManagement;
