// import { useEffect } from "react";

const MovieCard = ({movie}) => {
//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();
//     console.log(data.Search);
//   };
//   useEffect(() => {
//     searchMovies("superman");
//   }, []);

  return (
   
        <div className="movie">
            
            <div><p>{movie.Year}</p></div>
            <div> <img src={movie.Poster!=='N/A'? movie.Poster: "https://via.placeholder.com/400"} alt={movie.Title} onClick={() => {}} /></div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>

                </div>
        </div>
        
     
  );
};

export default MovieCard;
