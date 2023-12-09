import { useEffect } from "react";

const Filter = ({ setActive, active, setFiltered, popular }) => {
  useEffect(() => {
    if (active === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(active)
    );
    setFiltered(filtered);
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-start items-center gap-3 py-5 px-7 my-5 mt-10">
        <button
          onClick={() => setActive(0)}
          className={
            active === 0
              ? "border-[3px] bg-emerald-600 border-emerald-600 text-slate-100 transition-all duration-150 font-medium px-7 py-2 rounded-full"
              : "border-[3px] transition-all duration-150 border-slate-600 text-slate-300 font-medium px-7 py-2 rounded-full"
          }
        >
          All
        </button>
        <button
          onClick={() => setActive(35)}
          className={
            active === 35
              ? "border-[3px] bg-emerald-600 border-emerald-600 text-slate-100 transition-all duration-150 font-medium px-7 py-2 rounded-full"
              : "border-[3px] transition-all duration-150 border-slate-600 text-slate-300 font-medium px-7 py-2 rounded-full"
          }
        >
          Comedy
        </button>
        <button
          onClick={() => setActive(10759)}
          className={
            active === 10759
              ? "border-[3px] bg-emerald-600 border-emerald-600 text-slate-100 transition-all duration-150 font-medium px-7 py-2 rounded-full"
              : "border-[3px] transition-all duration-150 border-slate-600 text-slate-300 font-medium px-7 py-2 rounded-full"
          }
        >
          Action
        </button>
        <button
          onClick={() => setActive(80)}
          className={
            active === 80
              ? "border-[3px] bg-emerald-600 border-emerald-600 text-slate-100 transition-all duration-150 font-medium px-7 py-2 rounded-full"
              : "border-[3px] transition-all duration-150 border-slate-600 text-slate-300 font-medium px-7 py-2 rounded-full"
          }
        >
          Crime
        </button>
      </div>
    </div>
  );
};

export default Filter;
