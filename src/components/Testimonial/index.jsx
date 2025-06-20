"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse events for desktop dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setTouchStart(e.clientX);
    setTouchEnd(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const testimonials = [
    {
      id: 1,
      text: "OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.",
      name: "Jenny Wilson",
      role: "Web Developer",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      text: "The design process was incredibly smooth and the final result exceeded all our expectations. Highly recommended!",
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      text: "Amazing service and support! The team delivered exactly what we needed in record time.",
      name: "Mike Chen",
      role: "Product Manager",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      text: "Professional, reliable, and creative. Working with this team was a game-changer for our business.",
      name: "Emily Davis",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      text: "Outstanding quality and attention to detail. They truly understand what clients need.",
      name: "David Rodriguez",
      role: "Business Owner",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our best clients words
          </h2>
        </div>

        {/* Testimonials Container with Swipe */}
        <div
          className="relative overflow-hidden mb-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                  {testimonials
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-4xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        {/* Quote Icon */}
                        <div className="mb-16">
                          <svg
                            className="w-12 h-12 text-orange-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-700 text-lg leading-relaxed mb-16">
                          {testimonial.text}
                        </p>

                        {/* Profile */}
                        <div className="flex items-center">
                          <div className="relative w-12 h-12 mr-4">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-500 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide
                  ? "bg-gray-800"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
