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
    <div className="px-4 h-full pb-4">
      <div className="">
        <Filter />
        {data.map((item) => {
          return (
            <div className="mb-4" key={item.id}>
              <CardList item={item} key={item.id} />
            </div>
          );
        })}
      </div>
      <div className="">
        <Map items={data} />
      </div>
    </div>
  );
};

export default List;
