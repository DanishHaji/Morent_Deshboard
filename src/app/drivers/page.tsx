import Image from 'next/image';
import React from 'react';

const dummyDrivers = [
  {
    _id: '1',
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    email: 'john.doe@gmail.com',
    phoneNumber: '123-456-7890',
    licenseNumber: 'ABC123456',
    licenseExpiryDate: '2025-06-01T00:00:00.000Z',
    assignedCar: { _type: 'reference', _ref: 'car_1' },
    address: '123 Main St, Springfield',
    profileImage: '/1.jpeg',
    status: 'available',
    createdAt: '2024-02-01T12:00:00.000Z',
  },
  {
    _id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    fullName: 'Jane Smith',
    email: 'jane.smith@gmail.com',
    phoneNumber: '234-567-8901',
    licenseNumber: 'XYZ987654',
    licenseExpiryDate: '2026-03-15T00:00:00.000Z',
    assignedCar: { _type: 'reference', _ref: 'car_2' },
    address: '456 Elm St, Springfield',
    profileImage: '/2.jpeg',
    status: 'on_duty',
    createdAt: '2024-02-01T12:00:00.000Z',
  },
  {
    _id: '3',
    firstName: 'Michael',
    lastName: 'Brown',
    fullName: 'Michael Brown',
    email: 'michael.brown@gmail.com',
    phoneNumber: '345-678-9012',
    licenseNumber: 'LMN345678',
    licenseExpiryDate: '2025-12-25T00:00:00.000Z',
    assignedCar: { _type: 'reference', _ref: 'car_3' },
    address: '789 Oak St, Springfield',
    profileImage: '/3.jpg',
    status: 'off_duty',
    createdAt: '2024-02-01T12:00:00.000Z',
  },
];

const Drivers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Drivers</h1>
      <p className="mt-4 text-lg">
        Manage and view the list of drivers. You can add, edit, or remove drivers from here.
      </p>
      {/* Driver List */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyDrivers.map((driver) => (
          <div
            key={driver._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300"
          >
            <Image
              src={driver.profileImage}
              alt={`${driver.firstName} ${driver.lastName}`}
              width={200}
              height={200}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{driver.fullName}</h2>
            <p className="text-gray-600 text-center">{driver.email}</p>
            <p className="text-gray-600 text-center">{driver.phoneNumber}</p>
            <p className="text-gray-600 text-center mt-2">
              <strong>Status:</strong> {driver.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drivers;
