import StartIcon from "assets/icons/start-icon";
import ButtonBlue from "components/button";
import adImg from "assets/imgs/ad-img.png";
const AdvertiseSlider = () => {
  return (
    <div className="relative bg-[#EAF4FF] rounded-[44px] container !pt-14 !pl-14 !pb-16 ">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[#0B2441] text-base flex items-center gap-[10px]">
            Zamonaviy IT o'quv markazi
            <StartIcon />
          </h2>
          <p className="mb-14 mt-4 font-bold text-[28px] max-w-[456px] w-full  advertise-slide__page">
            Biz sizga{" "}
            <span className="text-[#2189FF]   decoration-[#2189FF] advertise-slide__page-underline">
              zamonaviy kasbni
            </span>{" "}
            o'rganishga va ish boshlashingizga yordam beramiz
          </p>
          <ButtonBlue>Kurslarni tanlash</ButtonBlue>
        </div>
        <img className="absolute right-0" src={adImg} alt="advertise" />
      </div>
    </div>
  );
};
export default AdvertiseSlider;
