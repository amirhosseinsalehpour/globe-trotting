import { useState } from "react";

// eslint-disable-next-line no-unused-vars
export function useGeolocation(defaultPosition = null) {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);
  
    function getPosition() {
      if (!navigator.geolocation)
        return setError("Your browser does not support geolocation");
  
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
    }
  
    return { isLoading, position, error, getPosition };
  }