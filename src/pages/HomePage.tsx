import ImageSlider from "../components/ImageSlider";
import TrendingMoviesThisWeek from "../components/TrendingMoviesThisWeek";
import TrendingSeries from "../components/TrendingSeries";

const HomePage = () => {
  return (
    <div>
      <ImageSlider />
      <TrendingMoviesThisWeek />
      <TrendingSeries />
    </div>
  );
};

export default HomePage;
