import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { selectMyProfile } from "../store/user/selectors";
import { editProfile } from "../store/user/thunks";

export const EditProfileForm = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectMyProfile);

  const [name, setName] = useState(profile.name);
  const [imageUrl, setImageUrl] = useState(profile.imageUrl);
  const [description, setDescription] = useState(profile.description);
  const [hourlyRate, setHourlyRate] = useState(profile.hourlyRate);
  const [ageOfChildren, setAgeOfChildren] = useState(profile.ageOfChildren);
  const [numberOfChildren, setNumberOfChildren] = useState(
    profile.numberOfChildren
  );

  const submitForm = (event) => {
    event.preventDefault();

    const updateProfile = {
      name,
      imageUrl,
      description,
      hourlyRate,
      ageOfChildren,
      numberOfChildren,
    };

    dispatch(editProfile(updateProfile));
  };

  const babysitter = profile?.isBabysitter === true;

  return (
    <form
      className="container max-w-2xl mx-auto md:w-3/4"
      onSubmit={submitForm}
    >
      <div className="space-y-6 bg-white">
        <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
          <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
            Name
          </h2>
          <div className="max-w-sm mx-auto md:w-2/3">
            <div className=" relative ">
              <textarea
                rows="1"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
          <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
            Image
          </h2>
          <div className="max-w-sm mx-auto md:w-2/3">
            <div className=" relative ">
              <textarea
                type="text"
                value={imageUrl}
                onChange={(event) => setImageUrl(event.target.value)}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
          <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
            Description
          </h2>
          <div className="max-w-sm mx-auto md:w-2/3">
            <div className=" relative ">
              <textarea
                rows="10"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
              />
            </div>
          </div>
        </div>
        {babysitter ? (
          <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
              hourlyRate
            </h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className=" relative ">
                <textarea
                  rows="1"
                  type="text"
                  value={hourlyRate}
                  onChange={(event) => setHourlyRate(event.target.value)}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                />
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
                <div className=" relative ">
                  <textarea
                    rows="1"
                    type="text"
                    value={ageOfChildren}
                    onChange={(event) => setAgeOfChildren(event.target.value)}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="items-center w-full p-4 space-y-4 text-black md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3 text-sm font-medium text-left">
                Number of kids
              </h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <textarea
                    rows="1"
                    type="text"
                    value={numberOfChildren}
                    onChange={(event) =>
                      setNumberOfChildren(event.target.value)
                    }
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                  />
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
        <div className="w-full px-4 pb-4 ml-auto text-black md:w-1/3">
          <button
            className="bg-green hover:bg-white text-white text-sm font-medium hover:text-green border border-white hover:border-green py-2 px-4 rounded-full"
            type="submit"
          >
            Save changes
          </button>
        </div>
      </div>
    </form>
  );
};

{
  /* <div>
  {edit ? (
    <input
      type="text"
      classNameName=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
      //   rows={50}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  ) : (
    <p>{text}</p>
  )}
</div>; */
}
