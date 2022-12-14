import DetailsItem from "../../components/DetailMovie"
import { useSelector, useDispatch } from "react-redux";
import Spinners from "../../components/Spinner";
import { addToSaved, removeFromSaved } from "../../features/savedSlice";

const DetailMovie = () => {
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.detail.details);
    const loading = useSelector((state) => state.detail.loading);
    const savedItems = useSelector((state) => state.saved.savedItems);

    const handleAddToSaved = (item) => {
        dispatch(addToSaved(item));
    };
    const handleRemoveFromSaved = (item) => {
        dispatch(removeFromSaved(item));
    };
    return(
        <>
        <div className="hero-container">
            <div className="row">
                <div className="wrapper" key={movie?.imdbID}>
                    <DetailsItem 
                    id={movie?.imdbID}
                    title={movie?.Title}
                    image={movie?.Poster}
                    year={movie?.Year}
                    rated={movie?.Rated}
                    runtime={movie?.Runtime}
                    genre={movie?.Genre}
                    plot={movie?.Plot}
                    rating={movie?.imdbRating}
                    onClick={() => {
                        savedItems.find((item) => item.Title === movie.Title)
                          ? handleRemoveFromSaved(movie)
                          : handleAddToSaved(movie);
                      }}
                      buttonName={
                        savedItems?.find((item) => item.Title === movie.Title)
                          ? "remove Favorite"
                          : "add Favorite"
                      }
                    />
                </div>
            </div>
            <div>{loading && <Spinners />}</div>
        </div>
        </>
    )
}

export default DetailMovie