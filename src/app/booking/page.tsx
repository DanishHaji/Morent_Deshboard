'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Dummy data (replace this with your actual Sanity data fetching logic)
const dummyBookings = [
  {
    customerName: 'John Doe',
    car: {
      name: 'Tesla Model 3',
      imageUrl: '/1.jpeg',
    },
    bookingDate: '2025-02-15T10:00:00Z',
    returnDate: '2025-02-20T10:00:00Z',
    status: 'confirmed',
  },
  {
    customerName: 'Jane Smith',
    car: {
      name: 'Ford Mustang',
      imageUrl: '/2.jpeg',
    },
    bookingDate: '2025-02-18T09:00:00Z',
    returnDate: '2025-02-22T09:00:00Z',
    status: 'pending',
  },
  {
    customerName: 'Mark Johnson',
    car: {
      name: 'BMW 5 Series',
      imageUrl: '/3.jpg',
    },
    bookingDate: '2025-02-20T15:00:00Z',
    returnDate: '2025-02-25T15:00:00Z',
    status: 'cancelled',
  },
];

const Booking = () => {
  const [bookings] = useState(dummyBookings);

  useEffect(() => {
    // Fetch bookings from Sanity or your API if needed
    // setBookings(fetchedBookings);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Bookings</h1>
      <p className="mt-4 text-lg">
        Manage and view bookings here. You can add, view, or cancel bookings.
      </p>
      <div className="mt-6">
        {bookings.length > 0 ? (
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border p-2 text-left">Customer</th>
                <th className="border p-2 text-left">Car</th>
                <th className="border p-2 text-left">Booking Date</th>
                <th className="border p-2 text-left">Return Date</th>
                <th className="border p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{booking.customerName}</td>
                  <td className="p-2">
                    <div className="flex items-center">
                      <Image
                        src={booking.car.imageUrl}
                        alt={booking.car.name}
                        width={200}
                        height={200}
                        className="w-12 h-12 object-cover rounded-md mr-3"
                      />
                      {booking.car.name}
                    </div>
                  </td>
                  <td className="p-2">{new Date(booking.bookingDate).toLocaleDateString()}</td>
                  <td className="p-2">{new Date(booking.returnDate).toLocaleDateString()}</td>
                  <td className="p-2">{booking.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No bookings available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Booking;
