export const BabysitterCard = (props) => {
  return (
    <div>
      <h5>{props.name}</h5>
      <p>{props.imageUrl}</p>
      <button>About me</button>
    </div>
  );
};
