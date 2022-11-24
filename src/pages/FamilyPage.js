import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FamilyCard } from "../components";
import { selectFamilies } from "../store/family/selectors";
import { fetchFamilies } from "../store/family/thunks";

export const FamilyPage = () => {
  const dispatch = useDispatch();

  const families = useSelector(selectFamilies);

  useEffect(() => {
    dispatch(fetchFamilies());
  }, [dispatch]);

  return (
    <div>
      <h1>Families</h1>
      {!families
        ? "Loading..."
        : families.map((family) => (
            <FamilyCard
              key={family.id}
              name={family.name}
              imageUrl={family.imageUrl}
              id={family.id}
            />
          ))}
    </div>
  );
};
