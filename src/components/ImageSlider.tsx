import { useEffect } from "react";
import heroMovies from "../api/tmdb";

const ImageSlider = () => {
  useEffect(() => {
    heroMovies().then((data) => console.log(data));
  }, []);
  return <div>ImageSlider</div>;
};

export default ImageSlider;
