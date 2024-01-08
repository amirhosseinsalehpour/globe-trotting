import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParam] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  return (
    <div
      className={styles.mapContainer}
      // onChange={() => setSearchParam(mapPosition)}
    >
      <MapContainer
        center={mapPosition}
        // center={[mapLat || 40, mapLng || 0 ]}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <spann>{city.cityName}</spann>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
      </MapContainer>

      {/* <h1>Map</h1>
      <h1>
        Positions {lat} , {lng}
      </h1>
      <button onClick={() => setSearchParam({ lat: 23, lng: 25 })}>
        Change pos
      </button> */}
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position, 6);
  return null;
}

export default Map;
