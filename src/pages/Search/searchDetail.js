
import { useDispatch, useSelector } from "react-redux";
import { addToSaved, removeFromSaved } from "../../features/savedSlice";
import Spinners from "../../components/Spinner";
import MovieItem from "../../components/MovieItem";

const SearchDetail = () => {
  const dispatch = useDispatch();

  const allMovies = useSelector((state) => state.search.movie);
  const loading = useSelector((state) => state.search.loading);
  const savedItems = useSelector((state) => state.saved.savedItems);

  const handleAddToSaved = (item) => {
    dispatch(addToSaved(item));
  };
  const handleRemoveFromSaved = (item) => {
    dispatch(removeFromSaved(item));
  };

  return (
    <>
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
                onClick={() => {
                  savedItems.find((item) => item.Title === movie.Title)
                    ? handleRemoveFromSaved(movie)
                    : handleAddToSaved(movie);
                }}
                buttonName={
                  savedItems?.find((item) => item.Title === movie.Title)
                    ? "Unsave"
                    : "Save"
                }
              />
              
            </div>
            ))}
          </div>
        <div>{loading && <Spinners />}</div>
      </div>
    </>
  );
};
export default SearchDetail;
