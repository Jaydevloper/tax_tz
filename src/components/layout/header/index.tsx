import { Select } from "antd";
import { Header } from "antd/es/layout/layout";
import BookIcon from "assets/icons/book-icon";
import CallIcon from "assets/icons/call-icon";
import logo from "assets/imgs/site-logo.png";
import { Link } from "react-router-dom";
const HeaderMenu = () => {
  return (
    <Header className="flex items-center  bg-white container site-header">
      <div className=" w-full flex items-center justify-between site-header__menu">
        <section className="flex items-center gap-7">
          <Link className="h-[50px]" to={"/"}>
            <img
              src={logo}
              width={112}
              height={76}
              alt="Logo Farobiy It academy"
            />
          </Link>
          <Link
            className="bg-[#EAF4FF] rounded-2xl py-4 px-7 text-[#2189FF] text-xs font-semibold flex items-center gap-2"
            to={"/"}
          >
            Kurslar
            <BookIcon />
          </Link>
        </section>
        <section className="flex items-center site-header__right">
          <Link className="text-base mr-10" to={"/"}>
            Bizning ustozlarimiz
          </Link>
          <Link className=" text-base mr-[46px]" to={"/"}>
            Biz haqimizda
          </Link>
          <Select
            className="site-header__select"
            defaultValue="Uz"
            options={[
              { value: "Uz", label: "UZ" },
              { value: "Ru", label: "RU" },
              { value: "Kr", label: "KR" },
            ]}
          />
          <a
            className="ml-6 bg-[#EAF4FF] rounded-2xl py-4 px-7 text-[#2189FF] text-xs font-semibold inline-flex items-center gap-2 "
            href={"tel:+998 91 7775411"}
          >
            <CallIcon />
            +998 91 7775411
          </a>
        </section>
      </div>
    </Header>
  );
};

export default HeaderMenu;
