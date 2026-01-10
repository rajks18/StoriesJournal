import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop",
      category1: "TRAVEL",
      category2: "ANIMAL",
      title: "How to Visit Bali's Monkey Forest",
      date: "26 August 2020",
      views: "18k Views",
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop",
      category1: "TRAVEL",
      category2: "NATURE",
      title: "Exploring the Alpine Mountains",
      date: "15 September 2020",
      views: "24k Views",
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=900&fit=crop",
      category1: "ADVENTURE",
      category2: "OUTDOOR",
      title: "Ultimate Guide to Hiking Trails",
      date: "10 October 2020",
      views: "32k Views",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 + slides.length) % slides.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
      <div className="relative w-full h-screen max-h-150 overflow-hidden rounded-2xl">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            {/* Background Image with Overlay */}
            <div className="relative w-full h-full">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              {/* Categories */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-cyan-400 text-sm font-semibold tracking-wider">{slide.category1}</span>
                <span className="text-gray-300">•</span>
                <span className="text-orange-400 text-sm font-semibold tracking-wider">{slide.category2}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 max-w-4xl">{slide.title}</h1>

              {/* Meta Info */}
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <span>{slide.date}</span>
                <span>•</span>
                <span>{slide.views}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300"
            aria-label="Previous slide">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300"
            aria-label="Next slide">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-8 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-6 bg-white/50 hover:bg-white/70"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
