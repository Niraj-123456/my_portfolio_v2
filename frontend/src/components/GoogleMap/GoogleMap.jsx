import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function MyGoogleMap() {
  const containerStyles = {
    width: "100%",
    height: "600px",
  };

  const center = {
    lat: 27.727,
    lng: 85.369,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyles} center={center} zoom={15}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default React.memo(MyGoogleMap);
