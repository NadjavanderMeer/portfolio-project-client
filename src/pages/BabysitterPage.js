import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BabysitterCard } from "../components";
import { selectBabysitters } from "../store/babysitter/selectors";
import { fetchBabysitters } from "../store/babysitter/thunks";

export const BabysitterPage = () => {
  const dispatch = useDispatch();

  const babysitters = useSelector(selectBabysitters);

  useEffect(() => {
    dispatch(fetchBabysitters());
  }, [dispatch]);

  return (
    <div>
      <h1>Babysitters</h1>
      {!babysitters
        ? "Loading..."
        : babysitters.map((babysitter) => (
            <BabysitterCard
              key={babysitter.id}
              name={babysitter.name}
              imageUrl={babysitter.imageUrl}
            />
          ))}
    </div>
  );
};
