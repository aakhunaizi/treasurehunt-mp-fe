import { ThingWrapper } from "../styles";

const Thing = ({ thing }) => {
  return (
    <ThingWrapper>
      <p>{thing.name}</p>
    </ThingWrapper>
  );
};

export default Thing;
