import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/movieSlice";


import { addToSaved, removeFromSaved } from "../../features/savedSlice";
import Spinners from "../../components/Spinner";
import MovieItem from "../../components/MovieItem";

function Movie() {
  const dispatch = useDispatch();

  const allMovies = useSelector((state) => state.home.movie);
  const loading = useSelector((state) => state.home.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const savedItems = useSelector((state) => state.saved.savedItems);

  const handleAddToSaved = (item) => {
    dispatch(addToSaved(item));
  };
  const handleRemoveFromSaved = (item) => {
    dispatch(removeFromSaved(item));
  };

  return (
    <>
    <center>
      <h1>Welcome to Movie API</h1>
      <p>Find your favorite movies here easily, comfortably and safely.</p>
      <hr width="80%"/>
    </center>
      <div className="hero-container">
        <div className="row">
          {allMovies.map((movie, index) => (
            <div className="col-md-3 py-2" key={index}>
              <MovieItem
                Image={movie?.Poster}
                title={movie?.Title}
                idm={movie?.imdbID}
                Year={movie?.Year}
                Type={movie?.Type}
              />
              
            </div>
            ))}
          </div>
        <div>{loading && <Spinners />}</div>
      </div>
    </>
  );
}

export default Movie;
