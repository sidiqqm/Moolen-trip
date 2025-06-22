"use client";

import { useState } from "react";
import { Upload, X } from "lucide-react";
import Image from "next/image";

const CreatePostPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    price: "",
    bedroom: "",
    bathroom: "",
    images: [],
  });

  const [previewImages, setPreviewImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + previewImages.length > 5) {
      alert("You can upload a maximum of 5 images");
      return;
    }

    const newPreviewImages = files.map((file) => {
      return {
        file,
        preview: URL.createObjectURL(file),
      };
    });

    setPreviewImages([...previewImages, ...newPreviewImages]);
  };

  const removeImage = (index) => {
    const newPreviewImages = [...previewImages];
    URL.revokeObjectURL(newPreviewImages[index].preview);
    newPreviewImages.splice(index, 1);
    setPreviewImages(newPreviewImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Listing</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 mb-2">
            Upload Images (Max 5)
          </label>
          <div className="flex flex-wrap gap-4 mb-4">
            {previewImages.map((image, index) => (
              <div
                key={index}
                className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-200"
              >
                <Image
                  src={image.preview}
                  alt={`Preview ${index}`}
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-black bg-opacity-50 text-white p-1 rounded-full"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {previewImages.length < 5 && (
              <label className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <div className="text-center">
                  <Upload className="w-6 h-6 mx-auto text-gray-400" />
                  <span className="text-xs text-gray-500">Add Image</span>
                </div>
              </label>
            )}
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Price and Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Bedrooms</label>
            <input
              type="number"
              name="bedroom"
              value={formData.bedroom}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Bathrooms</label>
            <input
              type="number"
              name="bathroom"
              value={formData.bathroom}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Create Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
