import React from 'react';

// Dummy Data for Car Reports
const carReports = [
  {
    carId: 'CAR001',
    model: 'Toyota Corolla',
    status: 'Available',
    condition: 'Good',
    mileage: '45,000 km',
    lastService: '2025-01-15',
  },
  {
    carId: 'CAR002',
    model: 'Honda Civic',
    status: 'Rented',
    condition: 'Excellent',
    mileage: '30,000 km',
    lastService: '2025-01-10',
  },
  {
    carId: 'CAR003',
    model: 'BMW 3 Series',
    status: 'Available',
    condition: 'Fair',
    mileage: '80,000 km',
    lastService: '2024-12-05',
  },
];

const CarReports = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Car Reports</h1>
      <p className="mt-4 text-lg">
        View car reports, including status, condition, and other relevant data.
      </p>

      {/* Car Reports Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Car ID</th>
              <th className="px-4 py-2 text-left text-gray-600">Model</th>
              <th className="px-4 py-2 text-left text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-gray-600">Condition</th>
              <th className="px-4 py-2 text-left text-gray-600">Mileage</th>
              <th className="px-4 py-2 text-left text-gray-600">Last Service</th>
            </tr>
          </thead>
          <tbody>
            {carReports.map((car, index) => (
              <tr
                key={car.carId}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-4 py-2 text-sm">{car.carId}</td>
                <td className="px-4 py-2 text-sm">{car.model}</td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      car.status === 'Available'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {car.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm">{car.condition}</td>
                <td className="px-4 py-2 text-sm">{car.mileage}</td>
                <td className="px-4 py-2 text-sm">{car.lastService}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarReports;
