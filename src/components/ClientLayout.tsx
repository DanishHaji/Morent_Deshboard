"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get current route
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted

  useEffect(() => {
    setIsMounted(true); // Ensure the component has mounted
  }, []);

  // Avoid rendering anything until the component is mounted
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Hide Navbar on login page */}
      {pathname !== "/login" && <Navbar />}
      {children}
    </>
  );
}
