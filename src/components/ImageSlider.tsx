import { useEffect, useState } from "react";
import heroMovies from "../api/tmdb";
import type { Movie } from "../types/movie";

const ImageSlider = () => {
  const [bannerMovies, setBannerMovies] = useState<Movie[]>([]);

  useEffect(() => {
    heroMovies().then((data) => {
      console.log(data.results);
      setBannerMovies(data.results);
    });
  }, []);

  return (
    <div className="flex overflow-hidden">
      {bannerMovies.map((movie) => (
        <div key={movie.id} className="min-w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
