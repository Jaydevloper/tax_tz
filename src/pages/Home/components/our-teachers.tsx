import anvarTeacher from "assets/imgs/anvar-teacher.png";
import nargizaTeacher from "assets/imgs/nargiza-teacher.png";
import akbarTeacher from "assets/imgs/akbar-teacher.png";
import grichkaTeacher from "assets/imgs/grichka-teacher.png";
import zokirTeacher from "assets/imgs/zokir-teacher.png";
import alisherTeacher from "assets/imgs/alisher-teacher.png";
import randomTeacher from "assets/imgs/random-teacher.png";
import CodeIcon from "assets/icons/code-icon";
import DesiginIcon from "assets/icons/desigin-icon";
import LogisticIcon from "assets/icons/logistic-icon";
import MarketingIcon from "assets/icons/marketing-icon";
import MantajIcon from "assets/icons/montaj-icon";

const OurTeachers = () => {
  return (
    <div className="container">
      <h2 className="font-bold text-[28px]">Bizning ustozlarimiz</h2>
      <div className="mt-8 grid grid-cols-4 gap-11">
        <div className="flex flex-col items-center">
          <img
            className="rounded-[50%] h-[240px] object-cover"
            width={240}
            height={240}
            src={anvarTeacher}
            loading="lazy"
            alt="teacher"
          />
          <h3 className="mb-4 mt-9 font-semibold text-2xl text-[#0B2441]">
            Alisherova Anvara
          </h3>
          <p className="text-[#0B2441] text-xl font-semibold flex gap-3 items-center">
            <CodeIcon /> Dasturlash ustozi
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-[50%] h-[240px] object-cover"
            width={240}
            height={240}
            src={nargizaTeacher}
            loading="lazy"
            alt="teacher"
          />
          <h3 className="mb-4 mt-9 font-semibold text-2xl text-[#0B2441]">
            Antota Nargiza
          </h3>
          <p className="text-[#0B2441] text-xl font-semibold flex items-center gap-3">
            <DesiginIcon /> UX/UI ustozi
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-[50%] h-[240px] object-cover"
            width={240}
            height={240}
            src={akbarTeacher}
            loading="lazy"
            alt="teacher"
          />
          <h3 className="mb-4 mt-9 font-semibold text-2xl text-[#0B2441]">
            Jorayev Akbar
          </h3>
          <p className="text-[#0B2441] text-xl font-semibold flex items-center gap-3">
            <LogisticIcon /> Logistika ustozi
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-[50%] h-[240px] object-cover"
            width={240}
            height={240}
            src={grichkaTeacher}
            loading="lazy"
            alt="teacher"
          />
          <h3 className="mb-4 mt-9 font-semibold text-2xl text-[#0B2441]">
            Mamaraimov Grichka
          </h3>
          <p className="text-[#0B2441] text-xl font-semibold flex items-center gap-3">
            <MarketingIcon /> Marketing ustozi
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-[50%] h-[240px] object-cover"
            width={240}
            height={240}
            src={zokirTeacher}
            loading="lazy"
            alt="teacher"
          />
          <h3 className="mb-4 mt-9 font-semibold text-2xl text-[#0B2441]">
            Zokir Malikov
          </h3>
          <p className="text-[#0B2441] text-xl font-semibold flex items-center gap-3">
            <MantajIcon /> Videomontaj ustozi
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-[50%] h-[240px] object-cover"
            width={240}
            height={240}
            src={alisherTeacher}
            loading="lazy"
            alt="teacher"
          />
          <h3 className="mb-4 mt-9 font-semibold text-2xl text-[#0B2441]">
            Anvara Xoliqova
          </h3>
          <p className="text-[#0B2441] text-xl font-semibold flex items-center gap-3">
            <CodeIcon /> Dasturlash ustozi
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-[50%] h-[240px] object-cover"
            width={240}
            height={240}
            src={randomTeacher}
            loading="lazy"
            alt="teacher"
          />
          <h3 className="mb-4 mt-9 font-semibold text-2xl text-[#0B2441]">
            Alisherova Anvara
          </h3>
          <p className="text-[#0B2441] text-xl font-semibold flex items-center gap-3">
            <CodeIcon /> Dasturlash ustozi
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurTeachers;
