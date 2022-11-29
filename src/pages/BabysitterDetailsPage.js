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

  return (
    <div>
      {!babysitterDetails ? (
        "Loading..."
      ) : (
        <div className="text-4xl mt-8">
          <p>{babysitterDetails.name}</p>
        </div>
      )}
      <div className="mt-8">
        {!babysitterDetails ? (
          "Loading..."
        ) : (
          <div>
            <img
              src={babysitterDetails.imageUrl}
              alt={babysitterDetails.name}
            />
            <p>{babysitterDetails.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
