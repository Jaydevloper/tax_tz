import { Input } from "antd";
import icebargImg from "assets/imgs/icebarg-forma.png";
import ButtonBlue from "components/button";
const Forma = () => {
  return (
    <div className="container !my-20 bg-[#EAF4FF] rounded-[40px] !py-16 !pl-14 !pr-[81px] relative flex  justify-between site-form">
      <div>
        <h2 className="text-2xl text-[#0B2441] font-bold mb-4 site-form__head">
          Tanlovda yordam beramis!
        </h2>
        <p className="text-base text-[#0B2441] max-w-[339px] w-full">
          Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz,
          raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.
        </p>
        <img
          className="absolute bottom-0 site-form__img"
          src={icebargImg}
          alt="icebarg"
        />
      </div>
      <form className="max-w-[584px] w-full ]">
        <Input
          className="max-w-[584px] w-full  rounded-[20px] border-[#2189FF66] py-4 placeholder:text-[12px]"
          placeholder="Ismingiz"
          required
        />
        <div className="flex items-center justify-between mt-6 gap-4 flex-wrap">
          <Input
            className=" max-w-[280px] w-full  rounded-[20px] border-[#2189FF66] py-4 placeholder:text-[12px]"
            placeholder="Telefon nomeringiz"
            type="number"
            required
          />
          <Input
            className="max-w-[280px] w-full  rounded-[20px] border-[#2189FF66] py-4 placeholder:text-[12px]"
            placeholder="Pochtangiz"
            type="email"
            required
          />
        </div>
        <ButtonBlue htmlType="submit" className="mt-12">
          Yuborish
        </ButtonBlue>
      </form>
    </div>
  );
};
export default Forma;
