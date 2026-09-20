import { useEffect, useState } from "react";
import Card from "./Card";
import { trendingSeries } from "../api/tmdb";
import type { Movie } from "../types/movie";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TrendingSeries = () => {
  const [trendingHomeSeries, setTrendingHomeSeries] = useState<Movie[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? trendingHomeSeries.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === trendingHomeSeries.length - 1 ? 0 : prev + 1,
    );
  };

  useEffect(() => {
    trendingSeries().then((data) => setTrendingHomeSeries(data.results));
  }, []);

  return (
    <div className="h-60vh mt-15 p-4">
      <h2 className="text-2xl font-bold text-text mb-8">
        TRENDING TV SERIES THIS WEEK
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 256}px)` }}
        >
          {trendingHomeSeries.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
        <div>
          <button
            onClick={prevSlide}
            type="button"
            aria-label="previous slide"
            className="absolute left-0 top-1/2 
          -translate-y-1/2 text-accent
          h-full p-1 bg-white/20 rounded
          active:scale-98 outline-none 
          focus:ring-2 focus:ring-accent "
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            onClick={nextSlide}
            type="button"
            aria-label="next slide"
            className="absolute right-0 top-1/2 
          -translate-y-1/2 text-accent
          h-full p-1 bg-white/20 rounded
          active:scale-98 outline-none 
          focus:ring-2 focus:ring-accent "
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingSeries;
