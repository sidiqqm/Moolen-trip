import { listData } from "@/utils/dummy";
import { ArrowArcRightIcon } from "@phosphor-icons/react";
import { ArrowRight, MapPin, Proportions, Warehouse } from "lucide-react";
import Image from "next/image";
import React from "react";

const CardList = ({item}) => {

  return (
    <div className="flex flex-row w-full gap-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105">
      <div className="w-1/2">
        <Image src={item.img} alt="..." width={100} height={100} className="w-full rounded-2xl object-cover" />
      </div>

      <div className="w-1/2 flex flex-col">
        <h1 className="text-lg font-semibold capitalize">{item.title}</h1>
        <div className="flex items-center text-gray-500 text-sm my-2">
          <MapPin className="w-4 h-4 mr-1 text-orange-500" />
          {item.address}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <Warehouse className="w-4 h-4 mr-1 text-orange-500" />{item.bedroom} Bedroom
          </div>

          <div className="flex items-center text-gray-500 text-sm mb-2">
            <Proportions className="w-4 h-4 mr-1 text-orange-500" />
            {item.bathroom} Bathroom
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-orange-500">
              $340
            </span>
            <span className="text-gray-500 text-sm ml-1">/person</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
