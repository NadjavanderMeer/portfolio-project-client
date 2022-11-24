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
      {!babysitterDetails ? "Loading..." : <h1>{babysitterDetails.name}</h1>}
      <div>
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
