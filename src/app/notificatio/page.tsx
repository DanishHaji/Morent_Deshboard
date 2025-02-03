'use client';

import React, { useState, useEffect } from 'react';

// Dummy Data (Replace this with your actual data fetching logic)
const dummyNotifications = [
  {
    type: 'system',
    message: 'The system will undergo maintenance from 2 AM to 4 AM tomorrow.',
    date: '2025-02-01T08:00:00Z',
    status: 'unread',
  },
  {
    type: 'driver',
    message: 'Your car has been approved for booking.',
    date: '2025-02-02T09:30:00Z',
    status: 'read',
  },
  {
    type: 'booking',
    message: 'A new booking has been confirmed for your car.',
    date: '2025-02-03T10:00:00Z',
    status: 'unread',
  },
];

const Notifications = () => {
  const [notifications] = useState(dummyNotifications);

  useEffect(() => {
    // Fetch notifications from your data source (like Sanity or API)
    // setNotifications(fetchedNotifications);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Notifications</h1>
      <p className="mt-4 text-lg">
        View the notifications for the system, drivers, and bookings here.
      </p>
      
      <div className="mt-6">
        {notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  notification.status === 'unread'
                    ? 'bg-blue-100 border-blue-300'
                    : 'bg-gray-100 border-gray-300'
                }`}
              >
                <div className="flex justify-between">
                  <div className="font-semibold text-lg">
                    {notification.type === 'system'
                      ? 'System Notification'
                      : notification.type === 'driver'
                      ? 'Driver Notification'
                      : 'Booking Notification'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(notification.date).toLocaleDateString()} {new Date(notification.date).toLocaleTimeString()}
                  </div>
                </div>
                <p className="mt-2">{notification.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
