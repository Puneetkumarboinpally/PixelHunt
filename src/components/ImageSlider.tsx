import { useEffect, useState } from "react";
import heroMovies from "../api/tmdb";
import type { Movie } from "../types/movie";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = () => {
  const [bannerMovies, setBannerMovies] = useState<Movie[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    heroMovies().then((data) => {
      console.log(data.results);
      setBannerMovies(data.results);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === bannerMovies.length - 1 ? 0 : prev + 1,
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [bannerMovies.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? bannerMovies.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === bannerMovies.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="relative h-[calc(100vh-4rem)] overflow-hidden">
      {/* Slider track */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {bannerMovies.map((movie) => (
          <div key={movie.id} className="h-full w-full shrink-0">
            <div className="relative h-full w-full">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={prevSlide}
          className="p-1 bg-red-500 font-bold text-white rounded active:scale-95"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="p-1 bg-red-500 font-bold text-white rounded active:scale-95"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
