import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();
const BaseUrl = "http://localhost:8000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch(`${BaseUrl}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loadin data...");
      } finally {
        setLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCities(id) {
    try {
      setLoading(true);
      const res = await fetch(`${BaseUrl}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error loadin data...");
    } finally {
      setLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCities,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities};
