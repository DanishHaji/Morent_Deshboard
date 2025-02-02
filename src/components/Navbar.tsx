'use client';

import Link from "next/link";
import { Home, Users, Calendar, Bell, Settings } from 'lucide-react';
import Image from "next/image"; // Import Lucid icons

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo Section (Visible only on small screens) */}
        <div className="lg:hidden flex justify-center items-center w-full">
          <Image
            src="/logo.png" // Replace with the path to your logo image
            alt="Orent Logo"
            width={70} 
            height={70}
            className="brightness-200 contrast-125" // Adjust size of the logo
          />
          <span className="text-2xl font-bold">Orent</span>
        </div>

        {/* Menu Items (Visible only on large screens, aligned to the right) */}
        <div className="hidden lg:flex gap-6 justify-end w-full">
          <Link href="/" className="flex items-center hover:text-gray-400">
            <Home size={20} />
            <span className="ml-2">Dashboard</span>
          </Link>
          <Link href="/drivers" className="flex items-center hover:text-gray-400">
            <Users size={20} />
            <span className="ml-2">Drivers</span>
          </Link>
          <Link href="/booking" className="flex items-center hover:text-gray-400">
            <Calendar size={20} />
            <span className="ml-2">Booking</span>
          </Link>
          <Link href="/notificatio" className="flex items-center hover:text-gray-400">
            <Bell size={20} />
            <span className="ml-2">Notifications</span>
          </Link>
          <Link href="/settingss" className="flex items-center hover:text-gray-400">
            <Settings size={20} />
            <span className="ml-2">Settings</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
