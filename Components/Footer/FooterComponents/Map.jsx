import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Image from "next/image";

const Map = () => {
  const [popupLoading, setPopupLoading] = useState(true);

  return (
    <div className="">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "15rem", width: "39rem" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hpdmFuaS1hZGEiLCJhIjoiY2xnaWYxZzl4MDRwZzNrb2JnMnRrdXVrMCJ9.4FdC1IKNlXa1gwP1bOSGlw`}
        // attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <Marker position={[39.8283, -98.5795]}>
          <Popup
            onOpen={() => setPopupLoading(false)}
            onClose={() => setPopupLoading(true)}
          >
            {popupLoading ? (
              <div>BosonQ Psi | USA</div>
            ) : (
              <>
                <img src="../public/assets/logo.png" alt="Icon" />
                <div>BosonQ Psi | USA</div>
              </>
            )}
          </Popup>
        </Marker>
        <Marker position={[55.3781, -3.4360]}>
          <Popup
            onOpen={() => setPopupLoading(false)}
            onClose={() => setPopupLoading(true)}
          >
            {popupLoading ? (
              <div>BosonQ Psi | UK</div>
            ) : (
              <>
                <img src="../public/assets/logo.png" alt="Icon" />
                <div>BosonQ Psi | UK</div>
              </>
            )}
          </Popup>
        </Marker>
        <Marker position={[20.5937, 78.9629]}>
          <Popup
            onOpen={() => setPopupLoading(false)}
            onClose={() => setPopupLoading(true)}
          >
            {popupLoading ? (
              <div>BosonQ Psi | India</div>
            ) : (
              <>
                <img src="../public/assets/logo.png" alt="Icon" />
                <div>BosonQ Psi | India</div>
              </>
            )}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;