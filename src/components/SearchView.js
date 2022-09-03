import Hero from "./Hero";
import { Link } from 'react-router-dom';

//api key :5cb6cdded1bf67d297f9c4aca759524b
//example link :https://api.themoviedb.org/3/search/company?api_key=5cb6cdded1bf67d297f9c4aca759524b&query=star%20wars&page=1

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`

  return (
    <div className="col-lg-3">
      <div className="card ">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row row-cols-2 row-cols-md-2 g-4 my-4 ">
            {resultsHtml}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchView;
