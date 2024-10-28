import AboutUs from "./components/about-us";
import CarouselAd from "./components/carousel-ad";
import Forma from "./components/forma";
import LotofQuestion from "./components/lot-of-question";
import OurCourses from "./components/our-courses";
import OurTeachers from "./components/our-teachers";

const Home = () => {
  return (
    <>
      <CarouselAd />
      <OurCourses />
      <OurTeachers />
      <AboutUs />
      <LotofQuestion />
      <Forma />
    </>
  );
};

export default Home;
