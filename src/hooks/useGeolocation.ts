import { useEffect, useState } from "react";
import { nominationLocationApi } from "../services/api";

interface Location {
  latitude: number | null;
  longitude: number | null;
}

interface Address {
  city: string;
  state: string;
}
interface GeolocationError {
  message: string;
}

export function useGeolocation() {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<GeolocationError | null>(null);
  const [address, setAddress] = useState<Address | null>(null);

  useEffect(() => {
    const handleLocationChange = async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      setError(null);

      try {
        const response = await nominationLocationApi.get(
          `reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        if (response.data && response.data.display_name) {
          setAddress({
            city: response.data.address.municipality,
            state: response.data.address["ISO3166-2-lvl4"].substring(3),
          });
        } else {
          setAddress(null);
        }
      } catch (err) {
        setError({ message: "Falha ao obter o endereço." });
      }
    };

    const handleError = (error: GeolocationPositionError) => {
      setError({ message: error.message });
    };

    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        handleLocationChange,
        handleError,
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      setError({ message: "Geolocation is not supported by this browser." });
    }
  }, [navigator.geolocation]);
  return { location, address, error };
}
