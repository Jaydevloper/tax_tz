import AboutUs from "./components/about-us";
import AdvertiseSlider from "./components/adverstise-slider";
import Forma from "./components/forma";
import LotofQuestion from "./components/lot-of-question";
import OurCourses from "./components/our-courses";
import OurTeachers from "./components/our-teachers";

const Home = () => {
  return (
    <>
      <AdvertiseSlider />
      <OurCourses />
      <OurTeachers />
      <AboutUs />
      <LotofQuestion />
      <Forma />
    </>
  );
};

export default Home;
