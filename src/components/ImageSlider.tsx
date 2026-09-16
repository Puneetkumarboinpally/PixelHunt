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
    <div className="relative h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerMovies.map((movie) => (
          <div key={movie.id} className="h-full w-full shrink-0">
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
              <div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <button onClick={prevSlide}>
          <ChevronLeft />
        </button>
        <button onClick={nextSlide}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
