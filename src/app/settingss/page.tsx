'use client';

import React, { useState } from 'react';

const Settings = () => {
  // State to manage the settings options
  const [accountSettings, setAccountSettings] = useState({
    name: '',
    email: '',
  });

  const [notificationPreferences, setNotificationPreferences] = useState({
    driverNotifications: true,
    bookingNotifications: true,
  });

  const [password, setPassword] = useState('');

  // Handle changes in input fields
  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotificationPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="mt-4 text-lg">
        Here you can modify system settings and preferences.
      </p>

      {/* Account Settings */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={accountSettings.name}
              onChange={handleAccountChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={accountSettings.email}
              onChange={handleAccountChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <div>
            <input
              type="checkbox"
              name="driverNotifications"
              checked={notificationPreferences.driverNotifications}
              onChange={handleNotificationChange}
              id="driverNotifications"
              className="mr-2"
            />
            <label htmlFor="driverNotifications" className="text-sm">Receive Driver Notifications</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="bookingNotifications"
              checked={notificationPreferences.bookingNotifications}
              onChange={handleNotificationChange}
              id="bookingNotifications"
              className="mr-2"
            />
            <label htmlFor="bookingNotifications" className="text-sm">Receive Booking Notifications</label>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <div>
          <label className="block text-sm font-medium">New Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter new password"
          />
        </div>
      </div>

      {/* Save Settings Button */}
      <div className="mt-8">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
