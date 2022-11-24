import { Link } from "react-router-dom";

export const FamilyCard = (props) => {
  return (
    <div>
      <h5>{props.name}</h5>
      <p>{props.imageUrl}</p>
      <Link to={`/families/${props.id}`}>
        <button>About us</button>
      </Link>
    </div>
  );
};
