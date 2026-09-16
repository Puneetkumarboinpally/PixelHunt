import type { MovieReference } from "../types/movie";

const Token = import.meta.env.VITE_TMDB_TOKEN;

const heroMovies = async (): Promise<MovieReference> => {
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        authorization: `Bearer ${Token}`,
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("failed to fetch hero images");
    }
    const data: MovieReference = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default heroMovies;
