import { Input } from "antd";
import icebargImg from "assets/imgs/icebarg-forma.png";
import ButtonBlue from "components/button";
const Forma = () => {
  return (
    <div className="container !my-20 bg-[#EAF4FF] rounded-[40px] !py-16 !pl-14 !pr-[81px] relative flex  justify-between">
      <div>
        <h2 className="text-2xl text-[#0B2441] font-bold mb-4">
          Tanlovda yordam beramis!
        </h2>
        <p className="text-base text-[#0B2441] max-w-[339px] w-full">
          Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz,
          raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.
        </p>
        <img className="absolute bottom-0" src={icebargImg} alt="icebarg" />
      </div>
      <form>
        <Input
          className="w-[584px]  rounded-[20px] border-[#2189FF66] py-4 placeholder:text-[12px]"
          placeholder="Ismingiz"
          required
        />
        <div className="flex items-center justify-between mt-6">
          <Input
            className="w-[280px]  rounded-[20px] border-[#2189FF66] py-4 placeholder:text-[12px]"
            placeholder="Telefon nomeringiz"
            type="tel"
            required
          />
          <Input
            className="w-[280px]  rounded-[20px] border-[#2189FF66] py-4 placeholder:text-[12px]"
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
