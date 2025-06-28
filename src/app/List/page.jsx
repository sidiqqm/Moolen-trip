"use client";

import CardList from "@/components/CardList";
import Filter from "@/components/Filter";
import { listData } from "@/utils/dummy";
import dynamic from "next/dynamic";
import React from "react";
import Loading from "../loading";
import ProtectedRoute from "@/components/ProtectedLayout";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <Loading />,
});

const List = () => {
  const data = listData;

  return (
    <ProtectedRoute>
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
    </ProtectedRoute>
  );
};

export default List;
