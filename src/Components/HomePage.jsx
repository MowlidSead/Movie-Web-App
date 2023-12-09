import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import Movie from './Movie';
import Filter from './Filter';

const HomePage = () => {
    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        getAnime();
    }, []);

    const getAnime = async () => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmQzOWNjMDZmODQ1MTI1MjZiYTdmYmE1YjZhZWVlZiIsInN1YiI6IjY1MjI5NTAxNzQ1MDdkMDEzOTVlNTA4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ppDj5Tzp9urdJ8vD6q6MVvcoUhw22SsP9B9LPIGz1aM"
            }
        };

        const data = await fetch(
            "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
            options
        );
        const movies = await data.json();
        setPopular(movies.results);
        setFiltered(movies.results);
        console.log(movies.results);
    };


    return (
        <motion.section className="bg-slate-800 overflow-hidden pb-14">
            <Filter
                popular={popular}
                setFiltered={setFiltered}
                active={active}
                setActive={setActive}
            />
            <div className="max-w-[84rem] mx-auto py-5 ">
                <motion.div
                    layout
                    // animate={{ type: "keyframes" }}
                    className="grid mx-6 gap-7 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 place-content-center"
                >
                    {/* <AnimatePresence> */}
                    {filtered.map((movie) => {
                        return <Movie key={movie.id} movie={movie} />;
                    })}
                    {/* </AnimatePresence> */}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default HomePage