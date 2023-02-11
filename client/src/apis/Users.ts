import { axiosInstance } from "../utils/dataRequests";

export const fetchAllUsers = async () => {
  const { data } = await axiosInstance.get("/users");
  return data;
};

export const fetchSingleUser = async (id: string) => {
  const { data } = await axiosInstance.get(`/users/${id}`);
  return data;
};

export const putNewUser = async (email: string) => {
  const { data } = await axiosInstance.post("/users", { email });
  return data;
};
