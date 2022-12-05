import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import { selectMyProfile } from "../store/user/selectors";
import { editProfile } from "../store/user/thunks";
import { MapClickHandler } from "../components";

export const EditProfileForm = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectMyProfile);

  const [name, setName] = useState(profile.name);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState(profile.description);
  const [hourlyRate, setHourlyRate] = useState(profile.hourlyRate);
  const [ageOfChildren, setAgeOfChildren] = useState(profile.ageOfChildren);
  const [numberOfChildren, setNumberOfChildren] = useState(
    profile.numberOfChildren
  );
  const [location, setLocation] = useState(
    profile.locationLatitude && profile.locationLongitude
      ? {
          lat: profile.locationLatitude,
          lng: profile.locationLongitude,
        }
      : null
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
      location,
    };

    dispatch(editProfile(updateProfile));
  };

  const babysitter = profile?.isBabysitter === true;

  const uploadImage = async (event) => {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    // first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "hlyeng5l");

    //post request to Cloudinary, change to own link
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dwidgj8ft/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await response.json();
    console.log("file", file); // check if you get the url back
    setImageUrl(file.url); // put the url in local state, next step you can send it to the backend
  };

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
                className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
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
              <input
                type="file"
                onChange={uploadImage}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
              />
              <div className="mt-4">
                <img
                  alt=""
                  src={
                    imageUrl
                      ? imageUrl
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                  }
                  className="mx-auto object-cover rounded h-32 w-32 ml-8"
                />
                {imageUrl ? <p>Succesfully uploaded!</p> : ""}
              </div>
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
                className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
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
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
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
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
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
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-black w-full py-2 px-4 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
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
            <div className="relative" id="map">
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
                {location && (
                  <Marker
                    key={profile.id}
                    position={[location.lat, location.lng]}
                  />
                )}
                <MapClickHandler setter={setLocation} />
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
