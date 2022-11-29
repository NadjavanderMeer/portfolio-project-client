import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <div className="text-4xl mt-8">
        <p>Welcome!</p>
      </div>
      <div className="mt-8">
        <Link to="/families">
          <button className="bg-green hover:bg-white text-white text-sm font-medium hover:text-green border border-white hover:border-green py-2 px-4 rounded-full">
            I'm a babysitter
          </button>
        </Link>
        <Link to="/babysitters">
          <button className="bg-green hover:bg-white text-white text-sm font-medium hover:text-green border border-white hover:border-green py-2 px-4 rounded-full">
            I'm a parent
          </button>
        </Link>
      </div>
    </div>
  );
};
