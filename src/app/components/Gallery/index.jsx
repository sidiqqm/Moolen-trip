import React from "react";

const images = [
  "/holiday1.jpg",
  "/holiday2.jpg",
  "/holiday3.jpg",
  "/holiday4.jpg",
];

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Adventures can fill your soul
      </h1>
      <div className="flex justify-center items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-30 h-30 md:w-52 md:h-52 xl:w-64 xl:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg ${
              index !== 0 ? "-ml-8 md:-ml-14" : ""
            }`}
          >
            <img
              src={src}
              alt={`Adventure ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
