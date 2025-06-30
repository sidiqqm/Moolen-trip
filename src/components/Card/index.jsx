"use client";

import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Shadowpeak Canyon",
    location: "Colorado, USA",
    price: 240,
    image: "/holiday1.jpg",
    description: "Explore the mystical depths of this hidden canyon",
  },
  {
    id: 2,
    name: "Crimson Rift",
    location: "Wadi Rum Desert, Jordan",
    price: 400,
    image: "/holiday2.jpg",
    description: "Discover ancient landscapes and traditional boats",
  },
  {
    id: 3,
    name: "Whispering Dunes",
    location: "Namib Desert, Namibia",
    price: 300,
    image: "/holiday3.jpg",
    description: "Experience pristine beaches and crystal waters",
  },
  {
    id: 4,
    name: "Frostveil Summit",
    location: "Svalbard, Norway",
    price: 300,
    image: "/holiday4.jpg",
    description: "Relax in paradise with hammocks and palm trees",
  },
  {
    id: 5,
    name: "The Obsidian Hollow",
    location: "Iceland's Highlands",
    price: 250,
    image: "/holiday5.jpg",
    description: "Explore dramatic coastal architecture",
  },
  {
    id: 6,
    name: "Stormbreaker Isles",
    location: "Faroe Islands, Denmark",
    price: 450,
    image: "/holiday6.jpg",
    description: "Witness breathtaking sunset views over rugged coastlines",
  },
];

export default function TravelDestinations() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleViewDetails = (destinationId) => {
    console.log(`Viewing details for destination ${destinationId}`);
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Destinations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Embark on unforgettable journeys to the world's most breathtaking
            locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                hoveredCard === destination.id ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                  {destination.location}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {destination.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-orange-500">
                      ${destination.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">/person</span>
                  </div>

                  <button
                    onClick={() => handleViewDetails(destination.id)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 lg:py-2 rounded-full font-medium transition-all duration-200 flex items-center group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={"/list"} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
            Load More Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}
