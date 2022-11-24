import { Link } from "react-router-dom";

export const BabysitterCard = (props) => {
  return (
    <div>
      <h5>{props.name}</h5>
      <p>{props.imageUrl}</p>
      <Link to={`/babysitters/${props.id}`}>
        <button>About me</button>
      </Link>
    </div>
  );
};
