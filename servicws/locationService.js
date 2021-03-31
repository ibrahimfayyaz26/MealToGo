import camelize from "camelize";
import { locations } from "../data/locationMock/location";

export const locationFetch = (local) => {
  const newLocation = locations[local];
  return new Promise((resolve, reject) => {
    if (newLocation) resolve(newLocation);
    reject("error location not found");
  });
};

export const refinedLocation = (data) => {
  const newData = camelize(data);
  const { geometry } = newData.results[0];
  const { lat, lng } = geometry.location;
  return {
    lat,
    lng,
  };
};
