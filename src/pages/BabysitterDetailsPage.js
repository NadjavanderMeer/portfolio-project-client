import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectBabysitterDetails } from "../store/babysitter/selectors";
import { fetchBabysitterDetails } from "../store/babysitter/thunks";

export const BabysitterDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const babysitterDetails = useSelector(selectBabysitterDetails);

  useEffect(() => {
    dispatch(fetchBabysitterDetails(id));
  }, [dispatch, id]);

  if (!babysitterDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="shadow-md rounded-2xl w-auto bg-white m-8">
      <div className="rounded-t-lg h-28 w-full mb-4 bg-orange"></div>
      <div className="flex flex-col items-start justify-center p-4 -mt-24">
        <div className="block relative">
          <img
            alt={babysitterDetails.name}
            src={babysitterDetails.imageUrl}
            className="mx-auto object-cover rounded-full h-32 w-32 ml-8"
          />
        </div>
      </div>
      <div className="flex flex-col items-end justify-center p-4 -mt-20 mr-8">
        <button
          className="bg-green hover:bg-white text-white text-sm font-medium hover:text-green border border-white hover:border-green py-2 px-4 rounded-full"
          type="submit"
        >
          Get in touch!
        </button>
      </div>
      <form className="container max-w-2xl mx-auto md:w-3/4">
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
              Name
            </h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative ">
                <p className="rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent text-left text-sm">
                  {babysitterDetails.name}
                </p>
              </div>
            </div>
          </div>
          <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
              Description
            </h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative ">
                <p className="rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent text-left text-sm">
                  {babysitterDetails.description}
                </p>
              </div>
            </div>
          </div>
          <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
              hourlyRate
            </h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative ">
                <p className="rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent text-left text-sm">
                  € {babysitterDetails.hourlyRate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
