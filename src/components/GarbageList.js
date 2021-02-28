import { ListWrapper } from "../styles";
import Thing from "./Thing";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const GarbageList = () => {
  const garbage = useSelector((state) => state.garbageReducer.garbage);

  const garbageList = garbage.map((thing) => (
    <Thing thing={thing} key={thing.id} />
  ));

  return (
    <div>
      <Helmet>
        <title>Garbage</title>
      </Helmet>
      <h1>These filthy humans keep littering the sea 😡</h1>
      <img
        src="https://media4.giphy.com/media/lOxulgieOO9BiReM8y/source.gif"
        alt="garbage"
      />
      <ListWrapper>
        <br />
        <div>
          <h1 style={{ textAlign: "center" }}>{garbageList}</h1>
        </div>
      </ListWrapper>
    </div>
  );
};

export default GarbageList;
