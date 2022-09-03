import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero
        text="Millions of movies, TV shows and people to discover. Explore now."
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p>this is a react js app that browse movie from (TMDB)'s API</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
