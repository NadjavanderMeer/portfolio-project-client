import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

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
    <div className="flex flex-col items-center">
      <div className="text-4xl mt-8">
        <p>Babysitters</p>
      </div>
      <div className="flex mt-8">
        {!babysitters
          ? "Loading..."
          : babysitters.map((babysitter) => (
              <BabysitterCard
                key={babysitter.id}
                name={babysitter.name}
                imageUrl={babysitter.imageUrl}
                id={babysitter.id}
              />
            ))}
      </div>
      <div className="flex items-center mt-8">
        <MapContainer
          style={{ height: "300px", width: "500px", alignContent: "center" }}
          center={[52.37175078534378, 4.901850028088493]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {!babysitters
            ? ""
            : babysitters.map((babysitter) => (
                <Marker
                  key={babysitter.id}
                  position={[
                    babysitter.locationLatitude,
                    babysitter.locationLongitude,
                  ]}
                >
                  <Popup>
                    <p>{babysitter.name}</p>
                  </Popup>
                </Marker>
              ))}
        </MapContainer>
      </div>
    </div>
  );
};
