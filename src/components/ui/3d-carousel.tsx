import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "../hooks/use-mobile";
import Link from "next/link";

interface Props {
  data: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
}

const ThreeDimensionalCarousel: React.FC<Props> = ({ data }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      let isDragging = false;
      let startX = 0;

      const handleMouseDown = (e: MouseEvent) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        carousel.style.cursor = "grabbing";
      };

      const handleMouseUp = () => {
        isDragging = false;
        carousel.style.cursor = "grab";
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1; //scroll speed
        carousel.scrollLeft = carousel.scrollLeft - walk;
        startX = x;
      };

      carousel.addEventListener("mousedown", handleMouseDown);
      carousel.addEventListener("mouseup", handleMouseUp);
      carousel.addEventListener("mouseleave", handleMouseUp);
      carousel.addEventListener("mousemove", handleMouseMove);

      return () => {
        carousel.removeEventListener("mousedown", handleMouseDown);
        carousel.removeEventListener("mouseup", handleMouseUp);
        carousel.removeEventListener("mouseleave", handleMouseUp);
        carousel.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= isMobile ? 300 : 600;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += isMobile ? 300 : 600;
    }
  };

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="carousel relative flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide py-4"
      >
        {data.map((item, index) => (
          <div key={index} className="snap-start w-full shrink-0 md:w-1/2 lg:w-1/3">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-3">
                  {item.description}
                </p>
                <Link href={item.link}>
                  <div className="inline-flex items-center font-semibold hover:text-primary transition-colors duration-200">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 text-white rounded-full p-2 hover:bg-black/50 transition-colors duration-200 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 text-white rounded-full p-2 hover:bg-black/50 transition-colors duration-200 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ThreeDimensionalCarousel;