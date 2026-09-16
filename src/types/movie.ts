export type Movie = {
  id: number;
  original_language: string;
  title: string;
  release_date: string;
  adult: boolean;
  overview: string;
  backdrop_path: string | null;
};
export type MovieReference = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
