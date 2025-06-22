"use client";
import { LocationEdit, MapPin, Proportions, Warehouse } from "lucide-react";
import Link from "next/link";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import Image from "next/image";

const createCustomIcon = (color = "#000000", size = 25) => {
  const iconSvg = renderToStaticMarkup(
    <MapPin color={color} size={size} strokeWidth={2.5} />
  );

  return new L.DivIcon({
    html: iconSvg,
    iconSize: [size, size],
    className: "",
  });
};

const Pin = ({ item }) => {
  const darkIcon = createCustomIcon("#2d3748", 30); // Warna lebih gelap
  return (
    <Marker position={[item.latitude, item.longitude]} icon={darkIcon}>
      <Popup
        className="custom-popup"
        offset={[0, -20]} // This ensures the popup appears above the marker
        closeButton={false}
      >
        <div className="w-64 bg-white rounded-lg overflow-hidden">
          <div className="relative h-32">
            <Image
              src={item.img}
              alt="Spacious apartment"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <h4 className="font-semibold text-sm mb-1">
              Spacious apartment in the city heart
            </h4>
            <p className="text-xs text-gray-600 mb-2 flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              Krakow, Old Town
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <span className="flex items-center">
                  <Warehouse className="w-3 h-3 mr-1" />{item.bedrooms} Bedrooms
                </span>
                <span className="flex items-center">
                  <Proportions className="w-3 h-3 mr-1" />
                  {item.bathrooms} Bathrooms
                </span>
              </div>
              <span className="font-bold text-orange-600">${item.price} / mo</span>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
