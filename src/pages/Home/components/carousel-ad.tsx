import { Carousel } from "antd";
import AdvertiseSlider from "./adverstise-slider";

const CarouselAd = () => {
  return (
    <Carousel
      className="site-carousel "
      responsive={[
        {
          breakpoint: 1490,
          settings: {
            dots: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            vertical: true,
          },
        },
      ]}
    >
      <AdvertiseSlider />
      <AdvertiseSlider />
    </Carousel>
  );
};
export default CarouselAd;
