import Map from "../components/Map";
import SideBar from "../components/SideBar";
import styles from './AppLayout.module.css'
function AppLayout() {
  return (  
    <div className={styles.app}>
      <SideBar />
      <Map/>
    </div>
  );
}

export default AppLayout;
