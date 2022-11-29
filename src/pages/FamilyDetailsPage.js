import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectFamilyDetails } from "../store/family/selectors";
import { fetchFamilyDetails } from "../store/family/thunks";

export const FamilyDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const familyDetails = useSelector(selectFamilyDetails);

  useEffect(() => {
    dispatch(fetchFamilyDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      {!familyDetails ? (
        "Loading"
      ) : (
        <div className="text-4xl mt-8">
          <p>{familyDetails.name}</p>
        </div>
      )}
      <div className="mt-8">
        {!familyDetails ? (
          "Loading"
        ) : (
          <div>
            <img src={familyDetails.imageUrl} alt={familyDetails.name} />
            <p>{familyDetails.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
