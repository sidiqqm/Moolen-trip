"use client";

import CardList from "@/components/CardList";
import Filter from "@/components/Filter";
// import Map from "@/components/Map";
import { listData } from "@/utils/dummy";
import dynamic from "next/dynamic";
import React from "react";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const List = () => {
  const data = listData;

  return (
    <div className="lg:px-16 px-4 h-full pb-4 lg:flex lg:h-screen">
      <div className="lg:w-1/2 lg:h-screen lg:overflow-y-auto lg:pr-4">
        <Filter />
        {data.map((item) => {
          return (
            <div className="mb-4" key={item.id}>
              <CardList item={item} key={item.id} />
            </div>
          );
        })}
      </div>
      <div className="lg:w-1/2 z-0 pl-4">
        <Map items={data} />
      </div>
    </div>
  );
};

export default List;
