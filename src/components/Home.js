import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://i.imgur.com/ZzFES.gif")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <span>
          <button
            type="button"
            class="btn btn-warning btn-lg"
            style={{ marginTop: "20%", marginLeft: "55%" }}
          >
            Garbage
          </button>
          <button
            type="button"
            class="btn btn-warning btn-lg"
            style={{ marginTop: "-4%", marginLeft: "35%" }}
          >
            Treasures
          </button>
        </span>
      </div>
    </>
  );
};

export default Home;
