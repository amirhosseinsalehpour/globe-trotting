import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParam] = useSearchParams();
  console.log(searchParams);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lat);
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Positions {lat} , {lng}
      </h1>
      <button onClick={() => setSearchParam({ lat: 23, lng: 25 })}>
        Change pos
      </button>
    </div>
  );
}

export default Map;
