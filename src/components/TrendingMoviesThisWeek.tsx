import { useEffect, useState } from "react";
import Card from "./Card";
import heroMovies from "../api/tmdb";
import type { Movie } from "../types/movie";

const TrendingMoviesThisWeek = () => {
  const [trendingHomeMovies, setTrendingHomeMovies] = useState<Movie[]>([]);
  useEffect(() => {
    heroMovies().then((data) => setTrendingHomeMovies(data.results));
  }, []);
  return (
    <div className="h-screen mt-15 p-4">
      <h2 className="text-2xl font-bold text-text mb-8">
        TRENDING MOVIES THIS WEEK
      </h2>
      <div className="flex overflow-hidden gap-4">
        {trendingHomeMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMoviesThisWeek;
