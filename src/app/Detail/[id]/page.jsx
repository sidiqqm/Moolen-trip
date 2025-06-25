import {
  MapPin,
  Proportions,
  Warehouse,
  Star,
  Users,
  Wifi,
  Tv,
  Coffee,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DetailPage = ({ params }) => {

  const property = {
    id: params.id,
    title: "Modern Apartment in Downtown",
    img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "123 Main St, New York, NY",
    bedroom: 3,
    bathroom: 2,
    price: 1200,
    description:
      "This modern apartment offers stunning views of the city skyline. Located in the heart of downtown, it's close to all major attractions, restaurants, and public transportation.",
    amenities: [
      { name: "WiFi", icon: <Wifi className="w-5 h-5" /> },
      { name: "TV", icon: <Tv className="w-5 h-5" /> },
      { name: "Coffee Maker", icon: <Coffee className="w-5 h-5" /> },
      { name: "Max 4 Guests", icon: <Users className="w-5 h-5" /> },
    ],
    rating: 4.8,
    reviews: 124,
    host: {
      name: "John Doe",
      joined: "2020",
    },
    images: [
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-500">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/list" className="hover:text-orange-500">
          Properties
        </Link>
        <span className="mx-2">/</span>
        <span className="text-orange-500">{property.title}</span>
      </div>

      {/* Title and Rating */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold capitalize mb-2 md:mb-0">
          {property.title}
        </h1>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
          <span className="ml-1 font-medium">{property.rating}</span>
          <span className="ml-1 text-gray-500">
            ({property.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-6">
        <Image
          src={property.img}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2">
          {/* Basic Info */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex items-center text-gray-500 text-base mb-4">
              <MapPin className="w-5 h-5 mr-2 text-orange-500" />
              {property.address}
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-gray-500 text-base">
                <Warehouse className="w-5 h-5 mr-2 text-orange-500" />
                {property.bedroom} Bedroom
              </div>
              <div className="flex items-center text-gray-500 text-base">
                <Proportions className="w-5 h-5 mr-2 text-orange-500" />
                {property.bathroom} Bathroom
              </div>
            </div>

            <p className="text-gray-700">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  {amenity.icon}
                  <span className="ml-2 text-gray-700">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {property.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-32 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`Property image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="border border-gray-200 rounded-xl p-6 h-fit sticky top-6">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-2xl font-bold text-orange-500">
                ${property.price}
              </span>
              <span className="text-gray-500 ml-1">/person</span>
            </div>
            <div className="text-gray-500">
              <span>{property.rating}</span>
              <Star className="w-4 h-4 text-orange-500 fill-orange-500 inline ml-1" />
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors mb-6">
            Book Now
          </button>

          <div className="text-center text-gray-500 mb-6">
            You won't be charged yet
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium mb-2">Hosted by {property.host.name}</h3>
            <p className="text-gray-500 text-sm">
              Joined in {property.host.joined}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
