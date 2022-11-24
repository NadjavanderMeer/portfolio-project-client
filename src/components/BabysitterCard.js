export const BabysitterCard = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.imageUrl}</p>
      <button>About me</button>
    </div>
  );
};
