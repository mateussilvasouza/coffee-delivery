import axios from "axios";

const viaCepApi = axios.create({
  baseURL: import.meta.env.VITE_VIA_CEP_API,
});

const nominationLocationApi = axios.create({
  baseURL: import.meta.env.VITE_NOMINATION_LOCATION_API,
});

export { nominationLocationApi, viaCepApi };
