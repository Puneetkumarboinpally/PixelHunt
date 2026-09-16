import { useState } from "react";
import { courses } from "../data/Products";
import CourseCard from "./CourseCard";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(courses.length / cardsPerSlide);

  return (
    <div className="mt-4 overflow-hidden bg-gray-300 p-4">
      {/* Carousel track */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="flex min-w-full gap-5 justify-center"
          >
            {courses
              .slice(
                slideIndex * cardsPerSlide,
                slideIndex * cardsPerSlide + cardsPerSlide,
              )
              .map((course) => (
                <CourseCard key={course.id} data={course} />
              ))}
          </div>
        ))}
        <div className="flex items-center bg-black/20 p-2">
          <ArrowBigRight />
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full transition cursor-pointer ${
              currentSlide === index ? "bg-black" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
