import LikeIcon from "assets/icons/like-icon";
import aboutImg from "assets/imgs/about-us.png";
import aboutCodeImg from "assets/imgs/about-code.png";
import MedalStartIcon from "assets/icons/medal-star-icon";
const AboutUs = () => {
  return (
    <div className="container !my-20 about-us">
      <h2 className="text-[28px] mb-8 font-bold">Biz haqimizda</h2>
      <div className="flex justify-between about-us__wrapper">
        <div className="flex flex-col gap-6">
          <section className="bg-[#F1E2C1] rounded-[40px] p-8 max-w-[483px] w-full ">
            <LikeIcon />
            <p className="text-[22px] text-[#0B2441] mt-6">
              Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati
              odamlar hayotida o'sish.
            </p>
          </section>
          <img
            className="rounded-[40px] h-[459px]"
            width={480}
            height={459}
            alt="about-us-code"
            loading="lazy"
            src={aboutCodeImg}
          />
        </div>
        <div className="flex flex-col justify-between gap-6  max-w-[650px] w-full">
          <img
            className="rounded-[40px]"
            width={657}
            height={428}
            alt="about-us"
            loading="lazy"
            src={aboutImg}
          />
          <section className="bg-[#D8DBFB] rounded-[40px] p-8 max-w-[685px] w-full ">
            <MedalStartIcon />
            <p className="text-[22px] text-[#0B2441] mt-6">
              Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya,
              video, freelancing va boshqa mavzularda ijodiy va qiziquvchan.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
