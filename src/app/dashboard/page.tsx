'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Statistics from "@/components/Statistics";
import CarManagement from "@/components/CarManagemet";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (!document.cookie.includes("isLoggedIn=true")) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-grow gap-6 p-6">
        <Statistics />
        <CarManagement />
      </div>
    </div>
  );
};

export default Dashboard;
