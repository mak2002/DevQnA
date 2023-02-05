import { axiosInstance } from "../utils/dataRequests";

export const fetchAllPosts = async () => {
  const { data } = await axiosInstance.get("/posts");
  return data;
};

export const fetchAllAnswers = async (id: string) => {
  const { data } = await axiosInstance.get(`posts/allPosts/${id}`);
  return data;
};

export const fetchSinglePost = async (id: string) => {
  const { data } = await axiosInstance.get(`/posts/${id}`);
  return data;
};

export const putNewPosts = async (postDetails: any) => {
  const { data } = await axiosInstance.post("/posts", postDetails);
  return data;
};

export const deletePost = async (id: string) => {
  const { data } = await axiosInstance.delete(`/posts/${id}`);
  return data;
};

export const updatePost = async (id: string, postDetails: any) => {
  console.log("updatePost>>>>> ", postDetails.upvotes, postDetails);
  const { data } = await axiosInstance.put(`/posts/${id}`, postDetails);
  return data;
};
