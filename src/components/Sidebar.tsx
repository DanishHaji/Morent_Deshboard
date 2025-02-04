'use client';

import { useState } from "react";
import { Home, Users, Calendar, Bell, Settings, CreditCard, FileText, LogOut, BarChart3, Menu, Car } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For redirecting after logout

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const router = useRouter(); // To handle redirect after logout

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/" },
    { name: "Drivers", icon: <Users size={20} />, path: "/drivers" },
    { name: "Available Cars", icon: <Car size={20} />, path: "/availableCars" },
    { name: "Booking", icon: <Calendar size={20} />, path: "/booking" },
    { name: "Notifications", icon: <Bell size={20} />, path: "/notificatio" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settingss" },
  ];

  const reportItems = [
    { name: "Payment Details", icon: <CreditCard size={20} />, path: "/payment" },
    { name: "Transactions", icon: <FileText size={20} />, path: "/transaction" },
    { name: "Car Reports", icon: <BarChart3 size={20} />, path: "/reports" },
  ];

  // Logout function
  const logout = () => {
    // Clear the cookies or localStorage, depending on how you store login info
    document.cookie = "isLoggedIn=; Max-Age=0"; // This removes the cookie
    router.push("/login"); // Redirect to login page
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        aria-label="mobile-button"
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-[960px] w-[240px] bg-gray-900 text-white flex flex-col p-4 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 lg:relative`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-0 py-4 justify-center">
          <Image 
            src="/logo.png" 
            alt="M Logo" 
            width={100} 
            height={100} 
            className="brightness-200 contrast-125" // Bright logo effect
          />
          <span className="text-2xl font-bold tracking-wide">ORENT</span>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <div
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === item.name ? "bg-gray-700" : "hover:bg-gray-800"
                }`}
                onClick={() => { setActiveTab(item.name); setIsOpen(false); }} // Close menu on mobile click
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          ))}

          {/* Report Section */}
          <hr className="border-gray-600 my-2" />
          <span className="text-gray-400 text-sm font-semibold px-3">Reports</span>

          {reportItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <div
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                  activeTab === item.name ? "bg-gray-700" : "hover:bg-gray-800"
                }`}
                onClick={() => { setActiveTab(item.name); setIsOpen(false); }} // Close menu on mobile click
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto">
          <button 
            className="flex items-center gap-3 p-3 w-full bg-red-600 rounded-lg hover:bg-red-700"
            onClick={logout} // Call logout function on click
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
