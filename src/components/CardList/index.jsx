import { ArrowArcRightIcon } from "@phosphor-icons/react";
import { ArrowRight, MapPin, Proportions, Warehouse } from "lucide-react";
import Image from "next/image";
import React from "react";

const CardList = ({ item }) => {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="flex flex-col md:flex-row w-full gap-4 p-4 border border-gray-200 rounded-lg shadow-sm transition-transform duration-300 transform hover:shadow-md hover:scale-[1.02] origin-center">
        {/* Gambar */}
        <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
          <Image
            src={item.img}
            alt={item.title}
            width={100}
            height={100}
            className="w-full h-48 sm:h-56 md:h-full lg:h-64 xl:h-72 rounded-2xl object-cover"
          />
        </div>

        {/* Konten */}
        <div className="w-full md:w-1/2 lg:w-3/5 xl:w-2/3 flex flex-col justify-between">
          <div>
            <h1 className="text-lg lg:text-xl font-semibold capitalize">
              {item.title}
            </h1>

            <div className="flex items-center text-gray-500 text-sm lg:text-base my-2">
              <MapPin className="w-4 h-4 mr-1 text-orange-500" />
              {item.address}
            </div>

            <div className="flex flex-wrap gap-4 mb-2">
              <div className="flex items-center text-gray-500 text-sm lg:text-base">
                <Warehouse className="w-4 h-4 mr-1 text-orange-500" />
                {item.bedroom} Bedroom
              </div>

              <div className="flex items-center text-gray-500 text-sm lg:text-base">
                <Proportions className="w-4 h-4 mr-1 text-orange-500" />
                {item.bathroom} Bathroom
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline">
              <span className="text-2xl lg:text-3xl font-bold text-orange-500">
                $340
              </span>
              <span className="text-gray-500 text-sm lg:text-base ml-1">
                /person
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
