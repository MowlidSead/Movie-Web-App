import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <>
    {movie ? (
      <motion.div
      animate={{ opacity:1, scale: 1, y: 0 }}
      initial={{ opacity: 0, scale: 0.92, y: 2 }}
      exit={{ opacity: 0, scale: 0.5, y: 0 }}
      transition={{ type: "spring", duration:1.1}}
      layout="preserve-aspect"
      className="bg-slate-700 rounded-xl shadow-[1px_1px_15px] shadow-slate-950/20 p-5 h-auto overflow-hidden grid place-items-start"
    >
      <img
        className="w-full h-full rounded-lg"
        src={
          "https://image.tmdb.org/t/p/w220_and_h330_face" +
          movie.poster_path
        }
        alt=""
      />
      <h1
        className="lg:text-md md:text-base text-xs font-bold bg-a-300
       pt-5 flex justify-start items-center overflow-hidden
       bg-sate-300 w-full text-start text-teal-500"
      >
        {movie.name}
      </h1>
      <p className="text-slate-400">{movie.first_air_date}</p>
    </motion.div>
    ) : <h1 className="text-9xl">there no content</h1>}
      
    </>
  );
};

export default Movie;
