import { useState } from "react";
import PluseIcon from "assets/icons/pluse-icon";

const data = [
  {
    id: 1,
    title: "Farobiy IT Academy bu nima?",
    content: "Farobiy IT Academy bu nima?.",
  },
  {
    id: 2,
    title: "Farobiy IT Academy a'zoligimga nimalar kiradi?",
    content: "Farobiy IT Academy a'zoligimga nimalar kiradi?",
  },
  {
    id: 3,
    title: "Farobiy IT Academy dan nimani o'rganishim mumkin?",
    content: "Farobiy IT Academy dan nimani o'rganishim mumkin?",
  },
  {
    id: 4,
    title: "Sinovim tugagandan keyin nima bo'ladi?",
    content: "Sinovim tugagandan keyin nima bo'ladi?",
  },
  {
    id: 5,
    title: "Farobiy IT Academy da dars bera olamanmi?",
    content: "Farobiy IT Academy da dars bera olamanmi?",
  },
];

const LotofQuestion = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number | null) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container lotof-question">
      <h2 className="text-[28px] mb-8 font-bold">Ko'p so'raladigan savollar</h2>
      {data.map((el) => (
        <div key={el?.id} className="mb-5">
          <div
            onClick={() => toggleAccordion(el?.id)}
            className="bg-[#F4F4F4] p-10 rounded-[40px] flex items-center justify-between cursor-pointer mb-2"
          >
            <p className="font-semibold text-2xl text-[#0B2441] lotof-question__title">
              {el?.title}
            </p>
            <PluseIcon
              className={`transition-transform duration-300 ${
                activeId === el.id ? "rotate-45" : ""
              }`}
            />
          </div>
          {activeId ? (
            <div
              className={`${
                activeId === el?.id ? "max-h-[200px]  " : "hidden"
              } bg-[#F4F4F4] p-10 rounded-b-[40px] text-[#0B2441] text-lg transition-all duration-500 overflow-hidden`}
            >
              {el?.content}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default LotofQuestion;
