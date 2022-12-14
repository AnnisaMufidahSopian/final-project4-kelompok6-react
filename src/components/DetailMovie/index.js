import "./index.css"
const DetailsItem = ({
    title,
    image,
    year,
    rated,
    runtime,
    genre,
    plot,
    rating,
    id,
    onClick,
    buttonName,
}) => {
    return(
        <>
        <div className="main_card">
            <div className="card_left">
                <div className="card_datails">
                    <h1>{title}</h1>
                    <div className="card_cat">
                        <p className="PG">{rated}</p>
                        <p className="year">{year}</p>
                        <p className="genre">{genre}</p>
                        <p className="time">{runtime}</p>
                    </div>
                    <p className="disc">{plot}</p>
                    <a href={`https://www.imdb.com/title/${id}/`} target="_blank">Read More</a>
                <div className="social-btn">
                    <button onClick={onClick}>
                        <i className="fas fa-play"></i> {buttonName}
                    </button>
                    <button>
                        <i className="fas fa-download"></i>
                    </button>
                    <button>
                        <i className="fas fa-thumbs-up"></i> {rating}%
                    </button>
                </div>	
                </div>
            </div>
            <div className="card_right">
                <div className="img_container">
                    <img src={image} alt="" />
                    </div>
                    <div className="play_btn">
                        <a href={`https://www.imdb.com/title/${id}/`} target="_blank">
                            <i className="fas fa-play-circle"></i>
                        </a>
                    </div>
                </div>
            </div>
            </>
    )
}

export default DetailsItem