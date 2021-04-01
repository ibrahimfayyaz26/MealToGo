import { mocks, mockImages } from "../data/mock";
import camelize from "camelize";

export const dataFetch = (location = "37.7749295,-122.4194155") => {
  const promiseData = new Promise((resolve, reject) => {
    const mockData = mocks[location];
    if (!mockData) {
      reject("Error");
    } else {
      resolve(mockData);
    }
  });
  return promiseData;
};

export const newData = ({ results }) => {
  const newResult = results.map((item) => {
    item.photos = item.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...item,
      address: item.vicinity,
      isOpenNow: item.opening_hours && item.opening_hours.open_now,
      isClosedTemporarily: item.business_status === "CLOSED_TEMPORARILY",
    };
  });
  const cam = camelize(newResult);
  return cam;
};
