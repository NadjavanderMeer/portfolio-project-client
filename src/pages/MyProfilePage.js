import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  selectMyProfile,
  selectToken,
  // selectUser,
} from "../store/user/selectors";
import { EditProfileForm } from "../components/EditProfileForm";

export const MyProfilePage = () => {
  const [editMode, setEditMode] = useState();
  // const [profileForm, setProfileForm] = useState(null);

  const navigate = useNavigate();

  // const user = useSelector(selectUser);
  const profile = useSelector(selectMyProfile);
  const token = useSelector(selectToken);

  // useEffect(() => {
  //   if (profile) {
  //     const {
  //       locationLatitude,
  //       locationLongitude,
  //       name,
  //       imageUrl,
  //       description,
  //       hourlyRate,
  //       ageOfChildren,
  //       numberOfChildren,
  //     } = profile;
  //     setProfileForm({
  //       locationLatitude,
  //       locationLongitude,
  //       name,
  //       imageUrl,
  //       description,
  //       hourlyRate,
  //       ageOfChildren,
  //       numberOfChildren,
  //     });
  //   }
  // }, [profile]);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const babysitter = profile?.isBabysitter === true;

  // console.log("babysitter", babysitter);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="shadow-md rounded-2xl w-auto bg-white m-8">
      <div className="rounded-t-lg h-28 w-full mb-4 bg-red"></div>
      <div className="flex flex-col items-start justify-center p-4 -mt-24">
        <div className="block relative">
          <img
            alt={profile.name}
            src={profile.imageUrl}
            className="mx-auto object-cover rounded-full h-32 w-32 ml-8"
          />
        </div>
      </div>
      <div className="flex flex-col items-end justify-center p-4 -mt-20 mr-8">
        <button
          onClick={() => setEditMode(!editMode)}
          className="bg-green hover:bg-white text-white text-sm font-medium hover:text-green border border-white hover:border-green py-2 px-4 rounded-full"
          type="submit"
        >
          {editMode ? "Close edit mode" : "edit my profile"}
        </button>
      </div>
      {editMode ? (
        <EditProfileForm />
      ) : (
        <form className="container max-w-2xl mx-auto md:w-3/4">
          <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
                Name
              </h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className="relative ">
                  <p className="rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent text-left">
                    {profile.name}
                  </p>
                </div>
              </div>
            </div>
            <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
                Image
              </h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className="relative ">
                  <p className="rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent text-left">
                    {profile.imageUrl}
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
                  <p className="rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent text-left">
                    {profile.description}
                  </p>
                </div>
              </div>
            </div>
            {babysitter ? (
              <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
                  hourlyRate
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                  <div className="relative ">
                    <p className="rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent text-left">
                      € {profile.hourlyRate}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
                    Age of kids
                  </h2>
                  <div className="max-w-sm mx-auto md:w-2/3">
                    <div className="relative ">
                      <p className="rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent text-left">
                        {profile.ageOfChildren}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
                    Number of kids
                  </h2>
                  <div className="max-w-sm mx-auto md:w-2/3">
                    <div className="relative ">
                      <p className="rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent text-left">
                        {profile.numberOfChildren}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
                Location
              </h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className="relative ">
                  <MapContainer
                    style={{
                      height: "200px",
                      width: "400px",
                      alignContent: "center",
                    }}
                    center={[52.37175078534378, 4.901850028088493]}
                    zoom={13}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker
                      key={profile.id}
                      position={[
                        profile.locationLatitude,
                        profile.locationLongitude,
                      ]}
                    >
                      <Popup>
                        <p>{profile.name}</p>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
