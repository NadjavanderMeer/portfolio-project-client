import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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
    <div className="flex flex-col items-center">
      <div className="text-4xl mt-8">
        <p>Families</p>
      </div>
      <div className="flex mt-8">
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
      <div className="flex items-center m-8">
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
          {!families
            ? ""
            : families
                .filter(
                  (family) =>
                    family.locationLatitude && family.locationLongitude
                )
                .map((family) => (
                  <Marker
                    key={family.id}
                    position={[
                      family.locationLatitude,
                      family.locationLongitude,
                    ]}
                  >
                    <Popup>
                      <img
                        className="rounded-full h-12 w-12"
                        alt={family.name}
                        src={family.imageUrl}
                      />
                      <p>{family.name}</p>
                    </Popup>
                  </Marker>
                ))}
        </MapContainer>
      </div>
    </div>
  );
};
