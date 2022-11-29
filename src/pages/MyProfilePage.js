import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import {
  selectMyProfile,
  selectToken,
  selectUser,
} from "../store/user/selectors";

export const MyProfilePage = () => {
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const profile = useSelector(selectMyProfile);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center">
      {!profile ? (
        "Loading..."
      ) : (
        <div>
          <div className="text-4xl mt-8">
            <p>{profile.name}</p>
          </div>
          <p>{profile.description}</p>
        </div>
      )}
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
          {!profile ? (
            "Loading..."
          ) : (
            <Marker
              key={profile.id}
              position={[profile.locationLatitude, profile.locationLongitude]}
            >
              {/* <Popup>
                  <p>{profile.name}</p>
                </Popup> */}
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};
