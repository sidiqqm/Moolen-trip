import React from "react";

const Filter = () => {
  return (
    <div className="">
      <h1 className="text-xl font-semibold">Search result for</h1>
      <div className="">
        <h3>Location</h3>
        <input
          type="text"
          placeholder="City Location"
          id="location"
          name="location"
          className="w-full border border-slate-300 px-4 py-1 rounded-lg"
        />
      </div>

      <div className="flex gap-2 flex-col lg:flex-row">
        <div className="flex w-full gap-3">
          <div className="flex flex-col w-1/2">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              className="lg:w-28 px-4 py-2 border border-slate-300 rounded text-sm w-full"
            >
              <option value="any" key="any">
                any
              </option>
              <option value="buy" key="buy">
                buy
              </option>
              <option value="rent" key="rent">
                rent
              </option>
            </select>
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="property">Property</label>
            <select
              name="property"
              id="property"
              className="lg:w-28 px-4 py-2 border border-slate-300 rounded text-sm w-full"
            >
              <option value="apartment" key="apartment">
                apartment
              </option>
              <option value="house" key="house">
                house
              </option>
              <option value="condo" key="condo">
                condo
              </option>
              <option value="land" key="land">
                land
              </option>
            </select>
          </div>
        </div>

        <div className="">
          <h3>Min Price</h3>
          <input
            type="text"
            placeholder="any"
            id="min-price"
            name="min-price"
            className="w-full border border-slate-300 px-4 py-1 rounded-lg"
          />
        </div>

        <div className="">
          <h3>Max Price</h3>
          <input
            type="text"
            placeholder="any"
            id="max-price"
            name="max-price"
            className="w-full border border-slate-300 px-4 py-1 rounded-lg"
          />
        </div>

        <div className="mb-8">
          <h3>Bedroom</h3>
          <input
            type="text"
            placeholder="any"
            id="bedroom"
            name="bedroom"
            className="w-full border border-slate-300 px-4 py-1 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
