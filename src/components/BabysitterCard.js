import { Link } from "react-router-dom";

export const BabysitterCard = (props) => {
  return (
    <div className="shadow-md rounded-2xl w-56 bg-white m-2">
      <div className="rounded-t-lg h-28 w-full mb-4 bg-orange"></div>
      <div className="flex flex-col items-center justify-center p-4 -mt-16">
        <Link to={`/babysitters/${props.id}`} class="block relative">
          <img
            alt={props.name}
            src={props.imageUrl}
            className="mx-auto object-cover rounded-full h-16 w-16 "
          />
        </Link>
        <p className="text-black text-xl font-medium mt-2">{props.name}</p>
        {/* <p class="text-black text-xs flex items-center">Nantes</p> */}
        <div class="flex items-center mt-8">
          <Link to={`/babysitters/${props.id}`}>
            <button className="bg-green hover:bg-white text-white text-sm font-medium hover:text-green border border-white hover:border-green py-2 px-4 rounded-full">
              About me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
