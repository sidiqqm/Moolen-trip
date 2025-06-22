"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Pin from "./Pin";
import "leaflet/dist/leaflet.css";

export default function Map({items}) {
  return (
    <MapContainer
      center={[52.479, -1.90269]}
      zoom={7}
      scrollWheelZoom={false}
      className="w-full h-96 lg:h-[calc(100vh-4rem)] rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}
