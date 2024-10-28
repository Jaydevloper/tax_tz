import { Link } from "react-router-dom";
import logo from "assets/imgs/site-logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#EAF4FF] pt-8 pb-[52px] site-footer">
      <div className="container">
        <div className="flex items-center gap-[281px] site-footer__wrapper-top">
          <section>
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </section>
          <section className="flex items-center justify-between gap-16 flex-wrap">
            <div>
              <h3 className="text-[#91a1b3] text-[12px]">Manzil</h3>
              <p className="max-w-[238px] w-full  text-center mt-3">
                Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B
              </p>
            </div>
            <div>
              <h3 className="text-[#91a1b3] text-[12px]">Yordam</h3>
              <a
                className="max-w-[238px] w-full  text-center mt-3"
                href="tel:+998917775411"
              >
                +998 91 7775411
              </a>
            </div>
            <div>
              <h3 className="text-[#91a1b3] text-[12px]">Pochta</h3>
              <a
                className="max-w-[238px] w-full  text-center mt-3"
                href="mailto:Info@farobiy.com"
              >
                Info@farobiy.com
              </a>
            </div>
          </section>
        </div>
        <div className="flex items-center justify-between mt-7 border-b-[1px] border-solid border-[#18181826] pb-[36px] flex-wrap">
          <p className="max-w-[224px] w-full text-[12px] text-[#0B2441] mt-7">
            Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz
            orqali qiymat sotamiz.
          </p>
          <div className="flex items-center gap-6 self-end flex-wrap">
            <Link to={"/"}>Facebook</Link>
            <Link to={"/"}>Twitter</Link>
            <Link to={"/"}>Telegram</Link>
            <Link to={"/"}>Instagram</Link>
          </div>
        </div>
        <p className="pt-[36px] text-[12px] text-[#0B2441]">
          © 2022 by Fido Studio. Farobiy IT Academy
        </p>
      </div>
    </footer>
  );
};
export default Footer;
