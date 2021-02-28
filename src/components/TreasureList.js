import { ListWrapper } from "../styles";
import Thing from "./Thing";
import { useDispatch, useSelector } from "react-redux";
import { fetchTreasure } from "../store/actions/treasureActions";
import { Redirect } from "react-router";
import { Helmet } from "react-helmet";

const TreasureList = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const treasures = useSelector((state) => state.treasureReducer.treasures);
  console.log(treasures);
  const treasureList = treasures.map((thing) => (
    <Thing thing={thing} key={thing.id} />
  ));

  if (!user) return <Redirect to="/signin" />;

  return (
    <div onLoad={() => dispatch(fetchTreasure())}>
      <Helmet>
        <title>Treasures</title>
      </Helmet>
      <h1>Wow! You found a treasure 🏴‍☠️</h1>
      <img
        src="https://steemitimages.com/p/8SzwQc8j2KJb4ARrxQxCjX4jizub4U5CAK3WwB89psMSL81U3JynDcv19ot6rxGCgiHMtnbvUZY5FySNMvzwhK9kUeay8qveEFyTKSyuFZGVPwSfvAh?format=match&mode=fit"
        alt="treasure"
      />
      <ListWrapper>
        <br />
        <div>
          <h1 style={{ textAlign: "center" }}>{treasureList}</h1>
        </div>
      </ListWrapper>
    </div>
  );
};

export default TreasureList;
