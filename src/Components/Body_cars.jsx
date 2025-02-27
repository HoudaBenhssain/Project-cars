import React from "react";
import { useState } from "react";
import { BiCar, BiGasPump, BiCog } from "react-icons/bi";
import img1 from "../../public/mercedes.png";
import img2 from "../../public/nissan-offer.png";
import img3 from "../../public/bmw-offer.png";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={car.image || "/placeholder.svg"}
        alt={car.name}
        className="w-full h-48 object-contain bg-white"
      />
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-bold text-[#1a237e] text-center">
          {car.name}
        </h3>
        <p className="text-center text-lg font-semibold">${car.price} / Day</p>

        <div className="flex justify-between items-center text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <BiCar className="text-[#FFA726]" />
            <span>{car.model}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiCog className="text-[#FFA726]" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <BiGasPump className="text-[#FFA726]" />
            <span>{car.mileage}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button className="bg-[#1a237e] text-white py-2 rounded hover:bg-[#1a237e]/90 transition-colors">
            RENT
          </button>
          <button className="bg-[#FFA726] text-white py-2 rounded hover:bg-[#FFA726]/90 transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const CarListing = () => {
  const [sortBy, setSortBy] = useState("default");

  const cars = [
    {
      name: "Tesla Malibu",
      price: "50.00",
      model: "Model 3",
      transmission: "Automatic",
      mileage: "20kmpl",
      image: img1,
    },
    {
      name: "Toyota Aventador",
      price: "50.00",
      model: "Model-2022",
      transmission: "Automatic",
      mileage: "20kmpl",
      image: img2,
    },
    {
      name: "BMW X3",
      price: "65.00",
      model: "Model-2022",
      transmission: "Automatic",
      mileage: "20kmpl",
      image: img3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[200px] bg-[#1a237e]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639418943732-d201ec1203ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Car Listing</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a237e]"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListing;
