import CardList from "@/components/CardList";
import Filter from "@/components/Filter";
import { listData } from "@/utils/dummy";
import React from "react";

const List = () => {
  const data = listData;

  return (
    <div className="px-4 h-full">
      <Filter />
      {data.map((item) => {
        return (
          <div className="mb-4" key={item.id}>
            <CardList item={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
