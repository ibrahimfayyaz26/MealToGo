import { mocks } from "../data/mock";
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
    return {
      ...item,
      isOpenNow: item.opening_hours && item.opening_hours.open_now,
      isClosedTemporarily: item.business_status === "CLOSED_TEMPORARILY",
    };
  });
  const cam = camelize(newResult);
  return cam;
};
