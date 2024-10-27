import PluseIcon from "assets/icons/pluse-icon";
const data = [
  {
    id: 1,
    title: "Farobiy IT Academy bu nima?",
  },
  {
    id: 2,
    title: "Farobiy IT Academy a'zoligimga nimalar kiradi?",
  },
  {
    id: 3,
    title: "Farobiy IT Academy dan nimani o'rganishim mumkin?",
  },
  {
    id: 4,
    title: "Sinovim tugagandan keyin nima bo'ladi?",
  },
  {
    id: 5,
    title: "Farobiy IT Academy da dars bera olamanmi?",
  },
];
const LotofQuestion = () => {
  return (
    <div className="container">
      <h2 className="text-[28px] mb-8 font-bold">Ko'p so'raladigan savollar</h2>
      {data?.map((el) => (
        <div
          className="bg-[#F4F4F4] p-10 rounded-[40px] flex items-center justify-between mb-5"
          key={el?.id}
        >
          <p className="font-semibold text-2xl text-[#0B2441]">{el?.title}</p>
          <PluseIcon />
        </div>
      ))}
    </div>
  );
};
export default LotofQuestion;
