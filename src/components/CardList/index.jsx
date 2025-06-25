import { ArrowArcRightIcon } from "@phosphor-icons/react";
import { ArrowRight, MapPin, Proportions, Warehouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardList = ({ item }) => {
  return (
    <Link
      href={`/detail/${item.id}`}
      className="w-full max-w-full overflow-hidden cursor-pointer"
    >
      <div className="flex flex-col md:flex-row w-full gap-4 p-4 border border-gray-200 rounded-lg shadow-sm transition-transform duration-300 transform hover:shadow-md hover:scale-[1.02] origin-center">
        {/* Gambar - Bagian yang diperbaiki */}
        <div className="w-full md:w-1/2 relative aspect-video min-h-[200px]">
          <Image
            src={item.img}
            alt={item.title}
            fill
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-2xl object-cover"
            placeholder={item.imgBlur ? "blur" : "empty"}
            blurDataURL={item.imgBlur || undefined}
          />
        </div>

        {/* Konten */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="flex flex-col md:gap-6">
            <h1 className="text-lg md:text-xl font-semibold capitalize">
              {item.title}
            </h1>

            <div className="">
              <div className="flex items-center text-gray-500 text-sm md:text-base my-2">
                <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                {item.address}
              </div>

              <div className="flex flex-wrap gap-4 mb-2">
                <div className="flex items-center text-gray-500 text-sm md:text-base">
                  <Warehouse className="w-4 h-4 mr-1 text-orange-500" />
                  {item.bedroom} Bedroom
                </div>

                <div className="flex items-center text-gray-500 text-sm md:text-base">
                  <Proportions className="w-4 h-4 mr-1 text-orange-500" />
                  {item.bathroom} Bathroom
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline">
              <span className="text-2xl lg:text-3xl font-bold text-orange-500">
                ${item.price}
              </span>
              <span className="text-gray-500 text-sm lg:text-base ml-1">
                /person
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardList;
