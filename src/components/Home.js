import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <>
      <Helmet>
        <title>Treasure Hunt</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url("https://i.imgur.com/ZzFES.gif")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "92.5vh",
        }}
      >
        <span>
          <Link to="/garbage">
            <button
              type="button"
              className="btn btn-warning btn-lg"
              style={{ marginTop: "20%", marginLeft: "55%" }}
            >
              Garbage
            </button>
          </Link>
          <Link to="/treasures">
            <button
              type="button"
              className="btn btn-warning btn-lg"
              style={{ marginTop: "-4%", marginLeft: "35%" }}
              disabled={!user ? true : false}
            >
              Treasures
            </button>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Home;
