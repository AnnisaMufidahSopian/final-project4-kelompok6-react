import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "../../features/detailSlice";
const MovieItem = ({
  title,
  idm,
  Image,
  Year,
  Type,
}) => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const navigateToDetails = (id) => {
        dispatch(fetchData({id}));
        navigate(`/movie/${id}`, { replace: true });
      };
  return (
    <div className="main-container">
      <div className="poster-container">
        <a href="#"><img src={Image} className="poster" /></a>
      </div>
      <div className="ticket-container">
        <div className="ticket__content">
          <h4 className="ticket__movie-title">{title}</h4>
          <p className="ticket__movie-slogan">
            {Type}, release {Year}.
          </p>
          <p className="ticket__current-price">{idm}</p>
          <button className="ticket__buy-btn" onClick={() => navigateToDetails(idm)}
          >Detail</button>
        </div>
      </div>
    </div>  
  )
};

export default MovieItem;
