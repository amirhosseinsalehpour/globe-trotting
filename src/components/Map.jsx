import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";
function Map() {
  // eslint-disable-next-line no-unused-vars
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParam] = useSearchParams();

  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
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

export default Map;
