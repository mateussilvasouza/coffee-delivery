import axios from "axios";
import { useState } from "react";
import { nominationLocationApi } from "../services/api";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface LocationError {
  message: string;
}

export const useGetDeliveryDistance = () => {
  const coffeeDeliveryCoordinates: Coordinates = {
    latitude: parseFloat(import.meta.env.VITE_COFFEE_DELIVERY_LATITUDE),
    longitude: parseFloat(import.meta.env.VITE_COFFEE_DELIVERY_LONGITUDE),
  };
  const [error, setError] = useState<LocationError | null>(null);

  // Função para obter a localização pelo CEP
  const getLocationByPostalCode = async (postalCode: string) => {
    try {
      const response = await nominationLocationApi.get(
        `search?postalcode=${postalCode}&format=json`
      );

      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
      } else {
        throw new Error("Nenhuma localização encontrada para o CEP fornecido.");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError({ message: err.message });
      } else if (err instanceof Error) {
        setError({ message: err.message });
      } else {
        setError({ message: "Erro desconhecido." });
      }
      return null;
    }
  };

  const haversineDistance = (
    coords1: Coordinates,
    coords2: Coordinates
  ): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;

    const lat1 = toRad(coords1.latitude);
    const lon1 = toRad(coords1.longitude);
    const lat2 = toRad(coords2.latitude);
    const lon2 = toRad(coords2.longitude);

    const deltaLat = lat2 - lat1;
    const deltaLon = lon2 - lon1;

    const a =
      Math.sin(deltaLat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
    const c = 2 * Math.asin(Math.sqrt(a));

    const earthRadiusKm = 6371;
    return earthRadiusKm * c;
  };
  const getDeliveryDistance = async (postalCode: string) => {
    const destinationCoords = await getLocationByPostalCode(postalCode);
    if (destinationCoords) {
      const distance = haversineDistance(
        coffeeDeliveryCoordinates,
        destinationCoords
      );
      return distance;
    }
    return null;
  };

  return {
    getDeliveryDistance,
    error,
  };
};
