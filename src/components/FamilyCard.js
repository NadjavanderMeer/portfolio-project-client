export const FamilyCard = (props) => {
  return (
    <div>
      <h5>{props.name}</h5>
      <p>{props.imageUrl}</p>
      <button>About us</button>
    </div>
  );
};
