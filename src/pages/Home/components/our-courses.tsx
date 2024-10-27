import ButtonBlue from "components/button";
import "assets/scss/blocks/_bg-img.scss";
import ArrowRightIcon from "assets/icons/arrow-righ-icont";
const OurCourses = () => {
  return (
    <div className="container !my-20">
      <h2 className="text-[28px] mb-8 font-bold"> Biz orgatadigan kurslar</h2>
      <div className="flex items-center gap-6">
        <section className="bg-img bg-img__program-course rounded-[44px]">
          <div className="pt-[145px] pl-8">
            <h3 className="mb-5 text-2xl font-bold text-white">Dasturlash</h3>
            <ButtonBlue>
              Batafsil <ArrowRightIcon />
            </ButtonBlue>
          </div>
        </section>
        <section className="bg-img bg-img__desigin-course rounded-[44px]">
          <div className="pt-[145px] pl-8">
            <h3 className="mb-5 text-2xl font-bold text-white">Dizayn</h3>
            <ButtonBlue>
              Batafsil <ArrowRightIcon />
            </ButtonBlue>
          </div>
        </section>
        <section className="bg-img bg-img__marketing-course rounded-[44px] self-end">
          <div className="pt-[145px] pl-8">
            <h3 className="mb-5 text-2xl font-bold text-white">Dasturlash</h3>
            <ButtonBlue>
              Batafsil <ArrowRightIcon />
            </ButtonBlue>
          </div>
        </section>
      </div>
      <div className="flex items-center gap-6 ">
        <section className="bg-img bg-img__logistic-course rounded-[44px]">
          <div className="pt-[145px] pl-8">
            <h3 className="mb-5 text-2xl font-bold text-white">
              Logistika broketligi
            </h3>
            <ButtonBlue>
              Batafsil <ArrowRightIcon />
            </ButtonBlue>
          </div>
        </section>
        <section className="bg-img bg-img__video-course rounded-[44px]">
          <div className="pt-[113px] pl-8">
            <h3 className="mb-5 text-2xl font-bold text-white">
              Videomontaj va maxsus effektlar
            </h3>
            <ButtonBlue>
              Batafsil <ArrowRightIcon />
            </ButtonBlue>
          </div>
        </section>
        <section className="bg-img bg-img__new-course rounded-[44px] bg-[#EAF4FF] self-end">
          <div className="pt-[32px] pl-8 ">
            <h3 className="mb-5 text-2xl  text-[#0B2441] font-bold max-w-[159px]">
              Tez orada yangi kurs!
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};
export default OurCourses;
