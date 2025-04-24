import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState(""); //change and re-ender the component

    const movies = [
        {id: 1, title: "John Wick", release_date: "2022"},
        {id: 2, title: "Spiderman", release_date: "2023"},
        {id: 3, title: "Avengers", release_date: "2024"},
    ]

        const handleSearch = (e) => {
            e.preventDefault()
            alert(searchQuery)
            setSearchQuery("")
        };

    return ( 
    <div className="home">
        <form 
           action="" 
           onSubmit = {handleSearch} 
           className="search-form"
        >
   
            <input 
                type="text" 
                placeholder="Search for movies...." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(
                (movie) => (
                movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}/>
                )
        ))}
        
        </div>
    </div>
    )
}
export default Home