import { useEffect, useState } from "react";
import MovieCard from "./components/movie.component";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=58f5f19d";

const App = () => {
  const [movieState, setMovieState] = useState([]);
  const [searchState, setsearchState] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovieState(data.Search);
  };
  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchState}
          onChange={(e) => setsearchState(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchState)} />
      </div>

      {movieState.length > 0 ? (
        <div className="container">
          
          {movieState.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No Movie Found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
