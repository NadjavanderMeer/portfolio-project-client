import { useMapEvents } from "react-leaflet";

export const MapClickHandler = ({ setter }) => {
  const map = useMapEvents({
    click: (e) => setter(e.latlng),
  });

  return <></>;
};
