import type { Movie } from "../types/movie";

type MoviesProps = {
  movie: Movie;
};
const Card = ({ movie }: MoviesProps) => {
  return (
    <div className="h-80 w-60 shrink-0">
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover
           transition-transform duration-500 
           cursor-pointer hover:scale-110"
        />
        <span
          className="absolute top-2 right-2
        p-1 bg-yellow-500 rounded font-bold"
        >
          HD
        </span>
        <p
          className="absolute bottom-3 left-1/2 -translate-x-1/2
        text-white font-bold text-center
        w-full max-w-48"
        >
          {movie.title}
        </p>
      </div>
    </div>
  );
};

export default Card;
