import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToSaved, removeFromSaved } from "../../features/savedSlice";

import Spinners from "../../components/Spinner";
import MovieItem from "../../components/MovieItem";

function Saved() {
  const dispatch = useDispatch();

  const savedItems = useSelector((state) => state.saved.savedItems);
  const loading = useSelector((state) => state.saved.loading);

  const handleAddToSaved = (item) => {
    dispatch(addToSaved(item));
  };
  const handleRemoveFromSaved = (item) => {
    dispatch(removeFromSaved(item));
  };

  return (
    <>
    <center>
      <h1>Your Movie Favorite</h1>
      <hr width="80%" />
    </center>
      {savedItems.length === 0 ? (
        <div className="container">No News Saved</div>
      ) : (
        <div className="container">
          <div className="row">
            {savedItems.map((movie, index) => (
              <div className="col-md-4 py-2" key={index}>
                <MovieItem
                Image={movie?.Poster}
                index={index}
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
      )}
    </>
  );
}

export default Saved;
