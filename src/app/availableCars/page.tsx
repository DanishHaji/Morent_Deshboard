"use client"; // If using App Router

import { useEffect, useState } from "react";
import { getCars } from "@/sanity/lib/client"; // Adjust the import path if needed
import Image from "next/image";

interface Car {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  originalPrice?: number;
  tags: string[];
  imageUrl: string;
}

export default function AvailableCars() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function fetchCars() {
      const data = await getCars();
      setCars(data);
    }
    fetchCars();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div key={car._id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-4 rounded-lg group">
              <div className="relative">
                <Image
                  src={car.imageUrl} 
                  alt={car.name}
                  width={300}
                  height={200}
                  className=" object-contain rounded-lg mb-4 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xl font-semibold">Click for Details</p>
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-1">{car.name}</h2>
              <p className="text-gray-600 mb-2">{car.brand} - {car.type}</p>
              <p className="text-gray-700 text-lg font-semibold">{car.pricePerDay}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">No cars available at the moment.</p>
        )}
      </div>
    </div>
  );
}
