import { apidata } from "./data";
export const salesData = () => {
  let localData: any = localStorage.getItem("salesdata");
  if (localData) {
    localData = JSON.parse(localData);
  } else {
    localData = apidata;
  }

  return localData;
};
